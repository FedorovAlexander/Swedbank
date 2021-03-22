import { css, html, LitElement } from 'lit-element';

class Banking extends LitElement {
	static get styles() {
		return [css``];
	}

	render() {
		return html` <div>
			<h1>This is Banking Page</h1>
		</div>`;
	}

	static get properties() {
		return {
			eg: {
				type: String,
			},
		};
	}
	constructor() {
		super();
	}
}

customElements.define("banking-page", Banking);
