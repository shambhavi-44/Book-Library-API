// Import Express
const express = require("express");

// Create Express application
const app = express();

// Set the port
const PORT = 3000;

// Middleware to read JSON
app.use(express.json());

// Sample book collection
let books = [
    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Fiction",
        year: 1988
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        category: "Self-Help",
        year: 2018
    },
    {
        id: 3,
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "Programming",
        year: 2008
    }
];

// Welcome route
app.get("/", (req, res) => {
    res.send("Welcome to the Book Library API!");
});


// GET: View all books
app.get("/books", (req, res) => {
    res.status(200).json({
        message: "Books retrieved successfully",
        total: books.length,
        books: books
    });
});


// GET: View one book by ID
app.get("/books/:id", (req, res) => {
    const id = Number(req.params.id);

    const book = books.find(book => book.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    res.status(200).json(book);
});


// POST: Add a new book
app.post("/books", (req, res) => {
    const { title, author, category, year } = req.body;

    if (
        typeof title !== "string" ||
        !title.trim() ||
        typeof author !== "string" ||
        !author.trim() ||
        typeof category !== "string" ||
        !category.trim() ||
        !Number.isInteger(year) ||
        year < 1 ||
        year > new Date().getFullYear()
    ) {
        return res.status(400).json({
            message: "Enter a valid title, author, category and publication year."
        });
    }

    const newBook = {
        id: books.length
            ? Math.max(...books.map(book => book.id)) + 1
            : 1,
        title: title.trim(),
        author: author.trim(),
        category: category.trim(),
        year: year
    };

    books.push(newBook);

    res.status(201).json({
        message: "Book added successfully",
        book: newBook
    });
});


// PUT: Update an existing book
app.put("/books/:id", (req, res) => {
    const id = Number(req.params.id);

    const book = books.find(book => book.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    const { title, author, category, year } = req.body;

    if (
        typeof title !== "string" ||
        !title.trim() ||
        typeof author !== "string" ||
        !author.trim() ||
        typeof category !== "string" ||
        !category.trim() ||
        !Number.isInteger(year) ||
        year < 1 ||
        year > new Date().getFullYear()
    ) {
        return res.status(400).json({
            message: "Provide valid title, author, category and publication year."
        });
    }

    book.title = title.trim();
    book.author = author.trim();
    book.category = category.trim();
    book.year = year;

    res.status(200).json({
        message: "Book updated successfully",
        book: book
    });
});


// DELETE: Remove a book
app.delete("/books/:id", (req, res) => {
    const id = Number(req.params.id);

    const bookExists = books.some(book => book.id === id);

    if (!bookExists) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    books = books.filter(book => book.id !== id);

    res.status(200).json({
        message: "Book deleted successfully"
    });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});