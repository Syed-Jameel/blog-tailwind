import Link from "next/link";
import React from "react";
import FooterInputEmail from "./FooterInputEmail";

export default function Footer() {
  return (
    <>
      {/* Footer container */}
      <div className="bg-gray-100 bg-opacity-50 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
        {/* Main container div: holds the entire content of the footer */}
        <div className="mx-auto max-w-2xl px-4 py-2 sm:px-2 sm:py-4 lg:max-w-7xl lg:px-4">
          <div className="py-10 text-center md:text-left">
            <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Link section */}
              <div className="space-y-6 ">
                <h6 className="mb-4 text-gray-900 font-bold flex items-center justify-center md:justify-start space-x-3">
                  <Link href="/">Fb.</Link>
                  <Link href="/">/ Ig.</Link>
                  <Link href="/">/ Tw.</Link>
                  <Link href="/">/ Be.</Link>
                </h6>
              </div>

              {/* Branches section */}
              <div className="space-y-6">
                <h6 className="mb-4 text-gray-900 text-sm font-bold flex justify-center  md:justify-start">Rotterdam</h6>
                <div className="mb-4 space-y-4">
                  <p className="text-gray-600 ">
                    <span className="text-gray-900 font-bold">Ohio Digital Media LTD</span>
                    <br />
                    Graaf Florisstraat 22A,
                    <br />
                    3021 CH Rotterdam
                    <br />
                    Netherlands
                    <br />
                  </p>
                </div>
                <div className="mb-4 space-y-4">
                  <h6 className="text-gray-900 text-sm font-bold">Barcelona</h6>
                  <p className="text-gray-600">
                    <span className="text-gray-900 font-bold"> Ohio Digital LTD.</span>
                    <br />
                    365 Gran Via de Corts
                    <br />
                    Catalanes, BA 08015
                    <br />
                  </p>
                </div>
              </div>

              {/* inquiries & career section */}
              <div className="space-y-6">
                <h6 className="mb-4 text-gray-900 text-sm font-bold flex justify-center md:justify-start">Work inquiries</h6>
                <div className="mb-4">
                  <p>Interested in working with us?</p>
                  <h6 className="text-gray-900 font-bold hover:text-red-600 hover:underline">
                    <Link href="/">hello@clbthemes.com</Link>
                  </h6>
                </div>
                <h6 className="mb-4 text-gray-900 text-sm flex justify-center font-semibold  md:justify-start">Career</h6>
                <div className="mb-4">
                  <p>Looking for a job opportunity? s</p>
                  <h6 className="text-gray-900 font-bold hover:text-red-600 hover:underline">
                    <Link href="/">See open position</Link>
                  </h6>
                </div>
              </div>

              {/* Contact section */}
              <div>
                <h6 className="mb-4 text-gray-900 text-sm flex justify-center font-semibold md:justify-start">Sign up for the newsletter</h6>
                <FooterInputEmail />
              </div>
            </div>
          </div>

          {/*Copyright section*/}
          <div className="border-t-2 border-gray-200 py-2">
            <div className="w-full mx-auto max-w-screen-xl py-4 md:flex md:items-center md:justify-between">
              <span className="text-sm text-gray-500 sm:text-center ">
                © 2016-2023
                <Link href="/" className="hover:text-red-600 font-medium hover:underline mx-2">
                  Blog.
                </Link>
                All rights reserved.
                <Link href="/" className="font-bold text-gray-900">
                  {" "}
                  | Purchase
                </Link>
              </span>
              <ul className="flex flex-wrap items-center justify-center  mt-3 text-sm font-medium text-gray-500  sm:mt-0">
                <li>
                  <Link href="/" className="hover:text-red-600 font-medium hover:underline">
                    Security
                  </Link>
                  <span className="mx-2">|</span>
                </li>
                <li>
                  <Link href="/" className="hover:text-red-600 font-medium hover:underline ">
                    Privacy & Cookie Policy
                  </Link>
                  <span className="mx-2">|</span>
                </li>
                <li>
                  <Link href="/" className="hover:text-red-600 font-medium hover:underline ">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
