import React from 'react';
import './BookGrid.css';

import BookCard from '../BookCard/BookCard';

export default function BookGrid({books}) {
  return (
    <section className="books">
       {books.map(x=><BookCard key={x.primary_isbn10} book={x}/>)}
    </section>
    );
}