# Nav Menus

Simple, interactive drop-down and mobile navigation menus.

## Usage

### Installation

Install the npm package in the command line:

```bash
npm install nav-menus
```

Webpack should be configured to use `css-loader` and `style-loader`.

### Your HTML

Use the following class names for elements you wish to include in your navigation menus.

#### Drop-Down Menus

```html
<div class="menu">
    <button class="menu-title">Drop-Down Links</button>
    <ul>
        <li class="menu-item"><a href="#">Item 1</a></li>
        <li class="menu-item"><a href="#">Item 2</a></li>
        <li class="menu-item"><a href="#">Item 3</a></li>
    </ul>
</div>
```

#### Mobile Menus

Follow the same semantic structure as the drop-down menus, except asign the parent div the `.mobile-menu` class instead of the `.menu` class.

```html
<div class="mobile-menu">
    <button class="menu-title">Mobile Links</button>
    <ul>
        <li class="menu-item"><a href="#">Item 1</a></li>
        <li class="menu-item"><a href="#">Item 2</a></li>
        <li class="menu-item"><a href="#">Item 3</a></li>
    </ul>
</div>
```

The suggested tag of the parent element with the `.menu` class should be `nav` or `div`, or `footer`, `nav`, or `div` for a parent element with the `.mobile-menu` class.

### Your JavaScript

Import and run the `createMenus` function in JavaScript.

```javascript
import { createMenus } from 'nav-menus';
createMenus();
```

#### createMenus

`createMenus` takes two optional parameters: **baseColor** and **colorMode**.

##### baseColor

Assigns the base color of your nav menus. Can be changed to any valid color value. Default value is <span style="color:#ddbbff">#ddbbff</span>.

##### colorMode

Styles the menu items based on the **baseColor**. Accepts a value of either `'monochrome'` or `'hues'`. Default value is `'hues'`.

##### Example

```javascript
createMenus('lightblue', 'monochrome');
```
