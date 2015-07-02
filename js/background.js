chrome.commands.onCommand.addListener(function(command) {
    tabDo(function(tab){
	if (command == "play") {
            chrome.tabs.sendMessage(tab, "#btnplay");
	}
    });
});
