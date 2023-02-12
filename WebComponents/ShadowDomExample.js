class ShadowDomExample extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    button {
      color:blue;
    }
    :host button {
      margin: 1rem;
    }
    </style>
    <div>
      <button>Click me 1 inside shadow dom</button>
      <button>Click me 2 inside shadow dom</button>
    </div>
    `

    // Attach the shadow DOM to this custom element
    const shadowRoot = this.attachShadow({mode: 'open'});
    // clone the template
    const node = document.importNode(template.content, true);
    shadowRoot.appendChild(node);
  }
}

customElements.define("shadowdom-example", ShadowDomExample);
