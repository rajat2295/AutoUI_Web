// import './App.css';
// import React, { useState } from 'react';
// const Blog = () => {
//   const [articles, setArticles] = useState([
//     {
//       id: 1,
//       title: "How to Start a Business with $100",
//       description:
//         "Starting a business is hard. But there are some key steps you can take to get started even if your budget is low.",
//       image: './image.jpeg',
//       authorName: 'John Doe',
//     },
//     {
//       id: 2,
//       title: "Why You Should Use Tailwind CSS for React",
//       description:
//         "Tailwind CSS is a highly customizable, highly performant CSS framework for building user interfaces. In this article we'll explore why you should use it and how it can benefit your development workflow.",
//       image: './image.jpeg',
//       authorName: 'Jane Smith',
//     },
//   ]);

//   const [currentArticleIndex, setCurrentArticle] = useState(0);

//   return (
//     <div className="p-4">
//       {/* Header */}
//       <header>
//         <h1>React Blog</h1>
//       </header>

//       {/* Main Content */}
//       <main>
//         {/* Articles */}
//         <section>
//           {articles.map((article, index) => (
//             <article key={index} onClick={() => setCurrentArticle(index)}>
//               <div className="flex flex-col md:flex-row">
//                 <img src={article.image} alt="" />
//                 <p>{article.title}</p>
//               </div>

//               {/* More Info */}
//               {currentArticleIndex === index && (
//                 <div className="mt-2 p-4 bg-gray-100 rounded-lg shadow-md">
//                   <h3>By: {article.authorName}</h3>
//                   <p>{article.description}</p>
//                 </div>
//               )}
//             </article>
//           ))}
//         </section>

//         {/* Comments */}
//         <footer>
//           <input type="text" placeholder="Add Comment..." />
//         </footer>
//       </main>

//       {/* Sidebar */}
//       <aside className="w-1/2 bg-gray-100 p-4">
//         <h3>Categories</h3>
//         <ul>
//           <li><a href="">#1: React</a></li>
//           <li><a href="">#2: Tailwind CSS</a></li>
//           <li><a href="">#3: Development</a></li>
//         </ul>

//         <hr />
//         <h3>Newsletters</h3>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//       </aside>
//     </div>
//   );
// };

// export default Blog;

// V2 with better spanning and responsiveness
import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';

export default function App() {
  const [articles, setArticles] = useState([]);
  const [comment, setComment] = useState('');
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  const articlesPerPage = 3;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setArticles(data.slice(0, 6)));
  }, []);

  const handleAddComment = () => {
    if (comment.trim() !== '') {
      const newComments = [...articles[currentArticleIndex]?.comments];
      newComments.push({
        id: Date.now(),
        user: 'Jane Smith',
        content: comment,
      });
      setArticles([
        ...articles.slice(0, currentArticleIndex + 1),
        { ...articles[currentArticleIndex], comments: newComments },
        ...articles.slice(currentArticleIndex + 2),
      ]);
    }
    setComment('');
  };

  const handlePrevious = () => {
    if (currentArticleIndex > 0) setCurrentArticleIndex(currentArticleIndex - 1);
  };
  const handleNext = () => {
    if (currentArticleIndex < articles.length / articlesPerPage - 1) {
      setCurrentArticleIndex(currentArticleIndex + 1);
    }
  };

  return (
    <>
      <header className="bg-gray-800 p-4 flex items-center justify-between">
        <div>
          <h1 className="text-white font-semibold text-xl">React Blog</h1>
        </div>
        <FaUserCircle className="text-white hover:text-blue-500 cursor-pointer" />
      </header>

      <main className="p-4 w-full max-w-screen-md mx-auto">
        {/* Article Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {articles.slice(0, currentArticleIndex + 1).map((article) => (
            <div
              key={article?.id}
              onClick={() =>
                setCurrentArticleIndex(
                  articles.findIndex((art) => art.id === article?.id)
                )
              }
              className={`border border-gray-200 rounded-lg p-4 cursor-pointer`}
            >
              <h2 className="text-xl mb-1">{article.title}</h2>
              <p>{article.body.substring(0, 150)}...</p>
              <div className="flex mt-2">
                <FaUserCircle className="mr-2 text-gray-400 hover:text-blue-500" />
                <span className="text-gray-600">{article.name}</span>
              </div>
            </div>
          ))}
        </section>

        {/* Comment Section */}
        {articles[currentArticleIndex]?.comments?.length > 0 && (
          <footer className="flex justify-between p-4 bg-white rounded-lg mt-6">
            <h3 className="text-gray-600 font-semibold mb-2">Comments</h3>
            {articles[currentArticleIndex].comments?.map((comment) => (
              <p key={comment?.id} className="text-xs text-gray-500 mt-2">
                <span>{comment.user}</span>:
                <br />
                <span>{comment.content}</span>
              </p>
            ))}
          </footer>
        )}

        {/* Pagination */}
        <div className="flex justify-between p-4 bg-white rounded-md mt-6">
          {articles[currentArticleIndex]?.id > 0 && (
            <button
              onClick={handlePrevious}
              className={`w-1/3 border border-gray-300 hover:border-blue-500 text-left px-2 py-1 font-medium uppercase ${
                currentArticleIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Previous Article
            </button>
          )}
          <button
            onClick={handleNext}
            className={`w-1/3 border border-gray-300 hover:border-blue-500 text-right px-2 py-1 font-medium uppercase ${
              currentArticleIndex === articles.length / articlesPerPage - 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Next Article
          </button>
        </div>

        {/* Add Comment */}
        <footer className="bg-white rounded-md p-4 mt-6">
          <input
            type="text"
            placeholder="Add your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyDown={(e) => (e.key === 'Enter' ? handleAddComment() : null)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none"
          />
        </footer>
      </main>

      {/* Sidebar */}
      <aside className="bg-white w-1/3 px-4 py-6 h-screen">
        {/* Categories Section */}
        <h3>Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-2 mb-10">
          {['React', 'Tailwind CSS', 'Development'].map((cat) => (
            <button
              key={cat}
              className={`rounded-lg p-4 font-semibold text-center bg-gray-100 hover:bg-gray-50 focus:outline-none ${
                cat === articles[0]?.category?.name ? 'border border-blue-500' : ''
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Newsletters Section */}
        <h3>Newsletters</h3>
        <p className="text-xs text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </aside>
    </>
  );
}
// multiple undefined errors