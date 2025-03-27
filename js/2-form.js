const form = document.querySelector('.feedback-form');
const formEmail = form.querySelector('input');
const formMessage = form.querySelector('textarea');

const localStorageKey = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};
