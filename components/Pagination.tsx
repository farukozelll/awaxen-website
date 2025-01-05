// components/Pagination.tsx
import { cn } from '@/utils/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DOTS, usePagination } from '@/hooks/usePagination';

interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    siblingsCount?: number;
}

// components/Pagination.tsx
export function Pagination({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange
  }: PaginationProps) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    if (totalPages <= 1) return null;
  
    return (
      <div className="flex items-center justify-center gap-2">
        {/* Önceki sayfa butonu */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-lg',
            'text-gray-300 transition-colors',
            currentPage === 1 
              ? 'cursor-not-allowed opacity-50' 
              : 'hover:bg-gray-800'
          )}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
  
        {/* Sayfa numaraları */}
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={cn(
              'h-10 w-10 rounded-lg text-sm transition-colors',
              currentPage === index + 1
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-800'
            )}
          >
            {index + 1}
          </button>
        ))}
  
        {/* Sonraki sayfa butonu */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-lg',
            'text-gray-300 transition-colors',
            currentPage === totalPages 
              ? 'cursor-not-allowed opacity-50' 
              : 'hover:bg-gray-800'
          )}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    );
  }