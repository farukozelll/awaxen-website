import { motion } from "framer-motion";
import { Link } from "lucide-react";

import { Post } from "@/app/types";
import Image from "next/image";
import {
    Clock,
    BookOpen,
  } from 'lucide-react';

// components/PostCard.tsx
interface PostCardProps {
    post: Post;
    index: number;
  }
  
  export function PostCard({ post, index }: PostCardProps) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300"
      >
        <Link href={`/blog/${post.id}`} className="block">
          <div className="aspect-[16/9] relative overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="rounded-full bg-blue-100 dark:bg-blue-900 px-3 py-1 text-xs font-medium text-blue-800 dark:text-blue-200">
                {post.category}
              </span>
              {post.source === 'medium' && (
                <span className="flex items-center gap-1 text-xs text-gray-500">
                  <BookOpen className="h-4 w-4" />
                  Medium
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
              {post.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-2">
              {post.subtitle}
            </p>
            <div className="mt-4 flex items-center justify-between border-t pt-4">
              <div className="flex items-center gap-2">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {post.author.name}
                  </p>
                  <p className="text-xs text-gray-500">{post.author.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} min</span>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }