// Helper fn to toggle class.
function toggleClass(el, cls) {
    // Decide if complete class needs to be removed or added.
    const action = el.classList.contains(cls) ? 'remove' : 'add';
    // Remove/add the class.
    el.classList[action](cls);
}

function setBaseColor(color) {
    const root = document.documentElement;
    root.style.setProperty('--base-color', color);
}

class MenuItem {
    constructor(el, name, index) {
        this.el = el;
        this.name = name;
        this.index = index;
        this.measuredDimension = 'height';
        this._distanceFromStart;
    }
    get distanceFromStart() {
        const measurement = parseInt(
            window.getComputedStyle(this.el)[this.measuredDimension]
        );
        return measurement * (this.index + 1);
    }
    toggleDisplay(isVisible) {
        if (isVisible) {
            this.hide();
        } else {
            this.show();
        }
        this.triggerFade();
    }
    show() {
        this.el.style.transform = `translate(0, ${this.distanceFromStart}px)`;
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

class MobileMenuItem extends MenuItem {
    constructor(el, name, index) {
        super(el, name, index);
        this.measuredDimension = 'width';
    }
    show() {
        this.el.style.transform = `translate(${this.distanceFromStart}px, 0)`;
    }
}

class Menu {
    constructor(titleEl, colorMode, itemsArray) {
        this.items = itemsArray || [];
        this.titleEl = titleEl;
        this.titleEl.addEventListener('click', () => this.toggleMenuItems());
        this._colorMode = colorMode;
        this.itemsVisible = false;
    }
    get colorMode() {
        return this._colorMode;
    }
    set colorMode(mode) {
        // Remove spaces and standardize case of string.
        const uniformMode = mode.replace(/[\W_]/g, '').toLowerCase();
        if (uniformMode !== 'monochrome' && uniformMode !== 'hues') {
            alert('Invalid color mode. Please choose "monochrome" or "hues".');
            return;
        } else {
            this._colorMode = uniformMode;
        }
    }
    setZIndices() {
        let z = this.items.length;
        this.titleEl.style.zIndex = z + 1;
        this.items.forEach((item) => {
            item.el.style.zIndex = z;
            z--;
        });
    }
    setFilters() {
        if (this.colorMode === 'monochrome') {
            let bright = 0.9;
            let sat = 1.1;
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].el.style.filter =
                    `brightness(${bright}) ` + `saturate(${sat})`;
                bright -= 0.1;
                sat += 0.1;
            }
        } else if (this.colorMode === 'hues') {
            let n = 45;
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].el.style.filter = `hue-rotate(${n}deg)`;
                n += 45;
            }
        } else {
            console.log('Please set a color mode.');
        }
    }
    toggleMenuItems() {
        this.items.forEach((item) => {
            item.toggleDisplay(this.itemsVisible);
        });
        this.itemsVisible = !this.itemsVisible;
    }
}

export { MenuItem, MobileMenuItem, Menu, setBaseColor };
