import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../public/logo.png";
import Link from "next/link";
import NavHoverDropdown from "./NavHoverDropdown";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/", current: false },
  { name: "Team", href: "/", current: false },
  { name: "Reports", href: "/", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  // Function to check if a given path is the current route
  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <>
      <Disclosure as="nav" className="bg-white w-full">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
              <div className="flex h-16 items-center justify-between">
                {/* <div className="flex items-center"> */}
                <div className="flex-shrink-0 sm:p-1">
                  <Image width={38} height={38} src={logo} alt="logo" />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {/* {navigation.map((item) => (
                      <Link key={item.name} href={item.href} className={classNames(item.current ? "bg-gray-900 text-gray-100" : "text-black font-semibold hover:bg-gray-0 hover:text-red-600", "rounded-md px-3 py-2 text-sm font-semibold")} aria-current={item.current ? "page" : undefined}>
                        {item.name}
                      </Link>
                    ))} */}
                    <Link href="/" className={`${isActive("/") ? "bg-gray-900 text-white hover:bg-gray-800 rounded-md px-3 py-2 text-sm font-semibold" : "text-black font-semibold hover:bg-gray-0 hover:text-red-600 rounded-md px-3 py-2 text-sm"}`}>
                      Home
                    </Link>

                    {/*Projects Dropdown start*/}
                    <NavHoverDropdown />
                    {/*Projects Dropdown end*/}

                    <Link href="/about" className={`${isActive("/about") ? "bg-gray-900 text-white hover:bg-gray-800 rounded-md px-3 py-2 text-sm font-semibold" : "text-black font-semibold hover:bg-gray-0 hover:text-red-600 rounded-md px-3 py-2 text-sm"}`}>
                      About
                    </Link>
                    <Link href="/team" className={`${isActive("/team") ? "bg-gray-900 text-white hover:bg-gray-800 rounded-md px-3 py-2 text-sm font-semibold" : "text-black font-semibold hover:bg-gray-0 hover:text-red-600 rounded-md px-3 py-2 text-sm"}`}>
                      Team
                    </Link>
                    <Link href="/reports" className={`${isActive("/reports") ? "bg-gray-900 text-white hover:bg-gray-800 rounded-md px-3 py-2 text-sm font-semibold" : "text-black font-semibold hover:bg-gray-0 hover:text-red-600 rounded-md px-3 py-2 text-sm"}`}>
                      Reports
                    </Link>
                  </div>
                </div>
                {/* </div> */}

                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-full font-bold bg-gray-900 p-2 text-white hover:bg-gray-100 hover:text-gray-900 border-2 hover:border-gray-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-2 pt-2 sm:px-3">
                {/* {navigation.map((item) => (
                  <Disclosure.Button key={item.name} as="a" href={item.href} className={classNames(item.current ? "bg-gray-900 text-white" : "text-black hover:bg-gray-900 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium")} aria-current={item.current ? "page" : undefined}>
                    {item.name}
                  </Disclosure.Button>
                ))} */}

                <div className="flex justify-center items-center">
                  <Link href="/" className={`${isActive("/") ? "text-red-600 text-sm font-semibold px-2" : "text-black font-semibold hover:bg-gray-0 hover:text-red-600 rounded-md px-3 py-2 text-sm"}`}>
                    Home
                  </Link>

                  {/*Projects Dropdown start*/}
                  <NavHoverDropdown />
                  {/*Projects Dropdown end*/}

                  <Link href="/about" className={`${isActive("/about") ? "text-red-600 text-sm font-semibold px-2" : "text-black font-semibold hover:bg-gray-0 hover:text-red-600 rounded-md px-3 py-2 text-sm"}`}>
                    About
                  </Link>
                  <Link href="/team" className={`${isActive("/team") ? "text-red-600 text-sm font-semibold px-2" : "text-black font-semibold hover:bg-gray-0 hover:text-red-600 rounded-md px-3 py-2 text-sm"}`}>
                    Team
                  </Link>
                  <Link href="/reports" className={`${isActive("/reports") ? "text-red-600 text-sm font-semibold px-2" : "text-black font-semibold hover:bg-gray-0 hover:text-red-600 rounded-md px-3 py-2 text-sm"}`}>
                    Reports
                  </Link>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
