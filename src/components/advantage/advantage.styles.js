import { css } from 'lit-element';

export const AdvantageStyles = css`
	:host {
		flex: 1;
		margin-right: 0.625rem;
		margin-left: 0.625rem;
	}

	.advantage {
		flex: 1;
		font-family: var(--font-main);
	}

	.advantage__header {
		position: relative;
		color: #fff;
		font-weight: bold;
		padding: 0.75rem 0.625rem;
	}

	.advantage__header:after {
		content: "";
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
		padding: 1.75rem 0.625rem 0.75rem;
		background-color: #fbf2ea;
		min-height: 70px;
	}
`;
