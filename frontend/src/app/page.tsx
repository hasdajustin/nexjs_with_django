import axios from "axios";

interface Blog {
  id: number;
  title: string;
  description: string;
  slug: string;
  created_at: string;
}

export default async function Home() {
  const res = await axios.get("http://127.0.0.1:8000/api-blog/blogs/");
  const blogs: Blog[] = res.data;

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 p-8 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <h1 className="rounded p-5 shadow-2xs text-5xl font-extrabold mb-10 text-center text-indigo-700">
          My Blog
        </h1>

        {blogs.length === 0 && (
          <p className="text-center text-gray-500 text-lg">No blogs found.</p>
        )}

        <div className="space-y-10">
          {blogs.map((blog) => (
            <article key={blog.id} className="rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300" >
              <h2 className="text-3xl font-semibold text-indigo-900 mb-4">
                {blog.title}
              </h2>
              <hr className="border-indigo-300 mb-4" />
              <small className="block text-gray-500 mb-6">
                Published: {new Date(blog.created_at).toLocaleDateString()}
              </small>
              <p className="text-lg leading-relaxed text-black-700 whitespace-pre-line">
                {blog.description}
              </p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
