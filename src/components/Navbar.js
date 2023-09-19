import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/", current: false },
  { name: "Team", href: "/", current: false },
  { name: "Reports", href: "/", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "/" },
  { name: "Settings", href: "/" },
  { name: "Sign out", href: "/" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <>
      <Disclosure as="nav" className="bg-white ">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                {/* <div className="flex items-center"> */}
                <div className="flex-shrink-0">
                  <Image width={40} height={40} src={logo} alt="logo" />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href} className={classNames(item.current ? "bg-gray-900 text-gray-100" : "text-black font-semibold hover:bg-gray-0 hover:text-red-600", "rounded-md px-3 py-2 text-sm font-semibold")} aria-current={item.current ? "page" : undefined}>
                        {item.name}
                      </Link>
                    ))}
                    {/*Projects Dropdown*/}
                    <div className="group inline-block relative">
                      <button className="bg-gray-0 text-gray-900 text-sm font-semibold py-2 px-4 inline-flex items-center hover:text-red-600">
                        <span className="mr-1">Projects</span>
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </button>
                      <ul className="absolute hidden shadow-lg  text-sm  text-gray-700 rounded-lg pt-2  group-hover:block">
                        <li className="">
                          <Link className="rounded-t bg-gray-100 hover:bg-gray-200   py-2 px-4 block whitespace-no-wrap" href="#">
                            One
                          </Link>
                        </li>
                        <li className="">
                          <Link className="bg-gray-100 hover:bg-gray-200   py-2 px-4 block whitespace-no-wrap" href="#">
                            Two
                          </Link>
                        </li>
                        <li className="">
                          <Link className="rounded-b bg-gray-100 hover:bg-gray-200   py-2 px-4 block whitespace-no-wrap" href="#">
                            Three
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button type="button" className="relative rounded-full bg-gray-800 p-1 border-4 border-gray-900 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <Image width={40} height={40} className=" rounded-full border-2 border-gray-900" src={user.imageUrl} alt="" />
                        </Menu.Button>
                      </div>
                      <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-100  py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <Link href={item.href} className={classNames(active ? "bg-gray-200" : "", "block px-4 py-2 text-sm text-gray-900 ")}>
                                  {item.name}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button key={item.name} as="a" href={item.href} className={classNames(item.current ? "bg-gray-900 text-white" : "text-black hover:bg-gray-900 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium")} aria-current={item.current ? "page" : undefined}>
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <Image width={50} height={50} className="rounded-full" src={user.imageUrl} alt="Avatar" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">{user.name}</div>
                    <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                  </div>
                  <button type="button" className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <Disclosure.Button key={item.name} as="a" href={item.href} className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-900  hover:text-white">
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
