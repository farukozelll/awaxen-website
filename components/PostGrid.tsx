import { Post } from "@/app/types";
import { PostCard } from "./PostCard";

// components/PostGrid.tsx
interface PostGridProps {
    posts: Post[];
    isLoading?: boolean;
  }
  
  export function PostGrid({ posts, isLoading }: PostGridProps) {
    if (isLoading) {
      return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse rounded-2xl bg-gray-100 dark:bg-gray-800"
            >
              <div className="aspect-[16/9] bg-gray-200 dark:bg-gray-700" />
              <div className="p-6 space-y-4">
                <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
              </div>
            </div>
          ))}
        </div>
      );
    }
  
    if (posts.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No posts found. Try adjusting your filters.
          </p>
        </div>
      );
    }
  
    return (
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </div>
    );
  }
  