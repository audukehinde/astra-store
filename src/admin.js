const mainAdd = document.getElementById('main-add');
const formContainer = document.getElementById('form-container');
const close = document.getElementById('close');

mainAdd.addEventListener('click', () => {
  formContainer.style.display = 'block';
});

close.addEventListener('click', () => {
  formContainer.style.display = 'none';
})