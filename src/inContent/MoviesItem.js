import { Link } from 'react-router-dom';
import './MoviesItem.css';
import butPlay from './butPlay.png';

function MoviesItem({ movie }) {
  return (<div>
    <Link to={`/${movie.id}`}><div className='Picturies'
      style={{
        backgroundImage: `url(${movie.image})`,
      }}>
      <div className='ButtonPlay'><img alt="play" src={butPlay}></img></div>
      {/*<img alt="play" src='./butPlay.png'></img>*/}
      <div className="Namming">
      <h2>{movie.name}</h2>
        <p>{movie.year}</p>
      </div>
    </div></Link>
</div>)
}

export default MoviesItem;