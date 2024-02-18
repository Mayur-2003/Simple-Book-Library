async function fetchBooks() {
    try {
        const data = await fetch('/api/v1/allBooks');
        // console.log(data);
        const books = await data.json();
        console.log(books);

        const bookListElement = document.getElementById('bookList');
        books.forEach(book => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Genre:</strong> ${book.genre}</p>
                <p><strong>ISBN:</strong> ${book.isbn}</p>
                <p><strong>Description:</strong> ${book.description}</p>
            `;
            bookListElement.appendChild(card);
        });
    } catch (err) {
        console.error('Error fetching books:', err.message);
    }
}

fetchBooks();