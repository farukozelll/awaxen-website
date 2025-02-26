// hooks/usePagination.ts
import { useMemo } from 'react';

export const DOTS = '...';

interface UsePaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  siblingsCount?: number;
}

export function usePagination({
  totalItems,
  itemsPerPage,
  currentPage,
  siblingsCount = 1,
}: UsePaginationProps) {
  return useMemo(() => {
    const totalPageCount = Math.ceil(totalItems / itemsPerPage);

    if (totalPageCount <= 7) {
      return Array.from({ length: totalPageCount }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingsCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingsCount, totalPageCount);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingsCount;
      const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingsCount;
      const rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => totalPageCount - rightItemCount + i + 1
      );
      return [1, DOTS, ...rightRange];
    }

    const middleRange = Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, i) => leftSiblingIndex + i
    );
    return [1, DOTS, ...middleRange, DOTS, totalPageCount];
  }, [totalItems, itemsPerPage, currentPage, siblingsCount]);
}