import { html, LitElement } from 'lit-element';

import { TableStyles } from './table.styles';

const Account = [
	{
		name: "Siim Tamm",
		id: "EE752200221057734534",
		balance: "3 342 000.00",
		credit: "20.00",
		reserved: "725.00",
		available: "900.56",
	},
	{
		name: "Marju Lepik",
		id: "EE752200221057734534",
		balance: "50.90",
		credit: "2 000.00",
		reserved: "",
		available: "3 000.00",
	},
	{
		name: "Lina Roosipõld",
		id: "EE752200221057734534",
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
		this.tableHead = [
			"Account",
			" ",
			"Balance",
			"Credit",
			"Reserved",
			"Available",
		];
	}

	render() {
		return html`
			<section class="table-block">
				<div class="table-block__wrapper">
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
										<td class="table__cell">${item.name}</td>
										<td class="table__cell">${item.id}</td>
										<td class="table__cell">${item.balance}</td>
										<td class="table__cell">${item.credit}</td>
										<td class="table__cell">${item.reserved}</td>
										<td class="table__cell">${item.available}</td>
									</tr>
								`
							)}
							<tr class="table__row table__row--5">
								<td class="table-cell"></td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		`;
	}
}

customElements.define("app-table", Table);
