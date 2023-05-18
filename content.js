chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'replacePicture') {
        const images = document.getElementsByTagName('img');
        for (const image of images) {
            image.src = request.imageUrl;
        }
    }
});
