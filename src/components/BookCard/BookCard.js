import React from 'react';
import Card from 'react-bootstrap/Card';
import './BookCard.css';

function BookCard({book}) {
  return (

    <Card style={{width: '18rem' }}>
      <Card.Img  src={book.book_image} />
      <Card.Body>
        <Card.Title> {book.title} </Card.Title>
          <Card.Text>
          Rank: {book.rank} 
          </Card.Text>
          <Card.Text>
          Description: {book.description} 
          </Card.Text>
      </Card.Body>
    </Card>

  );
}

export default BookCard;
