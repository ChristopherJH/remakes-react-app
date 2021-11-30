import './App.css';
import movies from './remakes.json'

interface MovieProps {
  remakeName: string,
  remakeDate: string | null,
  remakeAbstract: string | null,
  originalName: string,
  originalDate: string | null,
  originalAbstract: string | null
}

function App() {
  const movieItems: MovieProps[] = movies
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Remakes</h1> 
      </header>
      <main className="App-main">
        <MovieList 
          movieItems={movieItems}
        />
      </main>
    </div>
  );
}

interface MovieListProps {
  movieItems: MovieProps[],
}

function MovieList(props: MovieListProps): JSX.Element {
  console.log(props.movieItems)
  return (
    <div className="movie-list">
      {props.movieItems.map((item) => 
        <MovieCard 
          movieItems={props.movieItems}
          movieItem={item}
        />
        )}
    </div>
  )
}

interface MovieCardProps {
  movieItems: MovieProps[],
  movieItem: MovieProps
}

function MovieCard(props: MovieCardProps): JSX.Element {
  const movieProps = props.movieItem
  return (
    <div className="movie-card" key={props.movieItems.indexOf(props.movieItem)}>
      <h2>Remake: {movieProps.remakeName} {movieProps.remakeDate && "(" + movieProps.remakeDate.slice(0, 4) + ")"}</h2>
      <p>{movieProps.remakeAbstract ? movieProps.remakeAbstract : "Description unavailable"}</p>
      <h2>Original: {movieProps.originalName} {movieProps.originalDate && "(" + movieProps.originalDate.slice(0, 4) + ")"}</h2>
      <p>{movieProps.originalAbstract ? movieProps.originalAbstract : "Description unavailable"}</p>
  </div>
  )
}

export default App;
