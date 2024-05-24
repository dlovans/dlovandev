# &lt;ds-contact&gt;

`ds-contact` is a web component that provides a contact form, where data is sent over SMTP on the server.

## Attributes

### `ds-set-focus`
The `ds-set-focus` represents the trigger for setting focus on an input field encapsulated in the shadow DOM.
- **Attribute Type:** `boolean`
- **Note:** `Do not declare in HTML markup. Controlled by ds-app component, in response to custom event.`


## Example

```html
<ds-contact></ds-contact>
```

## Usage

#### 1. To use this web component, import the module, then use JavaScript DOM methods:

```javascript
import './ds-about.comp.js'
```

#### 2. Or load the module and use the component declaratively in HTML:
```html
<script type="module" src="../js/components/ds-contact/ds-contact.comp.js"></script>
```

###### Continue in HTML:

```html
<ds-contact></ds-contact>
```

## ENV
To make this component work, enter environment variables with your information. Check the example.env. Here's an example configuration:

```plaintext
# Example ENV File

SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
```

## Styling
The component uses the shadow DOM, so it can be styled using CSS variables. Shadow DOM children have `part` attributes to allow for styling in global CSS files.
