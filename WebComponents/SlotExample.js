class SlotExample extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
      slot {
        color:red;
      }
      ::slotted(h1) {
        color: blue
      }
      ::slotted([slot="footer"]) {
        color: green;
      }
      main ::slotted(*) {
        color:orange
      }
    </style>
    <div>
      <header><slot name="header">Fallback content for header</slot></header>
      <main><slot>Fallback content for main</slot></main>
      <footer><slot name="footer">Fallback content for footer</slot></footer>
    </div>
    `

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(template.content.cloneNode(true));

  }
}

customElements.define("slot-example", SlotExample);
