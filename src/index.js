import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { data } from "./data";

const books = data;

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ title, author }) => {
  return (
    <article className="book">
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Booklist />
  </React.StrictMode>
);
