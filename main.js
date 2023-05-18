document.addEventListener('DOMContentLoaded', function () {
    const replaceBtn = document.getElementById('replaceBtn');
    replaceBtn.addEventListener('click', function () {
        const imageUrl = 'https://www.femalefoodie.com/wp-content/uploads/2021/12/paulie-gees-683x1024.jpg';
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'replacePicture', imageUrl: imageUrl });
        });
    });
});


