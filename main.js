chrome.commands.onCommand.addListener(function(command) {
    var config = {};
    if(command == "link")
    {
        config.template = "l";
    }
    else if (command == "query")
    {
        config.template = "q";
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
