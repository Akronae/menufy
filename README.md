> The easy way to build contextual menusmen

# Demo <https://akronae.github.io/menufy/>

# Installation
## 1) Download `menufy.js` & `menufy.css`.
## 2) Include these files.
## 3) You are ready !

# API
## Sample
### Initialising `ContextMenu`
``` javascript
let menu = [
  { meta: { target: 'a-class' } },
  { label: 'I\'m just a label !' },
  { label: 'ALEERT!', action: () => alert('RIING!') }
]
let contextMenu = new Menufy( menu, 'right' )
```   
The `menu.meta` tells menufy to show up only when clicking on a element containing `a-class` class.  
`label` define a menu's line, `action` define a callback on click.  
`right` (could be `left` or `none`) define on wich mouse event the menu should be shown.  
For demo, see the "demo" page.
## Methods
### `ContextMenu.show( x, y )`  
Make context menu appear at x, y position.
### `ContextMenu.hide()`  
Hide / Close context menu.
### `ContextMenu.moveTo( x, y )`  
Move the context menu to x, y position.
### `ContextMenu.show( x, y )`  
Make context menu appear at x, y position
### `ContextMenu.buildDOM( structure )`  
Modify the context menu's HTML code

## Properties
### `hideDefaultContextMenu`  
If `true`, on trigger, default context menu will be visible, else hidded.
### `checkClasses`
If `true`, context menu will only be visible on right/left click hover certains classes.
### `trigger`
Either `left`, `right`, `none`. Define when the menu is showed.
