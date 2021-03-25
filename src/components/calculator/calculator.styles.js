import { css } from 'lit-element';

export const CalculatorStyles = css`
	:host {
		display: flex;
		width: 100%;
	}

	.calculator {
		display: block;
		width: 100%;
		max-width: 1536px;
		padding: 0 0.625rem;
		background-color: #fff;
		border-radius: 3px;
		margin: 3.5rem auto 1rem;
	}

	.calculator__wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		padding-bottom: 2rem;
	}
`;
