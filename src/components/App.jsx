import { useState } from 'react';
import { searchArtworks } from '../api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import './App.css';
import { ImageDetailsPage } from './ImageDetailsPage';

export function App() {
	const [data, setData] = useState([]);
	const [selectTitle, setSelectTitle] = useState(null);
	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/api.js

		searchArtworks(query).then((json) => {
			setData(json?.data);
			setSelectTitle(null);
		});
	}
	function handleClick(title) {
		setSelectTitle(title);
	}

	if (selectTitle) {
		return (
			<div>
				<h2>{selectTitle.title}</h2>
				<p>By {selectTitle.artist_title}</p>
				<ImageDetailsPage image={selectTitle.image_id} />
				<button onClick={() => setSelectTitle(null)}>Go Back</button>
				<Footer />
			</div>
		);
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />

			<ul>
				{data.map((val) => (
					<li key={val.id}>
						<a
							href="#"
							style={{ cursor: 'pointer' }}
							onClick={() => handleClick(val)}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									handleClick(val);
								}
							}}
						>
							{`${val.title} ${val.date_display} by ${val.artist_title}`}
						</a>
					</li>
				))}
			</ul>
			<Footer />
		</div>
	);
}
