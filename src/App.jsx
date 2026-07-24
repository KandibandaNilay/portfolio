import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Loader from './components/loader/Loader';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ScrollTop from './components/scrolltop/ScrollTop';

const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./components/blog/Blog'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Loader />
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
        <ScrollTop />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;