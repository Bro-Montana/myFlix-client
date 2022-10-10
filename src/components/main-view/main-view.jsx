import React from "react";

import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [
        { _id: 1, Title: 'Inception', Description: 'Inception is a 2010 science fiction action film[4][5][6] written and directed by Christopher Nolan, who also produced the film with Emma Thomas, his wife.', ImagePath: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg' },
        { _id: 2, Title: 'Crooklyn', Description: 'Crooklyn is a 1994 American semi-autobiographical film produced and directed by Spike Lee and co-written with his sister Joie and brother Cinqué.', ImagePath: 'https://en.wikipedia.org/wiki/Crooklyn#/media/File:Crooklyn_poster.jpg' },
        { _id: 3, Title: 'Gladiator', Description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.', ImagePath: 'https://www.themoviedb.org/t/p/original/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg' }
      ],
      selectedMovie: null
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;

    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />
          ))
        }
      </div>
    );
  }


}