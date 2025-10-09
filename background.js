chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status !== 'complete') return;
  
  const url = tab.url || '';

  if (tab.incognito && url.includes('youtube.com')) {
    chrome.tabs.update(tabId, { url: 'https://youtubepuncked.netlify.app' });
    return;
  } 

  if (!tab.incognito && (url === 'https://www.youtube.com/' || url === 'https://www.youtube.com')) {
    chrome.tabs.update(tabId, { url: 'https://www.youtube.com/feed/subscriptions' });
  }
});
