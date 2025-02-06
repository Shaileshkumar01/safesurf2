importScripts("eventListeners.js");

chrome.runtime.onInstalled.addListener(() => {
    console.log("Secure Student Browsing extension installed!");
});
