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
			value: { type: String },
			placeholder: { type: String },
			error: { type: Boolean },
			firstOptionSelected: { type: Boolean },
		};
	}
	constructor() {
		super();
		this.isMobile = window.innerWidth > 767 ? false : true;
		this.options = [];
		this.name = "";
		this.value = this.options.length ? this.options[0] : "";
		this.placeholder = "";
		this.error = false;
		this.firstOptionSelected = false;
	}
	render() {
		return html`
			<select
				name="${this.name}"
				class="select"
				value="${this.value}"
				@change=${this._selectChange}
				style=${this.error ? "border-color: #d1434a" : ""}
			>
				<option selected disabled ?hidden=${this.firstOptionSelected}>
					${this.placeholder}
				</option>
				${this.options.map(
					(item) =>
						html`
							<option
								class="payment-form__option"
								value="${item}"
								?selected=${this.firstOptionSelected}
							>
								<span class="payment-form__option-content">${item}</span>
							</option>
						`
				)}
			</select>
		`;
	}

	_selectChange() {
		let select = this.shadowRoot.querySelector("select");
		this.value = select.value;
	}
}

customElements.define("app-select", Select);
