document.addEventListener('DOMContentLoaded', function() {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  
    for (let smoothScrollLink of smoothScrollLinks) {
        smoothScrollLink.addEventListener('click', function(event) {
            event.preventDefault();
  
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    }
});
