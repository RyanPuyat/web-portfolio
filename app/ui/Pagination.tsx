import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '~/utils/constant';

interface PaginationProps {
  count: number;
}

function Pagination({ count }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get('page')
    ? 1
    : Number(searchParams.get('page'));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set('page', next.toString());
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set('page', prev.toString());
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
      <p className="text-base ml-2 text-gray-300">
        Showing{' '}
        <span className="font-semibold">
          {(currentPage - 1) * PAGE_SIZE + 1}
        </span>{' '}
        to{' '}
        <span className="font-semibold">
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{' '}
        of <span className="font-semibold">{count}</span> results
      </p>

      <div className="flex gap-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm transition 
            ${
              currentPage === 1
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
        >
          <HiChevronLeft className="h-5 w-5" />
          <span>Previous</span>
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition 
            ${
              currentPage === pageCount
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
        >
          <span>Next</span>
          <HiChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
