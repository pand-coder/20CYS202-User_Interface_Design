function openPopup(imageSrc) {
    const popupImage = document.getElementById('popupImage');
    const imagePopup = document.getElementById('imagePopup');

    popupImage.src = imageSrc;
    imagePopup.style.display = 'block';
}

function closePopup() {
    const imagePopup = document.getElementById('imagePopup');
    imagePopup.style.display = 'none';
}
