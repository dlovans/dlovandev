// Create template object.
export const template = document.createElement('template')

// Populate template object.
template.innerHTML = `
<form method="POST" action="./smtp">
  <h3 part="contact-title">Got an idea?</h3>
  <div class="name-wrapper wrapper" part="name-wrapper">
    <label for="flname" part="label">Name:</label>
    <input name="flname" type="text" id="flname">
  </div>
  <div class="email-wrapper wrapper" part="email-wrapper">
    <label for="email" part="label">Email:</label>
    <input name="email" type="email" id="email">
  </div>
  <div class="message-wrapper wrapper" part="message-wrapper">
    <label for="message" part="label">Message:</label>
    <textarea name="message" id="message" wrap="hard"></textarea>
  </div>
  <p class="status-message" part="status-message"></p>
  <input type="submit" id="submit" part="submit-button">
</form>
`
