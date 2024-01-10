import './MoviesDetal.css'
//import React, { useState } from "react"
import React from 'react';
import { useLocation } from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MoviesDetal(movie) {
  //const [movies] = useState(MoviesData)

  const [movies, setMovies] = React.useState([

  ])

  React.useEffect( () => {
  let data = axios.get('http://localhost:8000/')
  data.then(res => {
    setMovies(res.data)
  })
},[])

  const location = useLocation();
  const path = location.pathname;
  const originalPath = path.replace("/", '');
  const numItem = movies[originalPath - 1];
  const lenghtArrow = movies.length;
  
  if (!movies) return "wait"
  const mathRandomOne = Math.ceil(Math.random() * lenghtArrow);
  const mathRandomTwo = Math.ceil(Math.random() * lenghtArrow);
  const mathRandomThree = Math.ceil(Math.random() * lenghtArrow);
  const mathRandomFour = Math.ceil(Math.random() * lenghtArrow);
  const mathRandomFive = Math.ceil(Math.random() * lenghtArrow);

  if (!numItem) return "wait"
  const recomendedOne = movies[numItem.recomended1? numItem.recomended1 : mathRandomOne -1];
  const recomendedTwo = movies[numItem.recomended2? numItem.recomended2 : mathRandomTwo -1];
  const recomendedThree = movies[numItem.recomended3? numItem.recomended3 : mathRandomThree -1];
  const recomendedFour = movies[numItem.recomended4? numItem.recomended4 : mathRandomFour -1];
  const recomendedFive = movies[numItem.recomended5? numItem.recomended5 : mathRandomFive -1];
  
  return (<div>
    <Header />
    <div className='SomeItem'>
      <div className='ItemPic' style={{ backgroundImage: `url(${numItem.image})`, }}></div>
      <div className='ItemInfo'>
        <h1 className='El SomeText'>{numItem.name}&nbsp;({numItem.year})&nbsp;смотреть бесплатно</h1>
        <div className='El Description'>{numItem.description}</div>
        <div className='El Line'></div>
        <div className='El'><b>Название:&nbsp;</b>{numItem.name}</div>
        <div className='El'><b>Год выхода:&nbsp;</b>{numItem.year}</div>
        <div className='El'><b>Режиссер:&nbsp;</b>{numItem.director}</div>
        <div className='El'><b>Страна:&nbsp;</b>{numItem.country}</div>
        <div className='El'><b>Актеры:&nbsp;</b>{numItem.actors}</div>
        <div className='El'><b>Жанр:&nbsp;</b>{numItem.genre}</div>
      </div>
      <div className='El Line ClearLine'></div>
      <div className='ForStrong'><strong className='StrongText'>Смотреть&nbsp;"{numItem.name}"&nbsp;в&nbsp;HD&nbsp;720-1080&nbsp;хорошем качестве</strong></div>
      <div className='ForIframe'><iframe width='1152px' height='580px' src={numItem.movie} frameborder="0" allowFullScreen title='{numItem.name}'></iframe></div>
      <div className='El Line ClearLine'></div>
      <div className='AboveRecomended'>Рекомендуем к просмотру :</div>
      <div className='Recomended'>
      <Link to={`/${recomendedOne.id}`}><div className='RecomendedItem' style={{ backgroundImage: `url(${recomendedOne.image})`, }}>
          <div className='ButtonPlay'><img alt="play" src='./butPlay.png'></img></div>
          <div className="Namming">
            <h2>{recomendedOne.name}</h2>
            <p>{recomendedOne.year}</p>
          </div>
        </div></Link>
        <Link to={`/${recomendedTwo.id}`}><div className='RecomendedItem' style={{ backgroundImage: `url(${recomendedTwo.image})`, }}>
        <div className='ButtonPlay'><img alt="play" src='./butPlay.png'></img></div>
          <div className="Namming">
            <h2>{recomendedTwo.name}</h2>
            <p>{recomendedTwo.year}</p>
          </div>
        </div></Link>
        <Link to={`/${recomendedThree.id}`}><div className='RecomendedItem' style={{ backgroundImage: `url(${recomendedThree.image})`, }}>
        <div className='ButtonPlay'><img alt="play" src='./butPlay.png'></img></div>
          <div className="Namming">
            <h2>{recomendedThree.name}</h2>
            <p>{recomendedThree.year}</p>
          </div>
        </div></Link>
        <Link to={`/${recomendedFour.id}`}><div className='RecomendedItem' style={{ backgroundImage: `url(${recomendedFour.image})`, }}>
        <div className='ButtonPlay'><img alt="play" src='./butPlay.png'></img></div>
          <div className="Namming">
            <h2>{recomendedFour.name}</h2>
            <p>{recomendedFour.year}</p>
          </div>
        </div></Link>
        <Link to={`/${recomendedFive.id}`}><div className='RecomendedItem' style={{ backgroundImage: `url(${recomendedFive.image})`, }}>
        <div className='ButtonPlay'><img alt="play" src='./butPlay.png'></img></div>
          <div className="Namming">
            <h2>{recomendedFive.name}</h2>
            <p>{recomendedFive.year}</p>
          </div>
        </div></Link>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default MoviesDetal;