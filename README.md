css & javascript that i'm using to make my cards in anki look nice.

notes on usage, perhaps mostly for myself:

*css*
anki by default supports external css stuff.

in the styling field on a card model, 
`@import url("_kanji-key.css");`

*javascript*
the js booster anki addon is necessary to have the javascript be external to anki. this is desired because then you can version-control your extremely finicky javascript.

in the front/back html fields for a card model,
`<script type="text/javascript" src="_background-picker.js"></script>`

*other stuff*
i have a folder containing the css, js, etc in reasonable place on my machine; however, anki demands that the files be in the .media folder. to never have to open that folder, i have a symlink in the anki.media folder to each file. if the file name is foo.css, in the .media folder, it's \_foo.css so that anki doesn't clear it out as unused media.
