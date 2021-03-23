import { html, LitElement } from 'lit-element';

import { TableStyles } from './table.styles';

const Account = [
	{
		personalInfo: {
			name: "Siim Tamm",
			id: "EE752200221057734534",
		},
		balance: "3 342 000.00",
		credit: "20.00",
		reserved: "725.00",
		available: "900.56",
	},
	{
		personalInfo: {
			name: "Marju Lepik",
			id: "EE752200221057734534",
		},
		balance: "50.90",
		credit: "2 000.00",
		reserved: "",
		available: "3 000.00",
	},
	{
		personalInfo: {
			name: "Lina Roosipõld",
			id: "EE752200221057734534",
		},
		balance: "12 041.00",
		credit: "20.00",
		reserved: "",
		available: "1 300.12",
	},
];

class Table extends LitElement {
	static get styles() {
		return [TableStyles];
	}

	static get properties() {
		return {
			account: { type: Array },
			tableHead: { type: Array },
		};
	}

	constructor() {
		super();
		this.account = [...Account];
		this.tableHead = ["Account", "Balance", "Credit", "Reserved", "Available"];
	}

	render() {
		return html`
			<section class="table-block">
				<div class="table-block__wrapper">
					<div class="table-block__title-wrapper">
						<h2 class="table-block__title">Your Swedbank overview</h2>
						<ul class="table-block__download-list">
							<li class="table-block__download-link">
								<span
									class="table-block__link-icon table-block__link-icon--pdf"
								></span>
								PDF
							</li>
							<li class="table-block__download-link">
								<span
									class="table-block__link-icon table-block__link-icon--xsl"
								></span>
								XSL
							</li>
						</ul>
					</div>
					<table class="table">
						<tbody>
							<tr class="table__row table__row--1">
								${this.tableHead.map(
									(item) => html` <th class="table__head">${item}</th> `
								)}
							</tr>
							${this.account.map(
								(item, index) => html`
									<tr class="table__row table__row--2">
										<td class="table__cell table__cell--name">
											<a href="#" class="table__link"
												>${item.personalInfo.name}</a
											>
											${item.personalInfo.id}
										</td>
										<td class="table__cell">${item.balance}</td>
										<td class="table__cell">${item.credit}</td>
										<td class="table__cell">${item.reserved}</td>
										<td class="table__cell table__cell--available">
											${item.available} EUR
										</td>
									</tr>
								`
							)}
							<tr class="table__row table__row--total">
								<td class="table__cell table__cell--name">Total:</td>
								<td class="table__cell">5456.56</td>
								<td class="table__cell">456.56</td>
								<td class="table__cell"></td>
								<td
									class="table__cell table__cell--total-available table__cell--available"
								>
									456.56 EUR
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		`;
	}
}

customElements.define("app-table", Table);
