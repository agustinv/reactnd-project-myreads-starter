import React from 'react'

function BookImage(props) {
  const thumbnail = props.imageLinks !== undefined ? props.imageLinks.thumbnail : ''
  return  <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${thumbnail}` }}></div>
}

export default BookImage
