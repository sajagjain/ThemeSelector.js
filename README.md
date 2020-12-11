# ThemeSelector.js
This is a simple JS plugin to apply theme to your pages by specifying a color and the selectors

## How to use:
You can use this plugin by including the ThemeSelector.js file in the project. Invocation is as easy as the code below

```javascript
var eventThemeColor = '#D83B01';
$(document).ready(function () {
    var themeOptions = {
            eventColor: eventThemeColor,
            propertyAndElementList: [
                {
                    property: 'color',
                    selector: ['.sample-selector']
                },
                {
                    property: 'background-color',
                    selector: ['.sample-para']
                }
            ],
            dynamicClassesToAdd: ['#playlist .nav-tabs {color:'
                + eventThemeColor + ' !important;border-color:' + eventThemeColor
                + ' !important;}']
        };
        var theme = themeSelector(themeOptions);
        theme.applyTheme();
});
```
