import '../../components/advantage/advantage.component';
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
			advantagesProperties: { type: Array },
		};
	}
	constructor() {
		super();
		this.advantagesProperties = [
			{ title: "Open", backgroundColor: "#5B8AD6" },
			{ title: "Caring", backgroundColor: "#F4BA44" },
			{ title: "Simple", backgroundColor: "#C5569A" },
		];
	}

	render() {
		return html`
			<section class="home-page">
				<div class="home-page__wrapper">
					<app-table></app-table>
					<section class="home-page__advantages-list">
						<app-advantage
							.headerBackgroundColor="${this.advantagesProperties[0]
								.backgroundColor}"
							.headerTitle="${this.advantagesProperties[0].title}"
						></app-advantage>
						<app-advantage
							.headerBackgroundColor="${this.advantagesProperties[1]
								.backgroundColor}"
							.headerTitle="${this.advantagesProperties[1].title}"
						></app-advantage>
						<app-advantage
							.headerBackgroundColor="${this.advantagesProperties[2]
								.backgroundColor}"
							.headerTitle="${this.advantagesProperties[2].title}"
						></app-advantage>
					</section>
				</div>
			</section>
		`;
	}
}

customElements.define("home-page", Home);
