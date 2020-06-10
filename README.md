# Themes

Accepting custom themes.
There are 3 colors currently: main, bg and bg2.
Main is for the text color, bg is the background color and bg2 is currently not used.
A theme looks like this:
```
.theme-name
{
    --main: #fff;
    --bg: #000;
    --bg2: rgb(66,66,66);
}
```
Currently themes also have to be added to the `commandHandler.js` file to the `themes` array, so they are recognized. I plan on auto-recognizing themes from the css.

# Credits

## Font
* PxPlus IBM VGA9: https://int10h.org/oldschool-pc-fonts/fontlist/#ibmvgamcga
