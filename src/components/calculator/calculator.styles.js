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
		justify-content: flex-end;
		align-items: flex-start;
		position: relative;
		padding-bottom: 2rem;
	}

	.calculator__form {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		max-width: 1230px;
	}

	.calculator__label {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		margin-bottom: 0.625rem;
		font-size: 0.75rem;
		color: #808080;
	}

	.calculator__label--loan-size {
		flex-wrap: wrap;
	}

	.calculator__label app-select {
		margin-left: 0.625rem;
	}

	.calculator__inputs {
		flex: 2;
		border-right: 1px solid #f1eeeb;
		padding-top: 1.125rem;
	}

	.calculator__inputs-wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		max-width: 26.25rem;
	}

	.calculator__loan-value {
		margin-left: 6.5625rem;
		font-family: var(--font-titles);
		color: var(--brand-orange);
		font-weight: 500;
		font-size: 0.875rem;
		margin-bottom: 0.625rem;
		display: inline-block;
	}

	.calculator__range {
		max-width: 18.75rem;
		width: 100%;
		margin: 0;
		margin-left: 0.625rem;
	}

	input[type="range"] {
		-webkit-appearance: none;
		width: 100%;
	}

	input[type="range"]::-webkit-slider-thumb {
		-webkit-appearance: none;
	}

	input[type="range"]:focus {
		outline: none;
	}

	input[type="range"]::-webkit-slider-thumb {
		-webkit-appearance: none;
		background: var(--brand-orange);
		cursor: pointer;
		height: 20px;
		width: 20px;
		border-radius: 50%;
		top: -6px;
		position: relative;
	}

	input[type="range"]::-moz-range-thumb {
		background: var(--brand-orange);
		cursor: pointer;
		height: 20px;
		width: 20px;
		border-radius: 50%;
		top: -6px;
		position: relative;
	}

	input[type="range"]::-webkit-slider-runnable-track {
		width: 100%;
		height: 9px;
		cursor: pointer;
		background: #eaded7;
		border-radius: 5px;
		border: 0.2px solid #eaded7;
	}

	input[type="range"]:focus::-webkit-slider-runnable-track {
		background: #eaded7;
	}

	input[type="range"]::-moz-range-track {
		width: 100%;
		height: 9px;
		cursor: pointer;
		background: #eaded7;
		border-radius: 5px;
		border: 0.2px solid #eaded7;
	}

	.calculator__loan-size {
		width: 100%;
	}

	.calculator__range-values {
		width: 100%;
		max-width: 18.75rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 0.5rem;
	}

	.calculator__period {
		width: 100%;
	}

	.calculator__interest {
		width: 100%;
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

	.calculator__result {
		padding-top: 1.5rem;
		padding-left: 0.625rem;
	}

	.calculator__monthly {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-size: 0.875rem;
		color: #808080;
		border-bottom: 1px solid #f1eeeb;
		padding-bottom: 0.625rem;
		margin-bottom: 1.25rem;
	}

	.calculator__monthly-label {
		font-size: 0.875rem;
		color: #808080;
	}

	.calculator__monthly-result {
		font-size: 1.25rem;
		font-family: var(--font-titles);
		color: var(--brand-orange);
	}

	.calculator__payment-units {
		font-size: 0.75rem;
		color: #808080;
	}

	@media screen and (max-width: 767px) {
		.calculator__form {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
		}

		.calculator__inputs {
			border-right: none;
		}
	}

	@media screen and (max-width: 560px) {
		.calculator {
			padding-left: 0;
			padding-right: 0;
		}

		.calculator__wrapper {
			padding-bottom: 1rem;
		}

		.calculator__inputs-wrapper {
			margin-right: 0;
		}

		.calculator__label {
			flex-direction: column;
			align-items: flex-start;
			width: 100%;
		}

		.calculator__inputs {
			border-right: none;
		}

		.calculator__result {
			padding-left: 0;
		}

		.calculator__label app-select {
			margin-left: 0;
		}

		.calculator__range {
			margin-left: 0;
			margin-top: 0.5rem;
			max-width: 100%;
		}

		.calculator__range-values {
			max-width: 100%;
		}

		.calculator__loan-value {
			margin-left: 0;
			max-width: 100%;
			width: 100%;
			text-align: right;
		}
	}
`;
