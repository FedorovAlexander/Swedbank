import { css } from "lit-element";

export const PaymentFormStyles = css`
	:host {
		display: flex;
		width: 100%;
	}

	.payment-form {
		display: block;
		box-sizing: border-box;
		width: 100%;
		max-width: 1536px;
		margin: 0 auto;
		border-radius: 3px;
		background-color: #fff;
	}

	.payment-form__wrapper {
		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 1.25rem;
	}

	.payment-form__form {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		max-width: 25rem;
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
		width: calc(100% - 90px);
		margin-bottom: 0;
	}

	.payment-form__select {
		flex: 1;
		max-width: 18.75rem;
		height: 2rem;
		padding-left: 0.625rem;
		border: 1px solid #bcd8db;
		border-radius: 3px;
		font-size: 0.75rem;
		background-color: #ebf8f2;
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
		margin: 0;
		margin-bottom: 0.625rem;
		padding: 0;
		border: none;
	}

	.payment-form__option-content {
		height: 2rem;
		padding-left: 0.625rem;
		border: none;
	}

	.payment-form__input {
		flex: 1;
		box-sizing: border-box;
		padding-top: 0.5rem;
		padding-bottom: 0.4375rem;
		padding-left: 0.625rem;
		border: 1px solid #bcd8db;
		border-radius: 3px;
		font-size: 0.75rem;
	}

	.payment-form__input--amount {
		max-width: 12.5rem;
		margin-right: 0.625rem;
	}

	.payment-form__input--description {
		flex: 1;
		box-sizing: border-box;
		max-width: 18.75rem;
	}

	.payment-form__error-message {
		position: relative;
		top: -0.625rem;
		left: 0.625rem;
		align-self: flex-end;
		width: 100%;
		max-width: 18.75rem;
		margin-bottom: 0.625rem;
		color: #d1434a;
		font-size: 0.75rem;
		text-align: left;
	}

	.payment-form__buttons {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		box-sizing: border-box;
		width: 100%;
		margin-top: 0.625rem;
	}

	@media screen and (max-width: 560px) {
		.payment-form__form {
			max-width: 100%;
		}

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
			max-width: 100%;
			margin-right: 0;
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
