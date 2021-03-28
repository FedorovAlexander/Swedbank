import { css } from "lit-element";

export const AdvantageStyles = css`
	:host {
		flex: 1;
		margin-right: 0.625rem;
		margin-left: 0.625rem;
	}

	.advantage {
		display: flex;
		flex: 1;
		flex-direction: column;
		height: 100%;
		font-family: var(--font-main);
	}

	.advantage__header {
		position: relative;
		flex: 1;
		flex-grow: 0;
		padding: 0.75rem 0.625rem;
		color: #fff;
		font-weight: bold;
	}

	.advantage__header-decorator {
		display: block;
		position: absolute;
		bottom: -15px;
		left: 20px;
		width: 0;
		height: 0;
		border-right: 13px solid transparent;
		border-left: 13px solid transparent;
	}

	.advantage__content {
		flex: 1;
		min-height: 70px;
		padding: 1.5rem 0.625rem 0.75rem;
		background-color: #fbf2ea;
	}

	@media screen and (max-width: 767px) {
		:host {
			margin-bottom: 0.625rem;
		}
	}
`;
