
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="headline">${article.headline}</div>
    <div class="author">
      <div class="img-container">
        <img src="${article.authorPhoto}">
      </div>
      <span>By ${article.authorName}</span>
    </div>
  `;

  card.addEventListener("click", () => {
    console.log(article.headline);
  });

  return card;
}

const cardAppender = (selector) => {   
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const endpoint = 'http://localhost:5001/api/articles';
  const container = document.querySelector(selector);
  axios.get(endpoint)
  .then(response => {
    const articles = Object.values(response.data.articles);
    articles.forEach(article => {
      article.forEach(article => {
        container.appendChild(Card(article));
      });
    });
  })
  .catch(error => console.error(error));
}

export { Card, cardAppender }
