import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation(); // Get the current path

  return (
    <div className="flex gap-8 flex-wrap justify-center">
      <Link
        to="/analytic"
        className={`hover:animate-bounce duration-200 px-4 py-2 rounded text-white ${
          location.pathname === '/analytic' ? 'bg-red-500 ' : 'bg-gray-500'
        }`}
      >
        Analytics
      </Link>
      <Link
        to="/commit"
        className={`hover:animate-bounce duration-200 px-4 py-2 rounded text-white ${
          location.pathname === '/commit' ? 'bg-blue-500' : 'bg-gray-500'
        }`}
      >
        Commit
      </Link>
      <Link
        to="/upgrade"
        className={`hover:animate-bounce duration-200 px-4 py-2 rounded text-white ${
          location.pathname === '/upgrade' ? 'bg-green-500 ' : 'bg-gray-500'
        }`}
      >
        Upgrade
      </Link>
    </div>
  );
};

export default NavBar;
