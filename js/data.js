// Shared data for the whole site

const quotes = [
  "Not all those who wander are lost. – J.R.R. Tolkien",
  "It is our choices, Harry, that show what we truly are, far more than our abilities. – Albus Dumbledore",
  "So it goes. – Kurt Vonnegut",
  "We are all in the gutter, but some of us are looking at the stars. – Oscar Wilde",
  "The world is indeed full of peril, and in it there are many dark places; but still there is much that is fair. – J.R.R. Tolkien",
  "You can never get a cup of tea large enough or a book long enough to suit me. – C.S. Lewis",
  "I have always imagined that Paradise will be a kind of library. – Jorge Luis Borges"
];

const authors = [
  { name: "J.R.R. Tolkien", blurb: "Creator of Middle-earth and linguistic legend" },
  { name: "Jane Austen", blurb: "Master of wit, romance, and social observation" },
  { name: "Ursula K. Le Guin", blurb: "Philosopher of fantasy and speculative fiction" },
  { name: "Haruki Murakami", blurb: "Dreamlike stories of loneliness and wonder" },
  { name: "Chimamanda Ngozi Adichie", blurb: "Powerful voice on identity and modern Africa" },
  { name: "Neil Gaiman", blurb: "Weaver of myths for the modern age" },
  { name: "Toni Morrison", blurb: "Profound chronicler of American history and soul" }
];

const books = [
  {
    id: 1,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    length: "medium",
    image: "images/book-covers/hobbit.jpg",
    synopsis: "A gentle hobbit is pulled into an unexpected adventure with dwarves and a dragon.",
    sequels: ["The Lord of the Rings: The Fellowship of the Ring", "The Lord of the Rings: The Two Towers", "The Lord of the Rings: The Return of the King"],
    rating: 4.7,
    reviews: [
      { user: "BilboFan", stars: 5, comment: "Timeless classic!" },
      { user: "AdventureLover", stars: 4, comment: "Great world-building." }
    ]
  },
  {
    id: 2,
    title: "Dune",
    author: "Frank Herbert",
    genre: "Sci-Fi",
    length: "long",
    image: "images/book-covers/dune.jpg",
    synopsis: "A young nobleman becomes embroiled in a battle for a desert planet's most valuable resource.",
    sequels: ["Dune Messiah", "Children of Dune"],
    rating: 4.5,
    reviews: []
  },
  // Add 10–20 more books here...
  // Make sure to create matching image files in images/book-covers/
];

// Helper functions for the site
function getAuthorOfTheDay() {
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  return authors[dayOfYear % authors.length];
}
