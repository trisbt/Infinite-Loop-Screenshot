document.addEventListener('DOMContentLoaded', function () {
    var addPictureBtn = document.getElementById('addPictureBtn');
    addPictureBtn.addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            var tab = tabs[0];
            chrome.tabs.sendMessage(tab.id, { action: 'addPicture' });
        });
    });
});
