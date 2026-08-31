(() => {
  const menus = [...document.querySelectorAll('details.menu')];
  if (!menus.length) return;

  const closeAll = (except = null) => {
    for (const menu of menus) {
      if (menu !== except) menu.removeAttribute('open');
    }
  };

  document.addEventListener('click', (event) => {
    const clickedMenu = event.target.closest('details.menu');
    if (!clickedMenu) {
      closeAll();
      return;
    }

    if (event.target.closest('.menu-panel a')) {
      closeAll();
      return;
    }

    closeAll(clickedMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeAll();
      document.querySelector('.menu summary')?.focus();
    }
  });

  window.addEventListener('pageshow', () => closeAll());
})();
