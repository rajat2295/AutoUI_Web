import React, { useState } from "react";

const BlogWebsite = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "The Future of AI: What to Expect in 2023",
      category: "Technology",
      date: "Jan 1, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla et commodo luctus, ex nisl pharetra augue, vel pellentesque tellus ex eu elit. Integer at arcu ut ligula pellentesque ultricies. Integer euismod, nisl sit amet volutpat ullamcorper, sapien nisl cursus nisl, ut aliquet ligula est eget nisl. Suspendisse potenti. Nunc eget diam quis metus varius congue ac vel augue. Donec quis nisi ac metus ullamcorper tempus.",
      comments: [
        { id: 1, author: "John Doe", comment: "Great article!" },
        { id: 2, author: "Jane Smith", comment: "Interesting read." },
      ],
    },
    {
      id: 2,
      title: "The Rise of NFTs: A Game-Changer in the Art World",
      category: "Art",
      date: "Feb 1, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla et commodo luctus, ex nisl pharetra augue, vel pellentesque tellus ex eu elit. Integer at arcu ut ligula pellentesque ultricies. Integer euismod, nisl sit amet volutpat ullamcorper, sapien nisl cursus nisl, ut aliquet ligula est eget nisl. Suspendisse potenti. Nunc eget diam quis metus varius congue ac vel augue. Donec quis nisi ac metus ullamcorper tempus.",
      comments: [
        { id: 3, author: "Mike Brown", comment: "Great article!" },
        { id: 4, author: "Amy Johnson", comment: "Interesting read." },
      ],
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      const newCommentObj = {
        id: Date.now(),
        author: "Anonymous",
        comment: newComment,
      };
      setArticles(
        articles.map((article) =>
          article.id === e.currentTarget?.dataset?.articleId
            ? { ...article, comments: [...article.comments, newCommentObj] }
            : article
        )
      );
      setNewComment("");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Blog/Magazine Website</h1>
          <nav className="flex space-x-4">
            <a href="#" className="hover:text-blue-300">
              Home
            </a>
            <a href="#" className="hover:text-blue-300">
              About
            </a>
            <a href="#" className="hover:text-blue-300">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        {/* Articles */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">
                  {article.category} - {article.date}
                </p>
                <p className="text-gray-800">
                  {article.content.substring(0, 200)}...
                </p>
                <div className="flex justify-between items-center mt-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Read More
                  </button>
                  <div className="flex space-x-4">
                    {article.comments.map((comment) => (
                      <div
                        key={comment.id}
                        className="flex items-center space-x-2"
                      >
                        <span className="text-gray-600">{comment.author}:</span>
                        <span className="text-gray-800">{comment.comment}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Comments Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Leave a Comment</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={handleCommentSubmit} className="space-y-4">
              <textarea
                value={newComment}
                onChange={handleCommentChange}
                placeholder="Your comment..."
                className="w-full p-2 border border-gray-300 rounded"
                rows={3}
              />
              <div className="flex space-x-4">
                <input
                  type="submit"
                  value="Submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  data-article-id={articles[0].id}
                />
                <button
                  type="button"
                  onClick={() => setNewComment("")}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2023 Blog/Magazine Website</p>
          <nav className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
            <a href="#" className="hover:text-gray-400">
              About
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default BlogWebsite;
