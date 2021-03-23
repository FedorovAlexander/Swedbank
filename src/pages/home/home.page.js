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
		};
	}
	constructor() {
		super();
	}

	render() {
		return html`
			<div class="home-page">
				<div class="home-page__wrapper">
					<app-table></app-table>
					<section class="home-page__advantages-list">
						<app-advantage headerBackgroundColor="#5B8AD6" headerTitle="Open">
							<h3 class="home-page__advantage-title">
								One of the core values of Swedbank
							</h3>
							<p class="home-page__advantage-text">
								Lorem ipsum dolor sit amet, consectetur adip
							</p>
						</app-advantage>

						<app-advantage headerBackgroundColor="#F4BA44" headerTitle="Caring">
							<p class="home-page__advantage-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore
							</p>
							<a href="#" class="home-page__advantage-link">Read more</a>
						</app-advantage>

						<app-advantage headerBackgroundColor="#C5569A" headerTitle="Simple">
							<ul class="home-page__advantage-list">
								<li class="home-page__advantage-list-item">
									Lorem ipsum dolor sit amet
								</li>
								<li class="home-page__advantage-list-item">
									Lorem ipsum dolor sit amet
								</li>
							</ul>
						</app-advantage>
					</section>
				</div>
			</div>
		`;
	}
}

customElements.define("home-page", Home);
