import React from "react";

function App() {
  const result = 23434 * 0.345;
  return (
    <section>
      <h1>The Example App</h1>
      <NewsArticle />
      <p>
        Renders the value of a variable: <span>{result}</span>
      </p>
      <button
        data-testid="load-more"
        onClick={() => {
          console.log("The button was clicked");
        }}
      >
        Load More
      </button>
    </section>
  );
}

function NewsArticle() {
  return (
    <article>
      <h1>Article</h1>
    </article>
  );
}
function ManyArticles() {
  let div = [];
  for (let i = 1; i <= 200; i++) {
    div.push(<NewsArticle key={i} />);
  }
  return div;
}

function MyApp() {
  return (
    <div>
      <p>My First React App</p>
      <ManyArticles />
    </div>
  );
}

export { App, MyApp };
