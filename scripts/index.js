let sliderIndex = 0;
const sliderImages = document.querySelectorAll('.slider img');

function showSlide(index) {
  sliderImages.forEach((image) => {
    image.style.display = 'none';
  });

  if (index >= sliderImages.length) {
    sliderIndex = 0;
  } else if (index < 0) {
    sliderIndex = sliderImages.length - 1;
  }

  sliderImages[sliderIndex].style.display = 'block';
}

function nextSlide() {
  showSlide(sliderIndex += 1);
}

function previousSlide() {
  showSlide(sliderIndex -= 1);
}

setInterval(nextSlide, 3000);