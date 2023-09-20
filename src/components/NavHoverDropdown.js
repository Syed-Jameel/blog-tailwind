import Link from "next/link";

export default function NavHoverDropdown() {
  return (
    <div className="group inline-block relative">
      <button className="bg-gray-0 text-gray-900 text-sm font-semibold py-2 px-4 inline-flex items-center hover:text-red-600 ">
        <span className="mr-1">Blogs</span>
        <svg className="fill-current h-4 w-4 transition-transform duration-300 transform group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
      <ul className="absolute hidden shadow-lg  text-sm  text-gray-900 rounded-lg pt-4  group-hover:block w-screen  sm:w-[250px]">
        <li>
          <Link href="/" className="rounded-t bg-white hover:bg-gray-100  hover:text-red-600  py-2 px-4 block whitespace-no-wrap">
            blog one
          </Link>
        </li>
        <li>
          <Link href="/" className="bg-white hover:bg-gray-100 hover:text-red-600   py-2 px-4 block whitespace-no-wrap">
            blog two
          </Link>
        </li>
        <li>
          <Link href="/" className="rounded-b bg-white hover:bg-gray-100  hover:text-red-600  py-2 px-4 block whitespace-no-wrap">
            blog three
          </Link>
        </li>
      </ul>
    </div>
  );
}
