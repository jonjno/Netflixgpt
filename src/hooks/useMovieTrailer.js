import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  // const [trailerid, settrailerid] = useState(null);

  const trailervideo = useSelector((store) => store.movies.trailervideo);

  const getMoviesvideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?",
      options
    );
    const json = await data.json();

    const filtertrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filtertrailer.length ? filtertrailer[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
    // settrailerid(trailer.key);
  };

  useEffect(() => {
    !trailervideo && getMoviesvideos();
  });
};

export default useMovieTrailer;
