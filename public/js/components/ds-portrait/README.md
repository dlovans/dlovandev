# &lt;ds-portrait&gt;

`ds-portrait` is a web component that displays an image representing the owner.

## Attributes

### `ds-portrait-source`
The `ds-portrait-source` represents the relative path to the portrait image file.
- **Attribute Type:** `string`
- **Optional:** `true`
- **Defaults to:** `../../../img/portrait/llama.jpg`
- **Default Image License:** `Creative Commons`
- **Default Image source:** [Pixabay](https://picryl.com/media/lama-head-black-bd3c79)

## Example

```html
<ds-portrait
    ds-portrait-source="./img/portrait/me.jpg"
>
</ds-portrait>
```

## Usage

#### 1. To use this web component, import the module, then use JavaScript DOM methods:

```javascript
import './ds-portrait.comp.js'
```

#### 2. Or load the module and use the component declaratively in HTML:

```html
<script type="module" src="../components/ds-portrait/ds-portrait.comp.js"></script>
```

###### Continue in HTML:

```html
<ds-portrait></ds-portrait>
```

## Styling
The component uses the shadow DOM, so it can be styled using CSS variables.