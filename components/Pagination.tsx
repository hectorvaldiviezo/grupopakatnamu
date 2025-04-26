import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Meta } from "./novedades/lib/novedades.interface";

export interface PaginationProps {
  meta: Meta;
  onPageChange: (page: number) => void;
}

export default function CustomPagination({
  meta,
  onPageChange,
}: PaginationProps) {
  const { current_page, last_page } = meta;

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber !== current_page) {
      onPageChange(pageNumber);
    }
  };

  const handlePreviousClick = () => {
    if (current_page > 1) handlePageClick(current_page - 1);
  };

  const handleNextClick = () => {
    if (current_page < last_page) handlePageClick(current_page + 1);
  };

  const generatePageNumbers = () => {
    const pages = [];
    let addedStartEllipsis = false;
    let addedEndEllipsis = false;

    for (let i = 1; i <= last_page; i++) {
      if (
        i === 1 ||
        i === last_page ||
        i === current_page ||
        i === current_page - 1 ||
        i === current_page + 1
      ) {
        pages.push(
          <PaginationItem className="cursor-pointer" key={i}>
            <PaginationLink
              className={`hover:bg-muted ${
                i === current_page ? "bg-primary text-white" : ""
              }`}
              isActive={i === current_page}
              onClick={() => handlePageClick(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      } else if (i < current_page - 1 && !addedStartEllipsis) {
        pages.push(
          <PaginationItem className="cursor-pointer" key={`startEllipsis-${i}`}>
            <PaginationEllipsis />
          </PaginationItem>
        );
        addedStartEllipsis = true;
      } else if (i > current_page + 1 && !addedEndEllipsis) {
        pages.push(
          <PaginationItem className="cursor-pointer" key={`endEllipsis-${i}`}>
            <PaginationEllipsis />
          </PaginationItem>
        );
        addedEndEllipsis = true;
      }
    }

    return pages;
  };

  return (
    <Pagination className="flex justify-center mt-4">
      <PaginationContent>
        <PaginationItem className="cursor-pointer">
          <PaginationPrevious
            className={
              current_page > 1
                ? ""
                : "hover:text-muted-foreground text-muted-foreground cursor-default"
            }
            onClick={current_page > 1 ? handlePreviousClick : undefined}
          />
        </PaginationItem>

        {generatePageNumbers()}

        <PaginationItem className="cursor-pointer">
          <PaginationNext
            className={
              current_page < last_page
                ? ""
                : "hover:text-muted-foreground text-muted-foreground cursor-default"
            }
            onClick={current_page < last_page ? handleNextClick : undefined}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
