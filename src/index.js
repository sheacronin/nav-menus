import { MenuItem, MobileMenuItem, Menu } from './nav-menus';

const menus = (function createMenus() {
    // Store all instances of menu class.
    const menuElements = document.querySelectorAll('.menu, .mobile-menu');

    const menus = [];

    menuElements.forEach((menuEl) => {
        const title = menuEl.querySelector('.menu-title');
        // Create objects for each menu.
        // The second parameter in the constructor takes 'hues' or 'monochrome'
        // as an argument for the menu's color mode.
        const menu = new Menu(title, 'hues');
        // Create objects for each menu item.
        const ItemClass = menuEl.classList.contains('mobile-menu')
            ? MobileMenuItem
            : MenuItem;
        const items = [...menuEl.querySelectorAll('.menu-item')];
        items.forEach((itemEl) => {
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
        // Push each menu object into the menus array to be returned.
        menus.push(menu);
    });
    return menus;
})();

export { menus };
