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
		margin: 0 auto 2rem;
		padding: 0 0.625rem;
		border-radius: 3px;
		background-color: #ebf8f2;
	}

	.greeting__wrapper {
		display: flex;
		position: relative;
		flex-direction: row;
		justify-content: center;
		padding: 1rem 0.625rem;
	}

	.greeting__content {
		margin-right: 0.625rem;
		margin-left: 0.625rem;
	}

	.greeting__title {
		margin: 0;
		margin-top: 2rem;
		font-weight: 700;
		font-family: var(--font-main);
	}

	.greeting__description {
		margin-bottom: 1.25rem;
		font-size: 0.75rem;
		line-height: 1.4;
		font-family: var(--font-main);
	}

	.greeting__links {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.greeting__image {
		display: flex;
		justify-content: center;
		margin-right: 0.625rem;
		margin-left: 0.625rem;
	}

	.greeting__figure {
		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 9.375rem;
		height: 9.375rem;
		border-radius: 50%;
		color: #fff;
		font-weight: 700;
		font-family: var(--font-main);
		background-color: #fdc129;
	}

	.greeting__figure:after {
		position: absolute;
		bottom: -1rem;
		left: calc(50% - 1.25rem);
		width: 0;
		height: 0;
		border-top: 1.25rem solid #fdc129;
		border-right: 1.25rem solid transparent;
		border-left: 1.25rem solid transparent;
		content: "";
	}

	@media screen and (max-width: 767px) {
		.greeting__wrapper {
			flex-direction: column;
		}
	}

	@media screen and (max-width: 560px) {
		.greeting__wrapper {
			padding-right: 0;
			padding-left: 0;
		}

		.greeting__content {
			margin-right: 0;
			margin-left: 0;
		}

		.greeting__image {
			margin-right: 0;
			margin-left: 0;
		}

		.greeting__description {
			margin-bottom: 0rem;
			margin-bottom: 0.125rem;
		}

		.greeting__links {
			flex-direction: column;
			width: 100%;
		}

		.greeting__links app-read-more-link {
			width: 100%;
			margin-bottom: 0.5rem;
		}
	}
`;
