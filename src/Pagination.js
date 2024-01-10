import './Pagination.css';

function Pagination({ moviesPerPage, totalMovies, paginate }) {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
      pageNumbers.push(i);
    }
  
    let visiblePageNumbers = [];
    if (pageNumbers.length <= 11) {
      visiblePageNumbers = pageNumbers;
    } else {
      const currentPageIndex = pageNumbers.indexOf(pageNumbers.length);
      if (currentPageIndex <= 6) {
        visiblePageNumbers = pageNumbers.slice(0, 7);
        visiblePageNumbers.push('PageLink');
        visiblePageNumbers.push(...pageNumbers.slice(pageNumbers.length - 3));
      } else if (currentPageIndex >= pageNumbers.length - 6) {
        visiblePageNumbers = pageNumbers.slice(pageNumbers.length - 7);
        visiblePageNumbers.unshift('PageLink');
        visiblePageNumbers.unshift(...pageNumbers.slice(0, 3));
      } else {
        visiblePageNumbers = pageNumbers.slice(currentPageIndex - 3, currentPageIndex + 4);
        visiblePageNumbers.unshift('PageLink');
        visiblePageNumbers.push('PageLink');
      }
    }
  
    return (
      <ul className="pagination">
        {
          visiblePageNumbers.map(number => (
            <li className="Page-item" key={number}>
              <div className="PageLink" onClick={() => paginate(number)}>{number}</div>
            </li>
          ))
        }
      </ul>
    );
  }
  
  export default Pagination;