import { css } from "lit-element";

export const GreetingStyles = css`
	:host {
		display: flex;
		width: 100%;
	}

	.greeting {
		display: block;
		width: 100%;
		max-width: 1536px;
		padding: 0 0.625rem;
		background-color: #ebf8f2;
		border-radius: 3px;
		margin: 0 auto 2rem;
	}

	.greeting__wrapper {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		position: relative;
		padding: 1rem 0.625rem;
	}

	.greeting__content {
		margin-right: 0.625rem;
		margin-left: 0.625rem;
	}

	.greeting__title {
		font-family: var(--font-headline);
		font-weight: 700;
		margin: 0;
	}

	.greeting__description {
		font-size: 0.75rem;
		font-family: var(--font-main);
		line-height: 1.4;
	}

	.greeting__links {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.greeting__image {
		margin-left: 0.625rem;
		margin-right: 0.625rem;
	}

	.greeting__figure {
		width: 9.375rem;
		height: 9.375rem;
		border-radius: 50%;
		background-color: #fdc129;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-family: var(--font-main);
		font-weight: 700;
		color: #fff;
	}

	.greeting__figure:after {
		content: "";
		position: absolute;
		bottom: -1rem;
		left: calc(50% - 1.25rem);
		width: 0;
		height: 0;
		border-left: 1.25rem solid transparent;
		border-right: 1.25rem solid transparent;

		border-top: 1.25rem solid #fdc129;
	}
`;
