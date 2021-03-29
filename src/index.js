// Fn to toggle class.
function toggleClass(el, cls) {
    // Decide if complete class needs to be removed or added.
    const action = el.classList.contains(cls) ? 'remove' : 'add';
    // Remove/add the class.
    el.classList[action](cls);
}

class MenuItem {
    constructor(el, name, index) {
        this.name = name;
        this.index = index;
        this.el = el;
        this.height = parseInt(window.getComputedStyle(el).height);
        this.distanceFromTop = this.height * (this.index + 1);
        this.zIndex;
    }
    toggleDisplay(isVisible) {
        console.log(isVisible);
        if (isVisible) {
            this.hide();
        } else {
            this.show();
        }
        this.triggerFade();
    }
    show() {
        this.el.style.transform = `translate(0, ${this.distanceFromTop}px)`;
    }
    hide() {
        this.el.style.transform = 'translate(0, 0)';
    }
    triggerFade() {
        if (
            !this.el.classList.contains('fade-in') &&
            !this.el.classList.contains('fade-out')
        ) {
            this.el.classList.add('fade-in');
        } else {
            toggleClass(this.el, 'fade-in');
            toggleClass(this.el, 'fade-out');
        }
    }
}

class Menu {
    constructor(titleEl, itemsArray) {
        this.items = itemsArray || [];
        this.titleEl = titleEl;
        this.titleEl.addEventListener('click', () => this.toggleMenuItems());
        this.itemsVisible = false;
    }
    setZIndices() {
        let z = this.items.length;
        this.titleEl.style.zIndex = z + 1;
        this.items.forEach((item) => {
            item.el.style.zIndex = z;
            z--;
        });
    }
    toggleMenuItems() {
        console.log(this);
        console.log(this.items);
        this.items.forEach((item) => {
            item.toggleDisplay(this.itemsVisible);
        });
        this.itemsVisible = !this.itemsVisible;
    }
}

const allMenus = document.querySelectorAll('.menu');

allMenus.forEach((menuEl) => {
    const title = menuEl.querySelector('.menu-title');
    const menu = new Menu(title);
    const items = [...menuEl.querySelectorAll('.menu-item')];
    items.forEach((itemEl) => {
        const item = new MenuItem(
            itemEl,
            itemEl.textContent,
            items.indexOf(itemEl)
        );
        menu.items.push(item);
    });
    menu.setZIndices();
});
