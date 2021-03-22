import './components/header/header.component';
import './components/navigation/nav-link.component';
import './pages/banking/banking.page';
import './pages/home/home.page';
import './router-outlet';

import { html, LitElement } from 'lit-element';
import { router } from 'lit-element-router';

import { AppStyles } from './App.styles';

class App extends router(LitElement) {
	static get styles() {
		return [AppStyles];
	}
	static get properties() {
		return {
			route: { type: String },
			params: { type: Object },
			query: { type: Object },
			data: { type: String },
		};
	}

	static get routes() {
		return [
			{
				name: "home",
				pattern: "",
				data: { title: "Home" },
			},
			{
				name: "banking",
				pattern: "banking",
				data: { title: "Igapäevapangandus" },
			},
			{
				name: "not-found",
				pattern: "*",
			},
		];
	}

	constructor() {
		super();
		this.route = "";
		this.params = {};
		this.query = {};
	}

	router(route, params, query, data) {
		this.route = route;
		this.params = params;
		this.query = query;
		this.data = data;
		console.log(route, params, query, data);
	}

	render() {
		return html`
			<app-header></app-header>
			<h1>${this.data.title}</h1>
			<router-outlet active-route=${this.route}>
				<home-page route="home"></home-page>
				<banking-page route="banking"></banking-page>
				<h1 route="not-found">Not Found</h1>
			</router-outlet>
		`;
	}
}

customElements.define("app-container", App);
