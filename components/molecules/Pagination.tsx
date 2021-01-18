const Pagination = () => {
  return (
    <div>
      <ul className="flex pl-0 list-none rounded my-2">
        <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200">
          <a className="page-link" href="#">
            Prev
          </a>
        </li>
        <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 rounded-r hover:bg-gray-200">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
