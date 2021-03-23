import { css } from 'lit-element';

export const FooterStyles = css`
	:host {
		margin-top: auto;
	}

	.footer__links-block {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.footer__link nav-link a {
		text-align: left;
	}
`;
