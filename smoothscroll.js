function smoothScroll(target, duration) {
    var targetElement = document.querySelector(target);
    targetElement.scrollIntoView({
      behavior: 'smooth',
      duration: duration
    });
  }

  var button = document.getElementsByClassName('about');
  button.addEventListener('click', function() {
    smoothScroll('#target-section', 1000);
  });