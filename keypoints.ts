/*

What is Web Components?

Web components are a set of web platform APIs that helps to create new HTML
tags to use in web apps. Custom components build on web component standards
will work on all modern brosers and with any javascript library or framework
that work with HTML.

In short, It helps to create custom elements like div, span, header html elements.

There are three things in web components:

Custom elements:
A set of javascript APIs that helps to define custom elements like:
customElements.define("hello-world", HelloWorld);

Shadow DOM:
A set of javascript APIs that helps to attach an encapsulated shadow DOM tree
to an element. We can keep an elements private and nobody will change it from
outside.

HTML templates: <template> and <slot> elements
It helps to write markup templates that are not displayed in the rendered
page. We can use it multiple times.

Steps to create web components or custom elements:

1. Create a class in which you add functionality
2. Register custom element with "customElements.define("hello-world", HelloWorld)"
method.
3. If required, add shadow DOM
4. If required use template, slot templates.
5. Use custom elements in your web app where you want to use.


Lifecycle methods of web components?
Try to understand with example

custom elements go into many lifecyle from creating to destroyed like:

- Element creation/intialization
- Element inserted into the DOM
- Upated via events like click event or many more
- Deleted from the DOM

constructor()
connectedCallback()
disconnectedCallback()
attributeChangedCallback(name, oldValue, newValue)
adoptedCallback()

- constructor()

It is used for creating or intializing ES6 classes and is called when an 
instance of an element is called.

It is used to intialize component state, setting up event listener or
create instance of Shadow DOM.
We will call super() method in the first. It inherits all the properties
and methods of the class it extends.

- connectedCallback()
It is called when element is added to the DOM. We can set attribute, fetch
resources, render templates.

- disconnectedCallback()
It is called when element is removed from the DOM. It is used to clean or
free up resources like
Unsubscribe from DOM events.
Stop interval timers
Free resources that won't be garbage collected automatically

- attributeChangedCallback(attrName, oldVal, newVal)
It is called when attributes are added, removed, upated, or replaced.
We need to specific which attribute will change in this method:
static get observedAttributes - it return array of attributes.

static get observedAttributes() {
  return ['attr1', 'attr2'];
}

attributeChangedCallback(name, oldValue, newValue) {
  console.log(`${name}'s changed from ${oldValue} to ${newValue}`);
}

- adoptedCallback()
- It is called when custom element is moved from one document to another
one with document.adoptNode(element) method. It is used when we are dealing
with iframe elements and each iframe has its own DOM.

Let's check with Count increment/decrement example 





HTML template element:

It is an HTML element and used to define snippets of HTML.
<template>
  <p>Hello world</p>
</template>
If you run this code in the browser it will not render and show empty screen.
It allows us to define content and save it for later. We will render this
in the browser with the help of javascript.

// In Javascript
const template = document.querySelector('template');
const node = document.importNode(template.content, true);
document.body.appendChild(node);

document.importNode(template.content, true):
This method help to clone the template content. 
First parameter (template.content) - template content
Second paramter (true) - It tells the browser to do deep copy of the element.

Let's check with example









Shadow DOM in web components
Understand with example:
access shadow dom using javascript
apply css to host

It is an important feature of the web components that encapsulates the
styles and structure of the component and it does not affect the rest of
the page.
It is like a secret room for a content/picture in a web and nobody will touch
it and protected from the other things in the room.
At our home, we keep some special item secrets from other and nobody touch
it without our permission. Shadow DOM is like this, It is seperated from
the main document DOM.
CSS Styles defined within the shadow DOM only apply to the custom element and
it won't affect the rest of the page. It is very easy for us to manage it.
It prevent style leakage from one component to another.

For example:
We have a custom elements that display a button and added styles on this.
If you add custom element in the page, It won't affect the other UI if
we are using shadow DOM otherwise it will affect the UI.

It is created using Javascript:
// Attach the shadow DOM to this custom element
this.attachShadow({mode: 'open'});

// Get the template and clone it
const template = document.getElementById('my-template');
const instance = template.content.cloneNode(true);

// Append the cloned template to the shadow root
this.shadowRoot.appendChild(instance);

We can interact with shadow dom with javascript. shadowRoot property is an
object that represent the shadow tree of a component. It help to access and
manipulate the element inside the shadow dom.
check image
https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM

const shadowOpen = elementRef.attachShadow({ mode: "open" });
const shadowClosed = elementRef.attachShadow({ mode: "closed" });

open - it means you can accesss the shadow dom using javascript.
const myShadowDom = myCustomElem.shadowRoot;

close - you can not access the shadowm dom using javascript.
const myShadowDom = myCustomElem.shadowRoot;
it will return null.












Slot in web components/custom elements-
What is slot in web components
Understand with example
How to apply css to the elements

A slot in web components is a placeholder that holds content inside a custom
element. It helps to add flexibility in the custom elements and add flexible
structure for the content. It is like a special box that hold things like 
toy box where we can add different types of toy. In slot we can add text, 
picture or many more what you like to add in the web.
We can define one or more slot in the custom element and user can dynamically
rearranged or reused it.

Two types of slot: default and named slot.

Default slot: <main><slot></slot></main>

Named slot: <slot name="footer"></slot>

Slooted content: Content is assigned to a specific slot by using slot attribte
on the element.
<h1 slot="header">My header</h1>
Fallback content: If custom element do not provide any content for slot then
it will show fallback content like:
<slot>This is the fallback content</slot>

Multiple slot: A custom element can have multiple slot and each slot can have
its own fallback content.


https://betterprogramming.pub/2020-008-add-flexibility-to-web-components-with-slots-c07ce2620952








Todo List example with web components









lit library to build web components:
https://lit.dev/
https://github.com/lit/lit-element-starter-ts


Resources:
https://github.com/web-padawan/awesome-web-components
https://ultimatecourses.com/blog/the-ultimate-guide-to-web-components
https://bennypowers.dev/
 */
