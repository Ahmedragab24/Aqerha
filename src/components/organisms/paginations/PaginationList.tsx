"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { setPage } from "@/store/features/page/pageSlice";
import { useAppDispatch } from "@/store/hooks";
import { useMemo } from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

const SIBLING_COUNT = 1; // Number of pages to show on each side of the current page

// Helper function to generate a range of numbers
const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
};

export default function PaginationProducts({
  currentPage,
  totalPages,
}: PaginationProps) {
  const dispatch = useAppDispatch();

  const paginationRange = useMemo(() => {
    // Calculate the total number of page numbers to display (excluding ellipses)
    // This includes the first page, last page, current page, and sibling pages.
    const totalPageNumbers = SIBLING_COUNT * 2 + 3;

    // If total pages are less than or equal to the number of blocks we want to display,
    // just show all pages without ellipses.
    if (totalPages <= totalPageNumbers) {
      return range(1, totalPages);
    }

    // Determine the start and end of the page range around the current page
    const startPage = Math.max(2, currentPage - SIBLING_COUNT);
    const endPage = Math.min(totalPages - 1, currentPage + SIBLING_COUNT);

    // Check if ellipses are needed on the left and right
    const shouldShowLeftEllipsis = startPage > 2;
    const shouldShowRightEllipsis = endPage < totalPages - 1;

    if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
      // Case 1: No left ellipsis, but right ellipsis is needed.
      // Show pages from 1 up to `totalPageNumbers - 1` (to account for the last page).
      const leftItemCount = totalPageNumbers - 1;
      const pages = range(1, leftItemCount);
      return [...pages, "...", totalPages];
    } else if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
      // Case 2: Left ellipsis is needed, but no right ellipsis.
      // Show pages from `totalPages - (totalPageNumbers - 1)` up to `totalPages`.
      const rightItemCount = totalPageNumbers - 1;
      const pages = range(totalPages - rightItemCount + 1, totalPages);
      return [1, "...", ...pages];
    } else if (shouldShowLeftEllipsis && shouldShowRightEllipsis) {
      // Case 3: Both left and right ellipses are needed.
      return [1, "...", ...range(startPage, endPage), "...", totalPages];
    }

    return range(1, totalPages); // Fallback, should be covered by the initial check
  }, [currentPage, totalPages]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(setPage(page));
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
    }
  };

  return (
    <Pagination dir="ltr">
      <PaginationContent>
        {/* Previous page button */}
        <PaginationItem>
          <PaginationPrevious
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
            onClick={() => handlePageChange(currentPage - 1)}
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>

        {/* Page number links and ellipses */}
        {paginationRange.map((page, index) => {
          if (page === "...") {
            return (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }
          return (
            <PaginationItem key={page}>
              <PaginationLink
                onClick={() => handlePageChange(Number(page))}
                isActive={Number(page) === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Next page button */}
        <PaginationItem>
          <PaginationNext
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
            onClick={() => handlePageChange(currentPage + 1)}
            aria-disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
