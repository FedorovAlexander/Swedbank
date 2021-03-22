import { css } from 'lit-element';

export const TableStyles = css`
	:host {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.table-block {
		display: block;
		width: 100%;
		padding: 0 1rem;
	}

	.table-block__wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.table {
		width: 100%;
	}

	.table tbody {
		width: 100%;
	}

	.table__row {
		width: 100%;
	}

	.table__cell:not(:first-child),
	.table__cell:not(:last-child) {
		text-align: center;
	}

	.table__cell:first-child {
		text-align: left;
	}

	.table__head:first-child {
		text-align: left;
	}
`;
