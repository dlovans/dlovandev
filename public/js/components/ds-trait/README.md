# &lt;ds-trait&gt;

`ds-trait` is a web component that displays the qualities of the owner.

## Attributes

### `ds-traits`
The `ds-traits` attribute represents the qualities of the owner. String attribute. Optional. Default to "Entrepreneurish&#13;Autonomous&#13;Creativity&#13;Resiliant". Use `&#13` as a delimiter.


## Example

```html
<ds-trait
    ds-traits="Entrepreneurish&#13;Autonomous&#13;Creativity&#13;Resiliant">
</ds-trait>
```

## Usage

1. To use this web component, import the module, then use JavaScript DOM methods:

```javascript
import './ds-trait.comp.js'
```

2. Or load the module and use the component declaratively in HTML:

```html
<script type="module" src="../components/ds-trait/ds-trait.comp.js"></script>
```

Continue in HTML:

```html
<ds-trait
        ds-traits="Entrepreneurish&#13;Autonomous&#13;Creativity&#13;Resiliant">
</ds-trait>
```

## Styling
The component uses the shadow DOM, so it can be styled using CSS variables.
