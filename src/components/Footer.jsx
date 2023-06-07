import './Footer.css';

export const Footer = () => (
	<footer className="Footer">
		<p className="footer-text">
			Artwork and all related information provided by{' '}
			<a classname="footer-links" href="https://www.artic.edu/">
				Art Institute of Chicago
			</a>{' '}
			according to its{' '}
			<a classname="footer-links" href="https://www.artic.edu/terms">
				terms and conditions
			</a>{' '}
			and under a{' '}
			<a
				classname="footer-links"
				href="https://creativecommons.org/publicdomain/zero/1.0"
			>
				Creative Commons Zero (CC0) 1.0 designation
			</a>
			.
		</p>
	</footer>
);
