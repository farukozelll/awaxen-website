// components/FeaturedPost.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/app/types";
import { Clock, BookOpen } from 'lucide-react';

interface FeaturedPostProps {
  post: Post;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  if (!post) return null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <Link href={`/blog/${post.id}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Section */}
          <div className="relative aspect-[16/9] lg:aspect-auto lg:h-full">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden" />
          </div>

          {/* Content Section */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            {/* Category and Source */}
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-200">
                Featured
              </span>
              <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-200">
                {post.category}
              </span>
              {post.source === 'medium' && (
                <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <BookOpen className="h-4 w-4" />
                  Medium
                </span>
              )}
            </div>

            {/* Title and Subtitle */}
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors mb-4">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 line-clamp-3">
              {post.subtitle}
            </p>

            {/* Author and Meta Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {post.author.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {post.author.role}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-6 lg:mt-8">
              <span className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-500">
                Read more
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}