import { css } from 'lit-element';

export const AdvantageStyles = css`
	:host {
		flex: 1;
		margin-right: 0.625rem;
		margin-left: 0.625rem;
	}

	.advantage {
		display: flex;
		flex-direction: column;
		flex: 1;
		font-family: var(--font-main);
		height: 100%;
	}

	.advantage__header {
		position: relative;
		color: #fff;
		font-weight: bold;
		padding: 0.75rem 0.625rem;
		flex: 1;
		flex-grow: 0;
	}

	.advantage__header-decorator {
		display: block;
		position: absolute;
		bottom: -15px;
		left: 20px;
		width: 0;
		height: 0;
		border-left: 13px solid transparent;
		border-right: 13px solid transparent;
	}

	.advantage__content {
		padding: 1.5rem 0.625rem 0.75rem;
		background-color: #fbf2ea;
		min-height: 70px;
		flex: 1;
	}

	@media screen and (max-width: 767px) {
		:host {
			margin-bottom: 0.625rem;
		}
	}
`;
