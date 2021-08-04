import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import './BooksAPI.css';
import BookGrid from '../BookGrid/BookGrid';

import axios from 'axios';
const API_KEY = "5Vd8O8baGS3WEG1eQVAaS2mG6K0VyHH8";

async function getGenres() {
  const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_KEY}`);
  return response.data.results;
}

async function getBooks (genre) {
  const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${genre}.json?api-key=${API_KEY}`)
 return response.data.results;
};

function BooksAPI() {
  const [books, setBooks] = useState(null);
  const [genreOptions, setGenreOptions] = useState([]);
  const [genre, setGenre] = useState('hardcover-fiction');

  useEffect(()=> {

    ( async ()=>{

      const genres = await getGenres();
      setGenreOptions(genres.map(x=>({value: x.list_name_encoded, label:x.display_name})));
    
    })();

  }, []);

  useEffect(()=> {

    (async ()=>{
      
      setBooks(await getBooks(genre));

    })();

  }, [genre]);

  
  if (books) {
    return (
      <div>
      <div className="select">
        <Select  options={genreOptions} onChange={(selectedOption)=>{
          setGenre(selectedOption.value);
        }}/>
      </div>
      <BookGrid books={books.books}/>
      </div>
      );
  }
  else {
    return (<></>);
  }
}

export default BooksAPI;