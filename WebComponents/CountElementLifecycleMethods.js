// + {count} -
// attribute - steps - 1,5 initalValue = 0,1,2

class CountElementLifecycleMethods extends HTMLElement {
  static get observedAttributes() {
    return ['steps', 'initialvalue'];
  }
  // get/set for attributes
  get initialvalue() {
    return this.getAttribute('initialvalue')
  }
  set initialvalue(value) {
    if (value) {
      this.setAttribute('initialvalue');
    } else {
      this.removeAttribute('initialvalue')
    }
  }

  get steps() {
    return this.getAttribute('steps')
  }
  set steps(value) {
    if (value) {
      this.setAttribute('steps');
    } else {
      this.removeAttribute('steps')
    }
  }
  // define attributes
  countElement
  decrementMethod
  incrementMethod

  constructor() {
    super();
    console.log('constructor method');

    this._shadowRoot = this.attachShadow({mode: 'open'});
    this._shadowRoot.innerHTML = `
    <button id="decrement">-</button>
    <span id="count">0</span>
    <button id="increment">+</button>
    `
    this.countElement = this._shadowRoot.querySelector('#count');
    this.decrementMethod = this._shadowRoot.querySelector('#decrement');
    this.incrementMethod = this._shadowRoot.querySelector('#increment');
  }

  connectedCallback() {
    console.log('connectedCallback method');
    this.count = this.initialvalue || 0;
    this.countElement.innerText = this.count;

    this.decrementMethod.addEventListener("click", this.decrementValue.bind(this));
    this.incrementMethod.addEventListener("click", this.incrementValue.bind(this));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`${name}'s changed from ${oldValue} to ${newValue}`);
  }

  disconnectedCallback() {
    console.log('disconnectedCallback method');
    this.decrementMethod.removeEventListener("click", this.decrementValue.bind(this));
    this.incrementMethod.removeEventListener("click", this.incrementValue.bind(this));
  }

  decrementValue() {
    this.count = +this.count - +this.steps || 1;
    this.countElement.innerText = this.count;
  }

  incrementValue() {
    this.count = +this.count + +this.steps || 1;
    this.countElement.innerText = this.count;
  }
}

customElements.define("countelement-lifecyclemethods", CountElementLifecycleMethods);
