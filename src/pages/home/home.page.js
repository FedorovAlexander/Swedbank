import '../../components/table/table.component';

import { html, LitElement } from 'lit-element';

import { HomePageStyles } from './home.styles';

class Home extends LitElement {
	static get styles() {
		return [HomePageStyles];
	}

	static get properties() {
		return {
			data: {
				type: String,
			},
		};
	}
	constructor() {
		super();
	}

	render() {
		return html`
			<section class="home-page">
				<div class="home-page__wrapper">
					<app-table></app-table>
				</div>
			</section>
		`;
	}
}

customElements.define("home-page", Home);
