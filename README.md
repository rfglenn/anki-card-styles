css and bullshit for anki cards

i took someone else's css, thanks comrade (https://www.reddit.com/r/Anki/comments/4n6cbf/does_anyone_have_a_goodlooking_anki_css_template/d41xugx/) and made a bunch of edits to it (thanks boyfriend, rpearl) to make it a little more in line with my taste. 

notes, perhaps mostly for myself:

i have a folder containing the css, etc on my machine; i have a symlink in the anki.media folder to each file. if the file name is foo.css, in the .media folder, it's _foo.css so that anki doesn't clear it out as unused media.

in the styling field on a card, 
@import url("_kanji-key.css");

