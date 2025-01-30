
import React from "react";

const Pagination = ({ todosPerPage, totalTodos, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalTodos / todosPerPage);

  
  const getPageNumbers = () => {
    const pages = [];
    pages.push(1); // Always show the first page

    
    if (currentPage > 2) pages.push(currentPage - 1);
    if (currentPage !== 1 && currentPage !== totalPages) pages.push(currentPage);
    if (currentPage < totalPages - 1) pages.push(currentPage + 1);

    pages.push(totalPages); // Always show the last page

    
    return [...new Set(pages)].sort((a, b) => a - b);
  };

  return (
    <nav className="flex justify-center mt-6">
      <ul className="flex space-x-2">
        {getPageNumbers().map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-md ${
                currentPage === number
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;