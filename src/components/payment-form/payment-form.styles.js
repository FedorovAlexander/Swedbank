import { css } from "lit-element";

export const PaymentFormStyles = css`
	:host {
		display: flex;
		width: 100%;
	}

	.payment-form {
		display: block;
		width: 100%;
		max-width: 1536px;
		background-color: #fff;
		border-radius: 3px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.payment-form__wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.payment-form__form {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		max-width: 25rem;
		width: 100%;
		font-family: var(--font-main);
	}

	.payment-form__label {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin-bottom: 0.625rem;
		font-size: 0.75rem;
	}

	.payment-form__label--amount {
		margin-bottom: 0;
		width: calc(100% - 90px);
	}

	.payment-form__select {
		flex: 1;
		height: 2rem;
		max-width: 18.75rem;
		background-color: #ebf8f2;
		border: 1px solid #bcd8db;
		border-radius: 3px;
		font-size: 0.75rem;
		padding-left: 0.625rem;
	}

	.payment-form__select--currency {
		width: 5.625rem;
	}

	.payment-form__fieldset {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		border: none;
		margin: 0;
		padding: 0;
		margin-bottom: 0.625rem;
	}

	.payment-form__option-content {
		border: none;
		padding-left: 0.625rem;
		height: 2rem;
	}

	.payment-form__input {
		box-sizing: border-box;
		padding-top: 0.5rem;
		padding-bottom: 0.4375rem;
		border: 1px solid #bcd8db;
		border-radius: 3px;
		font-size: 0.75rem;
		flex: 1;
		padding-left: 0.625rem;
	}

	.payment-form__input--amount {
		max-width: 12.5rem;
		margin-right: 0.625rem;
	}

	.payment-form__input--description {
		flex: 1;
		max-width: 18.75rem;
		box-sizing: border-box;
	}

	.payment-form__error-message {
		color: #d1434a;
		margin-bottom: 0.625rem;
		font-size: 0.75rem;
		position: relative;
		top: -0.625rem;
		left: 0.625rem;
		width: 100%;
		text-align: left;
		max-width: 18.75rem;
		align-self: flex-end;
	}

	.payment-form__buttons {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		width: 100%;
		margin-top: 0.625rem;
		box-sizing: border-box;
	}

	@media screen and (max-width: 560px) {
		.payment-form__label {
			flex-direction: column;
			align-items: flex-start;
			width: 100%;
		}

		.payment-form__label--amount {
			margin-bottom: 0.625rem;
		}

		.payment-form__fieldset {
			flex-direction: column;
			align-items: flex-start;
		}

		.payment-form__input {
			width: 100%;
			margin-right: 0;
			max-width: 100%;
		}

		.payment-form__label--description {
			margin-top: 0.5rem;
		}

		.payment-form__buttons {
			flex-direction: column;
			margin-top: 1.25rem;
		}
	}
`;
