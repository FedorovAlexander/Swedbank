import { css } from "lit-element";

export const ReadMoreLinkStyles = css`
	.read-more-link {
		display: inline-block;
		position: relative;
		margin-top: 0.5rem;
		padding-left: 0.5rem;
		color: var(--link-color);
		font-size: 0.75rem;
		font-family: var(--font-main);
		text-decoration: none;
		cursor: pointer;
	}

	.read-more-link:hover {
		text-decoration: underline;
	}

	.read-more-link:before {
		position: absolute;
		top: 2px;
		left: 0;
		width: 0;
		height: 0;
		border-top: 5px solid transparent;
		border-bottom: 5px solid transparent;
		border-left: 5px solid #257886;
		content: "";
	}
`;
