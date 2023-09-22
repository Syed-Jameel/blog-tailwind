import colabrio from "../../../public/colabrio-icon.png";
import queryImage from "../../../public/query-image.jpg";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Posts from "@/components/Posts";

export default function page() {
  return (
    <main className="p-6 min-h-screen">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-12 sm:mt-2 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="col-span-2  overflow-hidden space-y-14 ">
              <div className="space-y-4 ">
                <div className="flex justify-between align-middle ">
                  <div>
                    <h3 className="inline-block text-sm font-semibold text-gray-900">Digital Marketing</h3>
                    <span className="px-2 text-red-600 ">&#x2022;</span>
                    <span className="text-gray-700 text-sm">4 min read</span>
                  </div>
                </div>

                <h1 className="text-2xl sm:text-5xl font-black text-gray-900 leading-8 tracking-tight">The Highly Contemporary UI/UX Design from a Silicon Valley.</h1>

                <div className="flex justify-between items-start space-x-2 text-sm  w-full sm:w-[60%]">
                  <div>
                    <Image src={colabrio} widht={50} height={50} alt="colabrio" />
                  </div>
                  <div>
                    <div className="text-gray-600">Author</div>
                    <div className="text-gray-900 font-bold">Colabrio</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Published</div>
                    <div className="text-gray-900 font-bold">August 4, 2020</div>
                  </div>
                  <div>
                    <div className="text-gray-600">0 comments</div>
                    <div className="text-gray-900 font-bold  hover:text-red-600 hover:underline">
                      <Link href="/">Join the Conversation</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-x-2 text-sm">
                <Link href="/" className="text-gray-900 font-bold  hover:text-red-600 hover:underline">
                  Home <ChevronRightIcon className="w-4 h-4 inline-block" />
                </Link>
                <Link href="/" className="text-gray-900 font-bold  hover:text-red-600 hover:underline">
                  Digital <ChevronRightIcon className="w-4 h-4 inline-block" />
                </Link>
                <span className="text-gray-600">Digital The Highly Contemporary UI/UX Design from a Silicon Valley.</span>
              </div>

              {/* Using a Query */}
              <div className="space-y-4">
                <h3 className="text-2xl font-black ">Using a Query</h3>
                <p className="text-gray-600 text-sm leading-8 tracking-wide">
                  A <span className="text-red-600 hover:underline hover:font-bold">CSS</span> <i>pseudo-class</i> is a keyword added to a selector that specifies a special state of the selected element(s). For example, <span className="bg-gray-100  px-2 py-1 rounded-md">:hover</span> can be used to change a button’s color when the user’s pointer hovers over it. <br />
                </p>
                <p className="text-gray-600 text-sm leading-8 tracking-wide">
                  From the business, until be once yet pouring got it <span className="text-red-600 hover:underline hover:font-bold">duckthemed phase</span> in the creative concepts must involved. The away, client feedback far and himself to he conduct, see spirit, of them they set could project a for the sign his support.
                </p>

                <Image src={queryImage} alt="query" />
                <p className="text-gray-600 text-sm leading-8 tracking-wide">
                  Other pseudo-elements and pseudo-class selectors, <span className="bg-gray-100  px-2 py-1 rounded-md">:not()</span> can be chained with other pseudo-classes and pseudo-elements. For example, the following will add a “New!” word to list items that do not have a <span className="bg-gray-100  px-2 py-1 rounded-md">.old</span> class name, using the <span className="bg-gray-100  px-2 py-1 rounded-md ">::after</span>
                </p>
              </div>

              {/* Trivia & Notes */}
              <div className="space-y-4">
                <h3 className="text-2xl font-black">Trivia & Notes</h3>

                <p className="text-gray-600 text-sm leading-8 tracking-wide">
                  The <span className="bg-gray-100  px-2 py-1 rounded-md">:not()</span> selector is chainable with more <span className="bg-gray-100  px-2 py-1 rounded-md">:not()</span> selectors. For example,{" "}
                  <span className="text-red-600 hover:underline hover:font-bold">
                    <Link href="/">the following </Link>
                  </span>
                  will match all <span className="bg-gray-100  px-2 py-1 rounded-md">articles</span> except the one with an ID <span className="bg-gray-100  px-2 py-1 rounded-md">#featured,</span> and then will filter out the articles with a class name <span className="bg-gray-100  px-2 py-1 rounded-md">.tutorial:</span>
                </p>
              </div>

              {/* On the Specificity of Selectors */}
              <div className="space-y-4">
                <h3 className="text-2xl font-black">On the Specificity of Selectors</h3>

                <p className="text-gray-600 text-sm leading-8 tracking-wide">
                  The specificity of the <span className="bg-gray-100  px-2 py-1 rounded-md">:not()</span> pseudo-class is the specificity of its argument. The <span className="bg-gray-100  px-2 py-1 rounded-md">:not()</span> pseudo-class does not add to the selector specificity, unlike other pseudo-classes.
                </p>
                <p className="text-gray-600 text-sm leading-8 tracking-wide">
                  The
                  <span className="text-red-600 hover:underline hover:font-bold">
                    <Link href="/"> simple selector </Link>
                  </span>
                  that <span className="bg-gray-100  px-2 py-1 rounded-md">:not()</span> takes as an argument can be any of the following:
                </p>

                <ul className="marker:text-gray-900 list-disc list-inside text-gray-600 text-sm leading-8 tracking-wide ">
                  <li>
                    Type selector (e.g <span className="bg-gray-100  px-2 py-1 rounded-md">p</span> , <span className="bg-gray-100  px-2 py-1 rounded-md">span</span>, etc.)
                  </li>
                  <li>
                    Class selector (e.g <span className="bg-gray-100  px-2 py-1 rounded-md">.element</span> , <span className="bg-gray-100  px-2 py-1 rounded-md">.sidebar</span>, etc.)
                  </li>
                  <li>
                    ID selector (e.g <span className="bg-gray-100  px-2 py-1 rounded-md">#header</span>)
                  </li>
                  <li>
                    Pseudo-class selector (e.g <span className="bg-gray-100  px-2 py-1 rounded-md text-red-600">:first-child</span> , <span className="bg-gray-100  px-2 py-1 rounded-md text-red-600">:last-child</span>)
                  </li>
                </ul>
              </div>

              {/* Reference */}
              <div className="space-y-4">
                <h3 className="text-2xl font-black">Reference</h3>

                <p className="text-gray-600 text-sm leading-8 tracking-wide">
                  The argument passed to <span className="bg-gray-100  px-2 py-1 rounded-md">:not()</span> can <i>not,</i> however, be a pseudo-<b className="text-gray-900 font-bold">element</b> selector (such as <span className="bg-gray-100  px-2 py-1 rounded-md">::before</span> and <span className="bg-gray-100  px-2 py-1 rounded-md">::before</span> , among others ) or another negation pseudo-class selector.
                </p>
                <p className="text-gray-600 text-sm  leading-6 tracking-wide border-l-4 border-gray-900 ps-4 sm:ps-2">Getting practice furnished the where pouring the of emphasis as return encourage a then that times, the doing would in object we young been in the in the to their line helplessly or name to in of, and all and to more my way and opinion.</p>

                <table className="text-left ">
                  <thead>
                    <tr>
                      <th className="w-[150px] ">Employee</th>
                      <th className="w-[150px] ">Salary</th>
                      <th className="w-[500px] ">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Link href="/" className="text-red-600 hover:underline">
                          Martin
                        </Link>
                      </td>
                      <td>$1</td>
                      <td>Because that’s all Steve Job’ needed for a salary.</td>
                    </tr>
                    <tr>
                      <td>
                        <Link href="/" className="text-red-600 hover:underline">
                          John
                        </Link>
                      </td>
                      <td>$100K</td>
                      <td>For all the blogging he does.</td>
                    </tr>
                    <tr>
                      <td>
                        <Link href="/" className="text-red-600 hover:underline">
                          Robert
                        </Link>
                      </td>
                      <td>$100M</td>
                      <td>Pictures are worth a thousand words, right? So Tom x 1,000.</td>
                    </tr>
                    <tr>
                      <td>
                        <Link href="/" className="text-red-600 hover:underline">
                          Jane
                        </Link>
                      </td>
                      <td>$100B</td>
                      <td>With hair like that?! Enough said…</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Useful Fallbacks */}
              <div className="space-y-4">
                <h3 className="text-2xl font-black leading-tight">Useful Fallbacks</h3>

                <p className="text-gray-600 text-sm leading-6 tracking-wide">It’s extension live for much place. Road, are, the which, and handout tones. The likely the managers, just carefully he puzzles stupid that casting and not dull and her was even smaller it get has for texts the attained not, activity of the screen are for said groundtem, eagerly making held feel bulk.</p>

                <p className="text-gray-600 text-sm leading-6 tracking-wide">
                  Just like other pseudo-elements and pseudo-class selectors, <span className="bg-gray-100  px-2 py-1 rounded-md">:not()</span> can be chained with other pseudo-classes and pseudo-elements. For example, the following will add a “New!” word to list items that do not have a <span className="bg-gray-100  px-2 py-1 rounded-md">.old </span>class name, using the <span className="bg-gray-100  px-2 py-1 rounded-md">::after</span> pseudo-element:
                </p>
                <div className="flex items-start sm:items-center justify-start gap-x-4">
                  <span className="whitespace-nowrap">Tagged with: </span>
                  <div className="space-x-2 space-y-2">
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-semibold py-1 px-2 rounded">Blog</button>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-semibold py-1 px-2 rounded">Creative</button>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-semibold py-1 px-2 rounded">Portfolio</button>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-semibold py-1 px-2 rounded">Theme</button>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-semibold py-1 px-2 rounded">WordPress</button>
                  </div>
                </div>
              </div>

              {/* Colabrio */}
              <div className="aspect-h-1  w-full p-4  overflow-hidden rounded-md bg-gray-100 bg-opacity-50 lg:aspect-none group-hover:bg-gray-100 lg:h-40">
                <div className="flex items-center justify-between  gap-x-4">
                  <div className="flex items-center justify-center">
                    <Image src={colabrio} widht={150} height={150} alt="colabrio" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold">Colabrio</h3>
                    <p className="text-sm text-gray-600"> Digital content curator | Passionate about UX | Former educator turned enthusiast | Unapologetic nerd & GIF aficionado | Devoted hockey follower | Oxford comma advocate for life.</p>
                  </div>
                  <div className="space-y-2 flex flex-col justify-center">
                    <button className="w-8 h-8 bg-gray-900 hover:bg-red-500 text-white text-sm font-semibold  rounded-full">
                      <i className="w-4 h-4 bi bi-facebook"></i>
                    </button>
                    <button className="w-8 h-8 bg-gray-900 hover:bg-red-500 text-white text-sm font-semibold  rounded-full">
                      <i className="w-4 h-4 bi bi-instagram"></i>
                    </button>
                    <button className="w-8 h-8 bg-gray-900 hover:bg-red-500 text-white text-sm font-semibold rounded-full">
                      <i className=" w-4 h-4 bi bi-pinterest"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <div>
                <Posts />
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
