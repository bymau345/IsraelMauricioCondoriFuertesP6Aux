import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App(){
  
  const [movies, setMovies] = useState([]);
  
  const [content, setContent] = useState(0);

  useEffect(() => {
      getFilms();
  }, [])

  const getFilms = async () => {
      const resp = await axios.get('https://swapi.dev/api/films')
      setMovies(resp.data.results);
  }
  return (
      <div>
          <button type="button" onClick={()=>{setContent(content+1)}}>click</button>
          {content < movies.length ? (<table class="">
              <tr>
                  <th>Titulo</th>
                  <th>Descripcion</th>
                  <th>Año</th>
              </tr>
              <tr key={movies.title}>
                <td >{movies[content].title}</td>
                <td >{movies[content].opening_crawl}</td>
                <td >{movies[content].release_date}</td>
              </tr>
          
          </table>) 
          : ''}
          
      </div>
        
  )
}
export default App;