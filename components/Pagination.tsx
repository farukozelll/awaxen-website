// components/Pagination.tsx
import { cn } from '@/utils/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DOTS, usePagination } from '@/hooks/usePagination';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const paginationRange = usePagination({
    totalItems,
    itemsPerPage,
    currentPage,
  });

  if (!paginationRange || currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage < Math.ceil(totalItems / itemsPerPage)) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className={cn(
          'flex h-10 w-10 items-center justify-center rounded-lg transition-colors',
          currentPage === 1
            ? 'cursor-not-allowed text-gray-400 dark:text-gray-600'
            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
        )}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {paginationRange.map((pageNumber, i) => {
        if (pageNumber === DOTS) {
          return (
            <span key={`dots-${i}`} className="px-4 py-2">
              &#8230;
            </span>
          );
        }

        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber as number)}
            className={cn(
              'h-10 w-10 rounded-lg text-sm transition-colors',
              currentPage === pageNumber
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
            )}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        onClick={onNext}
        disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
        className={cn(
          'flex h-10 w-10 items-center justify-center rounded-lg transition-colors',
          currentPage === Math.ceil(totalItems / itemsPerPage)
            ? 'cursor-not-allowed text-gray-400 dark:text-gray-600'
            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
        )}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}