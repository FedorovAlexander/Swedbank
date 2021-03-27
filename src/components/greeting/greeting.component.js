import "../../components/button/button.component";
import "../../components/read-more-link/read-more-link.component";

import { html, LitElement } from "lit-element";

import { GreetingStyles } from "./greeting.styles";

class Greeting extends LitElement {
	static get styles() {
		return [GreetingStyles];
	}
	static get properties() {
		return {
			isMobile: { type: Boolean },
		};
	}
	constructor() {
		super();
		this.isMobile = window.innerWidth > 767 ? false : true;
	}
	render() {
		return html`
			<section class="greeting">
				<div class="greeting__wrapper">
					<div class="greeting__image">
						<div class="greeting__figure">
							<span class="greeting__text">Hello World!</span>
						</div>
					</div>
					<div class="greeting__content">
						<div class="greeting__text">
							<h3 class="greeting__title">Welcome to Swedbank!</h3>
							<p class="greeting__description">
								With 7.2 million privat customers and more than 574 000
								corporate and organizational customers. This makes us Sweden's
								largest bank i terms of number of customers and gives us a
								leading position in our other home markets of Estonia, Latvia
								and Lithuania. As a major bank, we are a significant part of the
								financial system and play an important role in the local
								cummunities we serve. We are dedicated to helping our customers,
								our shareholders and society as a whole stay financially sound
								and sustainable.
							</p>
						</div>
						<div class="greeting__links">
							<app-read-more-link href="#"></app-read-more-link>
							<app-button
								buttonText="Go"
								backgroundColor="#EE7023"
							></app-button>
						</div>
					</div>
				</div>
			</section>
		`;
	}

	_toggleTabs(e) {}
}

customElements.define("app-greeting", Greeting);
