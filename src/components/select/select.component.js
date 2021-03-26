import { html, LitElement } from "lit-element";

import { SelectStyles } from "./select.styles";

class Select extends LitElement {
	static get styles() {
		return [SelectStyles];
	}
	static get properties() {
		return {
			isMobile: { type: Boolean },
			options: { type: Array },
			name: { type: String },
		};
	}
	constructor() {
		super();
		this.isMobile = window.innerWidth > 767 ? false : true;
		this.options = [];
		this.name = "";
	}
	render() {
		return html`
			<select name="${this.name}" class="select">
				${this.options.map(
					(item, index) =>
						html`
							<option
								class="payment-form__option"
								value="${item}"
								?selected=${index[0]}
							>
								<span class="payment-form__option-content">${item}</span>
							</option>
						`
				)}
			</select>
		`;
	}
}

customElements.define("app-select", Select);
