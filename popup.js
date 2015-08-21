document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', function() {
        var templateField = document.getElementById('template');
        var config = {template: templateField.value};
        chrome.tabs.executeScript(
            {code: 'var config = ' + JSON.stringify(config)},
            function () {
                chrome.tabs.executeScript(
                    {file: 'capturing.js'},
                    (function (url_array) {
                        chrome.tabs.update({url : url_array[0]});
                    })
                )
            });
    }, false);
}, false);
