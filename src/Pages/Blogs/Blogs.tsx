import { useState } from "react";
import { blogPosts } from "../../Constants/dummyData";
import { Link } from "react-router-dom";
import { FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";
import HeroSection from "../../Components/Common/Hero/HeroSection";

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const categories = ["All", ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
 <HeroSection title="Blogs" description="Read our latest blogs" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              } shadow-sm`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="flex items-center mr-4">
                    <FiCalendar className="mr-1" /> {formatDate(post.date)}
                  </span>
                  <span className="flex items-center">
                    <FiClock className="mr-1" /> {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 h-14">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2 h-12">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-purple-600">
                    {post.category}
                  </span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="flex items-center text-purple-600 hover:text-purple-800 font-medium"
                  >
                    Read More <FiArrowRight className="ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 hover:bg-gray-100">
              &laquo;
            </button>
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  num === 1
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {num}
              </button>
            ))}
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 hover:bg-gray-100">
              &raquo;
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Blogs;