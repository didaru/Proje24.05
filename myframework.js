function validateForm() {
    const form = document.querySelector('form');
    const email = form.querySelector('input[type="email"]');
    const password = form.querySelector('input[type="password"]');
    let isValid = true;
    
    if (email.value.trim() === '') {
      isValid = false;
      email.classList.add('error');
    } else {
      email.classList.remove('error');
    }
  
    if (password.value.trim() === '') {
      isValid = false;
      password.classList.add('error');
    } else {
      password.classList.remove('error');
    }
  
    if (!isValid) {
      alert('Please fill out all required fields.');
    }
  
    return isValid;
  }
  
  
  function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('light-theme')) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
  }
  
  
  window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.add(savedTheme);
    } else {
      document.body.classList.add('light-theme');
    }
  }
  
  
  function toggleMenu() {
    const menu = document.querySelector('.navbar');
    menu.classList.toggle('open');
  }
  