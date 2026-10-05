// BOOK INFORMATION DATA

const books = {

    alchemist: {

        title: "The Alchemist",

        author: "Paulo Coelho",

        genre: "Fiction",

        pages: "208",

        language: "English",

        price: "₹399",

        year: "1988",

        rating: "★★★★★",

        description:
        "The Alchemist is a famous novel by Paulo Coelho. " +
        "It follows a young shepherd named Santiago who " +
        "travels in search of his dreams and discovers the " +
        "importance of following his heart and purpose."

    },


    atomic: {

        title: "Atomic Habits",

        author: "James Clear",

        genre: "Self Help",

        pages: "320",

        language: "English",

        price: "₹499",

        year: "2018",

        rating: "★★★★★",

        description:
        "Atomic Habits explains how small changes in daily " +
        "habits can create remarkable results. The book " +
        "provides practical methods for developing good habits " +
        "and eliminating bad ones."

    },


    clean: {

        title: "Clean Code",

        author: "Robert C. Martin",

        genre: "Technology",

        pages: "464",

        language: "English",

        price: "₹599",

        year: "2008",

        rating: "★★★★★",

        description:
        "Clean Code is a programming book that explains how " +
        "developers can write clean, readable, maintainable " +
        "and professional software."

    },


    "1984": {

        title: "1984",

        author: "George Orwell",

        genre: "Dystopian Fiction",

        pages: "328",

        language: "English",

        price: "₹299",

        year: "1949",

        rating: "★★★★★",

        description:
        "1984 is a dystopian novel by George Orwell. " +
        "It explores surveillance, government control, " +
        "freedom and individual identity."

    },


    richdad: {

        title: "Rich Dad Poor Dad",

        author: "Robert Kiyosaki",

        genre: "Business",

        pages: "336",

        language: "English",

        price: "₹450",

        year: "1997",

        rating: "★★★★☆",

        description:
        "Rich Dad Poor Dad focuses on financial education, " +
        "investing, money management and developing a " +
        "financially independent mindset."

    },


    python: {

        title: "Python Crash Course",

        author: "Eric Matthes",

        genre: "Programming",

        pages: "544",

        language: "English",

        price: "₹699",

        year: "2019",

        rating: "★★★★★",

        description:
        "Python Crash Course is a beginner-friendly book " +
        "that teaches Python programming through practical " +
        "examples and hands-on projects."

    },


    gatsby: {

        title: "The Great Gatsby",

        author: "F. Scott Fitzgerald",

        genre: "Fiction",

        pages: "180",

        language: "English",

        price: "₹299",

        year: "1925",

        rating: "★★★★☆",

        description:
        "The Great Gatsby is a classic American novel " +
        "about wealth, love, ambition and the American dream."

    },


    ai: {

        title: "Artificial Intelligence",

        author: "Stuart Russell",

        genre: "Education",

        pages: "1160",

        language: "English",

        price: "₹999",

        year: "2020",

        rating: "★★★★★",

        description:
        "This book provides a comprehensive introduction " +
        "to artificial intelligence, intelligent agents, " +
        "machine learning, problem solving and AI systems."

    }

};


// SHOW BOOK INFORMATION

function showBook(bookId) {

    const book = books[bookId];

    const content =
        document.getElementById("bookContent");


    content.innerHTML = `

        <div class="book-details">

            <h2>
                ${book.title}
            </h2>

            <p class="author">
                By ${book.author}
            </p>


            <div class="rating">
                ${book.rating}
            </div>


            <table class="info-table">

                <tr>
                    <th>Title</th>
                    <td>${book.title}</td>
                </tr>

                <tr>
                    <th>Author</th>
                    <td>${book.author}</td>
                </tr>

                <tr>
                    <th>Genre</th>
                    <td>${book.genre}</td>
                </tr>

                <tr>
                    <th>Pages</th>
                    <td>${book.pages}</td>
                </tr>

                <tr>
                    <th>Language</th>
                    <td>${book.language}</td>
                </tr>

                <tr>
                    <th>Price</th>
                    <td>${book.price}</td>
                </tr>

                <tr>
                    <th>Published</th>
                    <td>${book.year}</td>
                </tr>

            </table>


            <div class="description">

                <h3>
                    📖 Book Description
                </h3>

                <p>
                    ${book.description}
                </p>

            </div>

        </div>

    `;

}