import { html, render } from 'lit-html';
import { Button } from '../../components';
import './contacts.scss';

export default class Contact {
  constructor(selector, store) {
    this.contactsEl = document.querySelector(selector);
    this.store = store;
    this.headerTitle = 'Contacts';
    this.buttonText = 'Home';
    this.href = '/';
  }

  template() {
    return html`
      <div>
        <app-button id="button1" data-href=${this.href}>
          ${this.buttonText}
        </app-button>
      </div>
    `;
  }

  load() {
    render(this.template(), this.contactsEl);
    new Button('#button1').load();
  }
}
