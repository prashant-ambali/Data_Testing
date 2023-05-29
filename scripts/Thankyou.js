 // JavaScript for Animation
 const successContainer = document.querySelector('.success-container');

 // Show success animation
 function showSuccessAnimation() {
   successContainer.style.opacity = '1';
   successContainer.style.transform = 'translateY(0)';
 }

 // Delayed display of success animation
 setTimeout(showSuccessAnimation, 1000);