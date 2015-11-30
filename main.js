// Translate the keyboard shortcuts in manifest.json

chrome.commands.onCommand.addListener(function(command) {
    var config = {};
    switch(command) {
    case "link":
        config.template = "l";
        break;
    case "capture":
        config.template = "c";
        break;
    case "other":
        config.template = "o";
        break;
    case "query":
        config.template = "q";
        break;
    }

    chrome.tabs.executeScript(
        {code: 'var config = ' + JSON.stringify(config)},
        function () {
            chrome.tabs.executeScript(
                {file: 'capturing.js'},
                (function (url_array) {
                    chrome.tabs.update({url : url_array[0]});
                }))
        }
    );
});

// Not useful if we are using a popup
// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.executeScript(
//         {file: "capturing.js"},
//         (function (url_array) {
//             chrome.tabs.update({url : url_array[0]});
//         }));
// });
