const ThemeSelector = function (options) {
    this.options = {
        eventColor: '#D83B01',
        propertyAndElementList: [],
        dynamicClassesToAdd: []
    };
    this.options = Object.assign(this.options, options);
};

ThemeSelector.prototype.setColor = function (color) {
    this.options.eventColor = color;
}

ThemeSelector.prototype.getColor = function(){
    return this.options.eventColor;
}

ThemeSelector.prototype.setElementList = function(propertyAndElementList){
    this.options.propertyAndElementList = propertyAndElementList;
}

ThemeSelector.prototype.getElementList = function(){
    return this.options.propertyAndElementList;
}

ThemeSelector.prototype.applyTheme = function(){
    var selectedColor = this.options.eventColor;
    
    if(this.options.propertyAndElementList.length > 0){
        this.options.propertyAndElementList.forEach(element => {
            if (typeof element.property !== undefined
                && element.property != undefined
                && element.property !== null
                && typeof element.selector !== undefined) {
                element.selector.forEach(sel => {
                    $(sel).css(element.property, selectedColor);
                });
            }
        });
    }

    if (this.options.dynamicClassesToAdd.length > 0) {
        $("#themeStyle").remove();
        $("head").append('<style id="themeStyle" type="text/css"></style>');
        var newStyleElement = $("head").children(':last');
        newStyleElement.html('');
        this.options.dynamicClassesToAdd.forEach(element => {
            newStyleElement.append(element);
        });
    }
}

const themeSelector = new Proxy(ThemeSelector, {
    apply(target, thisArg, argumentsList) {
        return new target(...argumentsList);
    }
});
