import React from 'react'

const string_parameterize = function (str1) {
    return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
};

function BookAuthors(props) {
  const authors = props.authors || []
  return  <div className="book-authors">
            {authors.map((a) => <span key={string_parameterize(a)}>{a}<br/></span>)
          }</div>
}

export default BookAuthors
