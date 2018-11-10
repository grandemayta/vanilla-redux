import { html, render } from 'lit-html';
import { requestUser } from '../../actions';
import './home.scss';

class Home {
  constructor(selector, store) {
    this.homeEl = document.querySelector(selector);
    this.store = store;
    this.title = 'Home';
  }

  profileTpl(user) {
    return html`
      <img src=${user.avatar_url}>
      <h1>${user.name}</h1>
      <h2>${user.company}</h2>
    `;
  }

  template() {
    const { dispatch, getState } = this.store;
    const user = getState().user && getState().user.data;

    return html`
      <div>
        <button @click=${() => dispatch(requestUser('grandemayta'))}>Show Profile</button>
        ${user && this.profileTpl(user)}
      </div>
    `;
  }

  load() {
    render(this.template(), this.homeEl);
  }
}

export default Home;
