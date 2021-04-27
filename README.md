# pp-drawer.js

```
npm i pp-drawer --save
```

[Check Example](https://pp-drawer.netlify.app)


## Getting Started

In the web project include pp-drawer.js with:

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pp-drawer@1.0.1/pp-drawer.min.css">
<script src="https://cdn.jsdelivr.net/npm/pp-drawer@1.0.1/pp-drawer.min.js" ></script>
```

Or 

## Install

```
npm i pp-drawer --save
```

## Initialize

```html
<div drawer-id="main" class="pp-drawer hidden_drawer drawer-shadow"></div>
<div drawer-id="main" class="pp-drawer-scrim hidden"></div>
```

```javascript
// Declare drawer
var drawer = new ppDrawer("main")
```

## Methods

### open: [Function]
```javascript
drawer.open();
```
### close: [Function]
```javascript
drawer.close();
```
### scrimClose: [Function]
<p>Default value true</p>
```javascript
drawer.scrimClose(false);
```

### isOpen: [Function]
```javascript
drawer.isOpen(); 
```
