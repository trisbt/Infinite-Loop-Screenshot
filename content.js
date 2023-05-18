chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'addPicture') {
        var imageUrl = 'assets/IMG_5595.jpg';
        var img = document.createElement('img');
        img.src = imageUrl;
        document.body.appendChild(img);
    }
});
