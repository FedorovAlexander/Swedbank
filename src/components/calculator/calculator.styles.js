import { css } from "lit-element";

export const CalculatorStyles = css`
	:host {
		display: flex;
		width: 100%;
	}

	.calculator {
		display: block;
		width: 100%;
		padding: 0 0.625rem;
		background-color: #fff;
		font-family: var(--font-main);
	}

	.calculator__wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		position: relative;
		padding-bottom: 2rem;
	}

	.calculator__form {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.calculator__label {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		margin-bottom: 0.625rem;
		font-size: 0.75rem;
	}

	.calculator__inputs {
		flex: 2;
	}

	.calculator__result {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		flex: 1;
	}

	.calculator__monthly {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.calculator__button-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}
`;
