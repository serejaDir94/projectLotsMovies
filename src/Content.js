import './Content.css';
import React, { useState } from "react"
import { movies as MoviesData } from './inContent/MoviesData.js'
import MoviesItem from './inContent/MoviesItem.js'
import Pagination from './Pagination';
import Footer from './Footer';
import axios from 'axios';

function Content() {

  const [movies, setMovies] = React.useState([

  ])

  React.useEffect( () => {
  let data = axios.get('http://localhost:8000/')
  data.then(res => {
    setMovies(res.data)
  })
},[])

  //const [movies] = useState(MoviesData)
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(15);
  const lastMoviesIndex = currentPage * moviesPerPage;
  const firstMoviesIndex = lastMoviesIndex - moviesPerPage;
  const currentmovie = movies.slice(firstMoviesIndex, lastMoviesIndex);

  const onlyMovies = movies.filter(item => item.whatIs === 'movie');
  const onlySerials = movies.filter(item => item.whatIs === 'serial');
  const onlyCartoons = movies.filter(item => item.whatIs === 'cartoon');

  const [stateOnlyMovies] = useState(MoviesData)
  const [onlyMoviesCurrentPage, setonlyMoviesCurrentPage] = useState(1);
  const [onlyMoviesPerPage] = useState(15);
  const lastOnlyMoviesIndex = onlyMoviesCurrentPage * onlyMoviesPerPage;
  const firstOnlyMoviesIndex = lastOnlyMoviesIndex - onlyMoviesPerPage;
  const currentOnlyMovies = onlyMovies.slice(firstOnlyMoviesIndex, lastOnlyMoviesIndex);

  const [stateOnlySerials] = useState(MoviesData)
  const [onlySerialsCurrentPage, setonlySerialsCurrentPage] = useState(1);
  const [onlySerialsPerPage] = useState(15);
  const lastOnlySerialsIndex = onlySerialsCurrentPage * onlySerialsPerPage;
  const firstOnlySerialsIndex = lastOnlySerialsIndex - onlySerialsPerPage;
  const currentOnlySerials = onlySerials.slice(firstOnlySerialsIndex, lastOnlySerialsIndex);

  const [stateOnlyCartoons] = useState(MoviesData)
  const [onlyCartoonsCurrentPage, setonlyCartoonsCurrentPage] = useState(1);
  const [onlyCartoonsPerPage] = useState(15);
  const lastOnlyCartoonsIndex = onlyCartoonsCurrentPage * onlyCartoonsPerPage;
  const firstOnlyCartoonsIndex = lastOnlyCartoonsIndex - onlyCartoonsPerPage;
  const currentOnlyCartoons = onlyCartoons.slice(firstOnlyCartoonsIndex, lastOnlyCartoonsIndex);

  const paginate = pageNumber => { setCurrentPage(pageNumber) }
  const paginateOnlyMovies = pageNumberOnlyMovies => { setonlyMoviesCurrentPage(pageNumberOnlyMovies) }
  const paginateOnlySerials = pageNumberOnlySerials => { setonlySerialsCurrentPage(pageNumberOnlySerials) }
  const paginateOnlyCartoons = pageNumberOnlyCartoons => { setonlyCartoonsCurrentPage(pageNumberOnlyCartoons) }

  const nextPage = () => setCurrentPage(prev => prev + 1)
  const prevPage = () => setCurrentPage(prev => prev - 1)

  const nextPageOnlyMovies = () => setonlyMoviesCurrentPage(prev => prev + 1)
  const prevPageOnlyMovies = () => setonlyMoviesCurrentPage(prev => prev - 1)

  const nextPageOnlySerials = () => setonlySerialsCurrentPage(prev => prev + 1)
  const prevPageOnlySerials = () => setonlySerialsCurrentPage(prev => prev - 1)

  const nextPageOnlyCartoons = () => setonlyCartoonsCurrentPage(prev => prev + 1)
  const prevPageOnlyCartoons = () => setonlyCartoonsCurrentPage(prev => prev - 1)

  const [hiddenElements, setHiddenElements] = useState([1, 2, 3]);
  const handleButtonClick = (buttonIndex) => {
    if (buttonIndex === 1) {
      setHiddenElements([1, 2, 3]);
    } else if (buttonIndex === 2) {
      setHiddenElements([0, 2, 3]);
    } else if (buttonIndex === 3) {
      setHiddenElements([0, 1, 3]);
    } else {
      setHiddenElements([0, 1, 2]);
    };
  };

  return (
    <div className="App">
      <div className="buttonMenu">
        <button className="clickButton btn1" onClick={() => handleButtonClick(1)}>Главная</button>
        <button className="clickButton btn2" onClick={() => handleButtonClick(2)}>Фильмы</button>
        <button className="clickButton btn3" onClick={() => handleButtonClick(3)}>Сериалы</button>
        <button className="clickButton btn4" onClick={() => handleButtonClick(4)}>Мультфильмы</button>
      </div>
      <div className='FullVideos' style={{ display: hiddenElements.includes(0) ? 'none' : 'block' }}>
        <div className='MoviesItem'>
          {movies.length ? currentmovie.map(movie => (
            <MoviesItem key={movie.id} movie={movie} />
          )) : <p>Movies is not!</p>}
        </div>

        <div className='ForPagination'>
          <Pagination
            moviesPerPage={moviesPerPage}
            totalMovies={movies.length}
            paginate={paginate}
          />

          <div className='ClearLine'></div>

          <div className='ForBtn'>
            <button className='btn btn-primary' onClick={prevPage}>Prev Page</button>
            <button className='btn btn-primary ms-2' onClick={nextPage}>Next Page</button>
          </div>
        </div>
      </div>
      <div className='OnlyMovies' style={{ display: hiddenElements.includes(1) ? 'none' : 'block' }}>
        <div className='MoviesItem'>
          {stateOnlyMovies.length ? currentOnlyMovies.map(movie => (
            <MoviesItem key={movie.id} movie={movie} />
          )) : <p>Movies is not!</p>}
        </div>

        <div className='ForPagination'>
          <Pagination
            moviesPerPage={onlyMoviesPerPage}
            totalMovies={onlyMovies.length}
            paginate={paginateOnlyMovies}
          />

          <div className='ClearLine'></div>

          <div className='ForBtn'>
            <button className='btn btn-primary' onClick={prevPageOnlyMovies}>Prev Page</button>
            <button className='btn btn-primary ms-2' onClick={nextPageOnlyMovies}>Next Page</button>
          </div>
        </div>
      </div>
      <div className='Serials' style={{ display: hiddenElements.includes(2) ? 'none' : 'block' }}>
        <div className='MoviesItem'>
          {stateOnlySerials.length ? currentOnlySerials.map(movie => (
            <MoviesItem key={movie.id} movie={movie} />
          )) : <p>Movies is not!</p>}
        </div>

        <div className='ForPagination'>
          <Pagination
            moviesPerPage={onlySerialsPerPage}
            totalMovies={onlySerials.length}
            paginate={paginateOnlySerials}
          />

          <div className='ClearLine'></div>

          <div className='ForBtn'>
            <button className='btn btn-primary' onClick={prevPageOnlySerials}>Prev Page</button>
            <button className='btn btn-primary ms-2' onClick={nextPageOnlySerials}>Next Page</button>
          </div>
        </div>
      </div>
      <div className='Cartoons' style={{ display: hiddenElements.includes(3) ? 'none' : 'block' }}>
        <div className='MoviesItem'>
          {stateOnlyCartoons.length ? currentOnlyCartoons.map(movie => (
            <MoviesItem key={movie.id} movie={movie} />
          )) : <p>Movies is not!</p>}
        </div>

        <div className='ForPagination'>
          <Pagination
            moviesPerPage={onlyCartoonsPerPage}
            totalMovies={onlyCartoons.length}
            paginate={paginateOnlyCartoons}
          />

          <div className='ClearLine'></div>

          <div className='ForBtn'>
            <button className='btn btn-primary' onClick={prevPageOnlyCartoons}>Prev Page</button>
            <button className='btn btn-primary ms-2' onClick={nextPageOnlyCartoons}>Next Page</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Content;