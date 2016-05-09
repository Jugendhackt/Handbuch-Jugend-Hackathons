hbjh 	= 	angular.module(
				'handbook',
				[
					//'ngTouch',
				]
			)


hbjh.run([

	'$rootScope',
	'$document',
	'$window',
	'$timeout',

	function($rootScope, $document, $window, $timeout){


		$rootScope.show_toc = false


		$rootScope.goBack = function() {
		    window.history.back()
		}

		var last_scroll_pos

		$rootScope.toggleTOC = function(){
			$rootScope.show_toc = !$rootScope.show_toc


			if($rootScope.show_toc){
				last_scroll_pos = html[0].scrollTop

			}else{
				html[0].scrollTop = last_scroll_pos
			}
		}

		$rootScope.toggleLang = function(){
			$rootScope.showLang = !$rootScope.showLang
		}

		//checking if page has scroll far enough to slim down the header:

		var body 	= $document.find('body'),
			header 	= $document.find('header'),
			html	= $document.find('html')

		$document.on('scroll', function(){
			window.requestAnimationFrame(function(){
				var padding_top	= parseInt(getComputedStyle(body[0]).getPropertyValue('padding-top'))

				header.toggleClass('slim', padding_top + document.body.getBoundingClientRect().top < 0)
			})
		})


		//check window width and switch layout:

		var threshold_px	= undefined 

		function adjustContentWidth(){		
			var width 			= document.body.getBoundingClientRect().width,
				rem				= parseInt(getComputedStyle(html[0]).getPropertyValue('font-size')),
				threshold_rem	= 70, // switch if content width < 70 rem,
				narrow_rem		= 20	

			threshold_px = threshold_px || threshold_rem * rem

			//if 60rem of default font-size won't fit on the screen
			// add class .narrow and set font-size on html,
			// so that the content's width is allways 30rem

			if(threshold_px > width){
				$rootScope.narrow = true
				body.addClass('narrow')
				body.removeClass('wide')
				html.css('font-size', (width/narrow_rem) + 'px')
			} else {
				$rootScope.narrow = false
				body.addClass('wide')
				body.removeClass('narrow')
				html.css('font-size', 'inherit')
			}
			$rootScope.$apply()
		}
		
		adjustContentWidth()
		angular.element($window).on('resize', adjustContentWidth)

		$timeout(adjustContentWidth, 500)
	}
])		


.directive('heroSpacer',[

	'$document',
	'$timeout',

	function($document, $timeout){
		return {
			restrict: 	'AE',
			scope: 		false,

			link: function(scope, element, attrs){
				var body = $document.find('body')

				function checkHero(){
						var hero_out = element[0].getBoundingClientRect().bottom <= 0

						body.toggleClass('hero-in', !hero_out)
						body.toggleClass('hero-out', hero_out)
				}

				$timeout(checkHero, 500)

				$document.on('scroll', function(){
					window.requestAnimationFrame(checkHero)
				})
				
			}
		}
	}
])



