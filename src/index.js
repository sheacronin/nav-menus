const menuTitle = document.querySelector('.menu-title');
const menuItems = document.querySelectorAll('.menu-item');

const root = document.documentElement;
root.style.setProperty('--distance', '50px');

let menuItemsVisible = false;

// Fn to toggle class.
function toggleClass(el, cls) {
    // Decide if complete class needs to be removed or added.
    const action = el.classList.contains(cls) ? 'remove' : 'add';
    // Remove/add the class.
    el.classList[action](cls);
}

(function setZIndices() {
    let z = menuItems.length;
    menuTitle.style.zIndex = z + 1;
    menuItems.forEach((item) => {
        item.style.zIndex = z;
        z--;
    });
})();

function triggerFade(item) {
    if (
        !item.classList.contains('fade-in') &&
        !item.classList.contains('fade-out')
    ) {
        item.classList.add('fade-in');
    } else {
        toggleClass(item, 'fade-in');
        toggleClass(item, 'fade-out');
    }
}

function toggleMenuItems() {
    let distance = 50;

    menuItems.forEach((item) => {
        if (menuItemsVisible) {
            item.style.transform = 'translate(0, 0)';
        } else {
            item.style.transform = `translate(0, ${distance}px)`;
            distance += 50;
        }
        triggerFade(item);
    });
    menuItemsVisible = !menuItemsVisible;
}

menuTitle.addEventListener('click', toggleMenuItems);
