# Handbuch Jugend-Hackathons
[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) Paula Glaser, Maria Reimer, Daniel Seitz für [Open Knowledge Foundation Deutschland e.V.](http://www.okfn.de) und [mediale pfade.org – Verein für Medienbildung e.V.](http://www.medialepfade.org) 

Gefördert durch die Jugend- und Familienstiftung des Landes Berlin im Rahmen des Jugend-Demokratiefonds Berlin. Diese Förderung bedeutet nicht zwangsläufig, dass die Stiftung den Ergebnissen und Aussagen des Textes zustimmt.

[Hier](https://jugendhackt.github.io/Handbuch-Jugend-Hackathons) geht es zur Webseite des Handbuchs.



## How to add translations

Let's say you would like to translate the manual to english. (en)

* Move all transalted chapters to /_chapters_en
* Edit _config.yml:
	* add a new collection: chapters_en (just copy the entries for 'de' and replace 'de' with 'en')
	* add new defaults for chapters_en )(just copy the entries for 'de' and replace 'de' with 'en')
* create an index file ("index_en.md")
	* add metadata at the beginning of the file like this :
	<pre>
		---
			layout: complete
			title:	my manual title
			language: en
		---
	</pre>
	* Use 'complete' to render all chapters into one view with table of contents on the left (there is no other layout at the moment)
	* Any content of the index file will be rendered on the bottom left of the screen (very little space over there)


## How to add chapters
* Find the directory for your language (e.g. /chapters_en)
* Add a markdown file (.md)  to that directory or any subdirectory
* Add metadata to that file like this:
<pre>
	---
	title: 		"About us"
	number: 	"1.1"
	---
</pre>
	* You must use a chapter number!
	* Chapter number can have a depth of up to four ("w.x.y.z") w, x, y, z can be any numbers.
	* You can add empty chapters (only metadata, no contents) to generate extra Headings. (Can be useful if a chapter starts with a subchapter)
	* You can also add type: "excursion". Excursions should have a chapter number that may coincide with another chapter. In that case the excursion will be rendered right after the matching chapter.
