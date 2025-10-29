// import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

// const Pagination = () => {
//   return (
//     <div className='w-max flex pagination-list'>
//       <button className='flex items-center justify-center f13 paginate_button page-item '>
//         <BsChevronLeft />
//       </button>
//       <button className='flex items-center justify-center f13 paginate_button page-item '>
//         1
//       </button>
//       <button className='flex items-center justify-center f13 paginate_button page-item '>
//         2
//       </button>
//       <button className='flex items-center justify-center f13 paginate_button page-item '>
//         3
//       </button>
//       <button className='flex items-center justify-center f13 paginate_button page-item '>
//         4
//       </button>
//       <span className='flex items-center justify-center f13 paginate_button page-item'>...</span>
//       <button className='flex items-center justify-center f13 paginate_button page-item '>
//         10
//       </button>
//       <button className='flex items-center justify-center f13 paginate_button page-item '>
//         <BsChevronRight />
//       </button>
//     </div>
//   );
// };

// export default Pagination;

import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import './pagination.scss';
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames('pagination-container pagination-list', { [className]: className })}
    >
      <li
        className={classnames('pagination-item flex items-center justify-center f13', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item flex items-center justify-center f13 dots">&#8230;</li>;
        }

        return (
          <li
            className={classnames('pagination-item flex items-center justify-center f13', {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames('pagination-item flex items-center justify-center f13', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;

