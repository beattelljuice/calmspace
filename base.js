  document.querySelectorAll('.dropdown-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const dropdown = button.parentElement;
      const menu = dropdown.querySelector('.dropdown-menu');
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('click', (e) => {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (!e.target.closest('.dropdown')) {
          menu.style.display = 'none';
        }
      });
    });
  });