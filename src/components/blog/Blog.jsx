import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blogPosts = [
  { id: 1, title: '5 Tips for Effective KPI Dashboards', excerpt: 'Learn how to design dashboards that drive action.', date: '2024-01-15' },
  { id: 2, title: 'Mastering DAX for Financial Reporting', excerpt: 'Advanced DAX techniques for accurate P&L statements.', date: '2024-02-01' },
  { id: 3, title: 'ETL Best Practices with Power Query', excerpt: 'Optimize your data transformation workflows.', date: '2024-02-20' },
];

const Blog = () => {
  return (
    <section className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold gradient-text mb-8">Blog</h1>
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: post.id * 0.1 }}
              className="glass-card"
            >
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
              <p className="mt-2">{post.excerpt}</p>
              <Link to="#" className="text-primary hover:underline mt-2 inline-block">Read More</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;