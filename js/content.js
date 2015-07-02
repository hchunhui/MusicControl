chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    $(message).click();
});
