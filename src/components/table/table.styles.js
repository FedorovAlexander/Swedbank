import { css } from 'lit-element';

export const TableStyles = css`
	:host {
		display: flex;
		width: 100%;
	}
	.table-block {
		display: block;
		width: 100%;
		max-width: 1536px;
		padding: 0 0.625rem;
		background-color: #fff;
		border-radius: 3px;
		margin: 0 auto;
	}

	.table-block__wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-bottom: 2rem;
	}

	.table-block__title {
		font-family: "Swedbank Headline";
		font-size: 0.8125rem;
		margin-top: 1rem;
		padding-left: 0.75rem;
		text-align: left;
		width: 100%;
	}

	.table-block__title-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: spabce-between;
		align-items: center;
		width: 100%;
		padding-right: 0.625rem;
	}

	.table-block__download-list {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-left: 0;
		list-style: none;
		font-family: Arial;
		font-size: 0.75rem;
	}

	.table-block__download-link {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-left: 0.75rem;
		cursor: pointer;
	}

	.table-block__link-icon {
		display: block;
		height: 1.25rem;
		width: 1.25rem;
		border-radius: 50%;
		margin-right: 0.25rem;
		background-color: #32a3ae;
		background-image: url("/assets/img/pdf.svg");
	}

	.table {
		width: 100%;
		font-family: Arial;
		border-collapse: collapse;
	}

	.table tbody {
		width: 100%;
	}

	.table__row {
		width: 100%;
	}

	.table__row--total .table__cell {
		border-bottom: none;
		font-weight: 700;
		padding-bottom: 0.75rem;
		padding-top: 1.25rem;
		vertical-align: baseline;
	}

	.table__cell {
		padding: 0.75rem;
		border-bottom: 1px solid #f1eeeb;
		font-size: 0.825rem;
	}

	.table__row--total .table__cell--total-available {
		font-family: "Swedbank Sans";
		font-size: 1.25rem;
		font-weight: 400;
	}

	.table__cell:not(:first-child),
	.table__cell:not(:last-child) {
		text-align: center;
	}

	.table__cell:first-child {
		text-align: left;
		padding-left: 0.5rem;
	}

	.table__cell:last-child {
		text-align: right;
		padding-right: 0.5rem;
	}

	.table__head {
		background-color: #e9f7fb;
		font-size: 0.825rem;
		font-weight: 400;
		padding: 0.625rem;
	}

	.table__head:first-child {
		text-align: left;
		padding-left: 0.5rem;
	}

	.table__head:last-child {
		text-align: right;
	}

	.table__link {
		color: #257886;
	}

	@media screen and (max-width: 767px) {
		.table-block__wrapper {
			padding-bottom: 0.5rem;
		}

		.table__row {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}

		.table__head,
		.table__cell {
			display: none;
		}

		.table__head:first-child,
		.table__head:last-child,
		.table__cell--name,
		.table__cell--available {
			display: block;
			flex: 1;
			word-break: keep-all;
			white-space: nowrap;
		}

		.table__cell--name {
			flex: 3;
		}
	}

	@media screen and (max-width: 420px) {
		.table__head {
			font-size: 0.75rem;
		}

		.table__cell {
			font-size: 0.75rem;
		}
	}
`;
