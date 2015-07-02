function tabDo(callback){
  chrome.tabs.query({url: 'http://y.qq.com/*'}, function(tabs) {
      if(tabs.length === 0){
        chrome.tabs.create({'url': "http://y.qq.com", 'pinned': true});
        return true;
      }
      var tab = tabs[0].id;
      callback(tab);
      });
};
