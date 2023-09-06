const light = document.querySelector('.light');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
  light.classList.toggle('light-on');
});
