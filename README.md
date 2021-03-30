# Nav Menus

Simple, interactive drop-down and mobile navigation menus.

## Usage

Use the following class names for elements you wish to include in your navigation menus.

### Drop-Down Menus

```html
<div class="menu">
    <button class="menu-title">Drop-Down Links</button>
    <ul>
        <li class="menu-item">Item 1</li>
        <li class="menu-item">Item 2</li>
        <li class="menu-item">Item 3</li>
    </ul>
</div>
```

### Mobile Menus

Follow the same semantic structure as the drop-down menus, except asign the parent div the `.mobile-menu` class instead of the `.menu` class.

```html
<div class="mobile-menu">
    <button class="menu-title">Mobile Links</button>
    <ul>
        <li class="menu-item">Item 1</li>
        <li class="menu-item">Item 2</li>
        <li class="menu-item">Item 3</li>
    </ul>
</div>
```

### Styles

The base color of the navigation menus is stored in the `:root` selector in the CSS and can be changed.
The `Menu` class takes a `colorMode` argument of either `'monochrome'` or `'hues'` that will style the menu items based on the stored base color.
