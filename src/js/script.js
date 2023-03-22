 const carouselButton = document.querySelectorAll('.button');
 const images = document.querySelectorAll('.image');
 

 carouselButton.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        
        disableSelectedButton();
        
        selectCarouselButton(btn);
        
        hideActiveImage();

        showBackgroundImage(index);
    })
 })

function showBackgroundImage(index) {
    images[index].classList.add('active');
}

function selectCarouselButton(btn) {
    btn.classList.add('select');
}

function hideActiveImage() {
    const imageActive = document.querySelector('.active');
    imageActive.classList.remove('active');
}

function disableSelectedButton() {
    const buttonSelect = document.querySelector('.select');
    buttonSelect.classList.remove('select');
}
