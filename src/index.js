import { MenuItem, MobileMenuItem, Menu } from './nav-menus';

// Store all instances of menu class.
const allMenus = document.querySelectorAll('.menu');

allMenus.forEach((menuEl) => {
    const title = menuEl.querySelector('.menu-title');
    // Create objects for each menu.
    const menu = new Menu(title, 'hues');
    const items = [...menuEl.querySelectorAll('.menu-item')];
    items.forEach((itemEl) => {
        // Create objects for each menu item.
        const ItemClass = itemEl.classList.contains('mobile-menu-item')
            ? MobileMenuItem
            : MenuItem;
        const item = new ItemClass(
            itemEl,
            itemEl.textContent,
            items.indexOf(itemEl)
        );
        menu.items.push(item);
    });
    // Set the z index style for each item.
    menu.setZIndices();
    menu.setFilters();
});
