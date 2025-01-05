// app/blog/[id]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, Calendar, Tag, Share2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Post } from '@/app/types';
import { POSTS } from '../data/posts';

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Post'u bul
    const currentPost = POSTS.find(p => p.id === params.id);
    
    if (!currentPost) {
      router.push('/blog'); // Post bulunamazsa blog ana sayfasına yönlendir
      return;
    }

    setPost(currentPost);

    // İlgili postları bul (aynı kategoriden, ama farklı ID'ye sahip)
    const related = POSTS
      .filter(p => p.id !== currentPost.id && p.category === currentPost.category)
      .slice(0, 3);
    
    setRelatedPosts(related);
  }, [params.id, router]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white dark:bg-gray-900"
    >
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
              {post.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              {post.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
          {/* Main Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* Your blog content here */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Author */}
            <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-6">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {post.author.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{post.author.role}</p>
                </div>
              </div>
            </div>

            {/* Meta Information */}
            <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-6 space-y-4">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Calendar className="h-5 w-5" />
                <span>{post.publishDate}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Clock className="h-5 w-5" />
                <span>{post.readTime} min read</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-200"
                  >
                    <Tag className="mr-1 h-4 w-4" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Share this article
              </h3>
              <div className="flex gap-4">
                <button
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=${post.title}&url=${window.location.href}`, '_blank')}
                  className="flex-1 rounded-lg bg-[#1DA1F2] py-2 text-white hover:bg-[#1a8cd8] transition-colors"
                >
                  Twitter
                </button>
                <button
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank')}
                  className="flex-1 rounded-lg bg-[#0A66C2] py-2 text-white hover:bg-[#094c8f] transition-colors"
                >
                  LinkedIn
                </button>
              </div>
            </div>

            {/* Related Posts */}
            <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Related Articles
              </h3>
              <div className="space-y-4">
                {POSTS.filter(p => p.id !== post.id)
                  .filter(p => p.category === post.category)
                  .slice(0, 3)
                  .map(relatedPost => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.id}`}
                      className="group block"
                    >
                      <div className="aspect-[16/9] relative rounded-lg overflow-hidden mb-2">
                        <Image
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                        {relatedPost.title}
                      </h4>
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Back to Blog Button */}
      <Link
        href="/blog"
        className="fixed bottom-8 left-8 flex items-center gap-2 rounded-full bg-white dark:bg-gray-800 px-4 py-2 shadow-lg hover:shadow-xl transition-shadow"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Blog</span>
      </Link>
    </motion.article>
  );
}