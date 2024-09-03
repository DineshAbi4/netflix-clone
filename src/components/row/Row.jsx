import { useEffect, useState } from "react";
import { getWishlist } from "../../api/movies";
import Carousel from "../carousel/Carousel";
import Cards from "../cards/Cards";
// import List from "./List";

const Row = ({ title, data }) => {
	const [movies, setMovies] = useState([]); // getting favourite movies and sending as prop to card
	useEffect(() => {
		getWishlist().then((data) => setMovies(data.results));
	}, []);
	const movieId = movies?.map((item) => item.id);

	return (
		<section>
			{title && <h2 className="section-title">{title}</h2>}
			<Carousel // sending the movie datas to
				data={data}
				render={(item) => <Cards movie={item} favMovies={movieId} />}
			/>
		</section>
	);
};

export default Row;