import React from "react";

export const ArticleList = ({ articles }) => (
  <ul className="grid grid-cols-1 gap-4 mt-8">
    {articles.map((article) => (
      <div
        key={article.id}
        className="bg-white rounded-lg shadow-lg p-6 flex items-start space-x-4"
      >
        <img
          src="./image.jpeg"
          alt={article.title}
          className="w-16 h-16 object-cover border border-gray-200 mr-4"
        />
        <div>
          <h3 className="text-lg font-bold">{article.title}</h3>
          <p>{article.excerpt}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Read More
          </button>
        </div>
      </div>
    ))}
  </ul>
);

export const CategoryList = ({ categories }) => (
  <div className="mt-8">
    <h2 className="text-lg font-bold mb-4">Categories</h2>
    <ul className="list-disc list-inside text-gray-600 ml-8">
      {categories.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
  </div>
);

export const CommentSection = ({ comments }) => (
  <section className="mt-8">
    <h2 className="text-lg font-bold mb-4">Comments</h2>
    <ul className="list-disc list-inside text-gray-600 ml-8 space-y-4">
      {comments.map((comment) => (
        <li key={comment.id}>
          <strong>{comment.author}</strong>: {comment.text}
        </li>
      ))}
    </ul>
  </section>
);

const App = () => {
  const articles = [
    {
      id: 1,
      title: "Introduction to React",
      excerpt: "This is a short introduction to React.",
      category: 1,
    },
    {
      id: 2,
      title: "React Basics",
      excerpt:
        "Exploring the fundamentals of React components and state management.",
      category: 2,
    },
    // Add more articles as needed
  ];

  const categories = [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "Web Development" },
    { id: 3, name: "React" },
    // Add more categories as needed
  ];

  const comments = [
    { id: 1, author: "John Doe", text: "Great article!" },
    { id: 2, author: "Jane Smith", text: "Thanks for sharing this." },
    // Add more comments as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <header className="bg-gray-100 shadow-md border-b-2 border-green-500 py-3">
        <h1 className="text-center text-3xl font-bold">My Blog</h1>
      </header>
      <main className="mt-6">
        <ArticleList articles={articles} />
        <CategoryList categories={categories} />
        <CommentSection comments={comments} />
      </main>
      <footer className="bg-gray-800 text-white py-3">
        <p>© 2023 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
