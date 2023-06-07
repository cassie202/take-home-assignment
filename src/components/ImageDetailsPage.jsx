import './ImageDetailsPage.css';

export function ImageDetailsPage({ image }) {
	return (
		<div className="container">
			<img
				alt={image.title}
				src={`https://www.artic.edu/iiif/2/${image}/full/843,/0/default.jpg`}
			/>
		</div>
	);
}
