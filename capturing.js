var capture = function(config){

    /**
     * Escape all instances of a character @p char
     */
    String.prototype.esc = function(char) {
        var rx = new RegExp("[" + char + "]", 'g');
        return this.replace(rx, escape(char));
    }

    /**
     * Escape all parentheses and single quotes in a string
     */
    var esc_parentheses_quote = function (text) {
        return text.esc("(").esc(")").esc("'");
    }

    /**
     * Construct a URI for the appropriate the org-capture template.
     * TEMPLATE corresponds to org-capture-template hotkey.
     *
     * The general format is:
     * org-protocol://capture://TEMPLATE/URL/TITLE/TEXT
     */
    var uri = 'org-protocol://capture://';

    // Only include text field if there is a selection in the webpage
    var text = window.getSelection().toString();
    if (text != "") { text = '/' + esc_parentheses_quote(text);};

    switch (config.template) {
    case "c":
        uri = uri + config.template + '/'
            + encodeURIComponent(window.location.href) + '/'
            + encodeURIComponent(document.title) 
            + text;
        break;
    case "l":
        uri = uri + config.template + '/'
            + encodeURIComponent(location.href) + '/'
            + encodeURIComponent(document.title);
        break;
    case "o":
        uri = uri + encodeURIComponent(window.location.href) + '/'
            + encodeURIComponent(document.title)
            + text;
        break;
    }

    console.log("Preview of org-protocol URI: ", uri);

    location.href = uri;
};

capture(config);
