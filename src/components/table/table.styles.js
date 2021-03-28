import { css } from "lit-element";

export const TableStyles = css`
	:host {
		display: flex;
		width: 100%;
	}
	.table-block {
		display: block;
		width: 100%;
		max-width: 1536px;
		margin: 0 auto;
		padding: 0 0.625rem;
		border-radius: 3px;
		background-color: #fff;
	}

	.table-block__wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-bottom: 2rem;
	}

	.table-block__title {
		width: 100%;
		margin-top: 1rem;
		padding-left: 0.75rem;
		font-size: 0.8125rem;
		font-family: "Swedbank Headline";
		text-align: left;
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
		font-size: 0.75rem;
		font-family: var(--font-main);
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
		width: 1.25rem;
		height: 1.25rem;
		margin-right: 0.25rem;
		border-radius: 50%;
		background-color: #32a3ae;
		background-image: url("/assets/img/pdf.svg");
	}

	.table {
		width: 100%;
		border-collapse: collapse;
		font-family: var(--font-main);
	}

	.table tbody {
		width: 100%;
	}

	.table__row {
		width: 100%;
	}

	.table__row--total .table__cell {
		padding-top: 1.25rem;
		padding-bottom: 0.75rem;
		border-bottom: none;
		font-weight: 700;
		vertical-align: baseline;
	}

	.table__cell {
		padding: 0.75rem;
		border-bottom: 1px solid #f1eeeb;
		font-size: 0.825rem;
	}

	.table__row--total .table__cell--total-available {
		font-weight: 400;
		font-size: 1.25rem;
		font-family: var(--font-titles);
	}

	.table__cell:not(:first-child),
	.table__cell:not(:last-child) {
		text-align: center;
	}

	.table__cell:first-child {
		padding-left: 0.5rem;
		text-align: left;
	}

	.table__cell:last-child {
		padding-right: 0.5rem;
		text-align: right;
	}

	.table__head {
		padding: 0.625rem;
		font-weight: 400;
		font-size: 0.825rem;
		background-color: #e9f7fb;
	}

	.table__head:first-child {
		padding-left: 0.5rem;
		text-align: left;
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
			white-space: nowrap;
			word-break: keep-all;
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
