// app/blog/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { FeaturedPost } from '@/components/FeaturedPost';
import { Pagination } from '@/components/Pagination';
import { Post } from '@/app/types';
import { cn } from '@/utils/utils';
import { POSTS } from './data/posts';

// Kategorileri ayrı bir constants dosyasına taşıyabilirsiniz
const CATEGORIES = [
  'All',
  'Technology',
  'Innovation',
  'Sustainability'
];

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>(POSTS);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3; // 6'ya düşürdük, grid yapısı için daha uygun
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Featured post'u ana listeden çıkar
  const displayPosts = currentPage === 1 && !searchQuery && selectedCategory === 'All'
    ? posts.slice(1) // İlk post featured olarak gösterilecek
    : posts;

  // Filtreleme ve sayfalama mantığını düzeltelim
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sayfalama için postları bölme
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Sayfa değiştiğinde scroll'u yukarı al
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Sayfa değiştiğinde scroll'u yukarı al
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Arama yapıldığında ilk sayfaya dön
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); // Kategori değiştiğinde ilk sayfaya dön
  };
  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-gray-900 to-gray-800 pt-32 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Insights & Perspectives
            </h1>
            <p className="text-lg leading-8 text-gray-300">
              Exploring the intersection of technology, sustainability, and innovation.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Search and Filter Bar */}
     {/* Search and Filter Bar */}
<div className="sticky top-0 z-20 border-b border-gray-800/50 bg-gray-900/90 backdrop-blur-md shadow-lg transition-all duration-200">
  <div className="container mx-auto px-4">
    <div className="flex flex-col sm:flex-row items-center gap-4 py-4">
      {/* Search Input */}
      <div className="relative flex w-full sm:max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full bg-gray-800/50 text-gray-100 placeholder-gray-400 rounded-xl 
                     border border-gray-700/50 py-2.5 pl-10 pr-4
                     focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50
                     transition-all duration-200"
        />
      </div>

      {/* Filters Group */}
      <div className="flex items-center gap-3 ml-auto">
        {/* Filter Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={cn(
            "flex items-center gap-2 px-4 py-2.5 rounded-xl",
            "text-sm font-medium transition-all duration-200",
            "bg-gray-800/50 text-gray-300 border border-gray-700/50",
            "hover:bg-gray-800 hover:border-gray-600",
            showFilters && "bg-blue-500/10 border-blue-500/50 text-blue-400"
          )}
        >
          <Filter className="h-4 w-4" />
          <span>Filter</span>
        </button>

        {/* Category Select */}
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className={cn(
            "appearance-none rounded-xl px-4 py-2.5",
            "text-sm font-medium text-gray-300",
            "bg-gray-800/50 border border-gray-700/50",
            "hover:bg-gray-800 hover:border-gray-600",
            "focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50",
            "transition-all duration-200",
            "cursor-pointer"
          )}
        >
          {CATEGORIES.map(category => (
            <option
              key={category}
              value={category}
              className="bg-gray-800 text-gray-300 py-2"
            >
              {category}
            </option>
          ))}
        </select>

        {/* Tags Filter - Conditional Render */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-1 p-4 bg-gray-900/95 
                      border-t border-gray-800/50 backdrop-blur-md shadow-xl"
          >
            <div className="container mx-auto">
              <div className="flex flex-wrap gap-2">
                {['AI', 'IoT', 'Cloud', 'Security', 'Mobile', 'Data'].map((tag) => (
                  <button
                    key={tag}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-sm font-medium",
                      "transition-all duration-200",
                      "border border-gray-700/50",
                      "hover:border-blue-500/50 hover:bg-blue-500/10",
                      "focus:outline-none focus:ring-2 focus:ring-blue-500/50",
                      selectedTags.includes(tag)
                        ? "bg-blue-500/20 text-blue-400 border-blue-500/50"
                        : "bg-gray-800/50 text-gray-400"
                    )}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  </div>
</div>

      {/* Main Content */}
      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Featured Post - Sadece ilk sayfada ve filtre yokken göster */}
          <div className="space-y-8">
            {/* Tüm postları Featured olarak göster */}
            {currentPosts.map((post) => (
              <FeaturedPost key={post.id} post={post} />
            ))}

            {/* Post bulunamadı mesajı */}
            {currentPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400">
                  No posts found. Try adjusting your search or filters.
                </p>
              </div>
            )}
          </div>
          {/* Error State */}
          {error && (
            <div className="rounded-lg bg-red-50 dark:bg-red-900/10 p-4 mb-8">
              <p className="text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}

          {/* Pagination - Toplam sayfa sayısını düzgün hesapla */}
         
          {/* Pagination */}
          {filteredPosts.length > postsPerPage && (
            <div className="mt-12">
              <Pagination
                totalItems={filteredPosts.length}
                itemsPerPage={postsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </div>
      </section>
      {/* Newsletter Section 
      <NewsletterSection />*/}
    </div>
  );
}