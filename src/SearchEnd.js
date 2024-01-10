import { useParams } from 'react-router-dom';
import Header from './Header';
import MoviesItem from './inContent/MoviesItem.js'
import React from "react"
import './SearchEnd.css';
import Footer from './Footer';
import axios from 'axios';
//import { movies as MoviesData } from './inContent/MoviesData.js'

function SearchEnd() {
    //const [movies] = useState(MoviesData)
    const [movies, setMovies] = React.useState([

    ])

    React.useEffect( () => {
        let data = axios.get('http://localhost:8000/')
        data.then(res => {
          setMovies(res.data)
        })
      },[])

    const { resName } = useParams();
    
    
    const resMovie = movies.find(el => el.name === resName );
        
    return (
        <div className="SearchEnd">
            <Header />
        <div className='MoviesItem'>
          {!resMovie ? <div className='isNot'>Movie not found</div>
           : <MoviesItem key={resMovie} movie={resMovie} />}
           </div>
           <Footer />
        </div>
        
    );
}

export default SearchEnd;