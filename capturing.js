var capture = function(config){

    var replace_all = function(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    };
    var esc = function (text) {
        return replace_all(replace_all(replace_all(encodeURIComponent(text),
                                                   "[(]",
                                                   escape("(")),
                                       "[)]",
                                       escape(")")),
                           "[']",
                           escape("'"));
    };

    var uri = 'org-protocol://capture:/';

    uri += config.template;

    uri += '/' + encodeURIComponent(location.href)
        +  '/' + encodeURIComponent(document.title);

    var selection = window.getSelection().toString();
    if (selection != "") { uri += '/' +	esc(selection); };

    console.log("Preview of org-protocol URI: ", uri);

    return uri;
};

capture(config);
