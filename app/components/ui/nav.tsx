import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-2 bg-gray-100">
 
      <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
        <Link href="/">
          <Image
              src="/images/logo.png" 
              alt="DreaMon"
              width={64}
              height={64}
              priority 
            />
        </Link>
      </div>

      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link 
              href="#" 
              className="text-gray-700 hover:underline">
                Shop
            </Link>
          </li>
          <li>
            <Link 
              href="#" 
              className="text-gray-700 hover:underline">
              Stories
            </Link>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:underline">
              Promotions
            </a>
          </li>
          <li>
            <Link 
              href="/product" 
              className="text-gray-700 hover:underline">
                Products
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      <Link href="/login">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default Navigation;