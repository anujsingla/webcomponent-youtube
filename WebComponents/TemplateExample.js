class TemplateExample extends HTMLElement {
  constructor() {
    super();

    // get the template
    const templateExample = document.getElementById('templateexample');
    // clone the template
    const node = document.importNode(templateExample.content, true);
    // append in the dom
    document.body.appendChild(node);

    // create the template
    const templateElement = document.createElement('template');
    templateElement.innerHTML = `<p>Inside custom element</p>`
    // clone the template
    const cloneNode = document.importNode(templateElement.content, true);
    // append in the dom
    document.body.appendChild(cloneNode);
  }

}

customElements.define("template-example", TemplateExample);
