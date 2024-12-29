"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pt-35 md:pt-40 xl:pt-46">
        <div className="mx-auto max-w-screen-xl gap-12 overflow-hidden px-4 text-gray-600 md:flex md:px-8">
          <div className="max-w-xl flex-none space-y-5">
            <a
              href="javascript:void(0)"
              className="inline-flex items-center gap-x-6 rounded-full border p-1 pr-6 text-sm font-medium duration-150 hover:bg-white"
            >
              <span className="inline-block rounded-full bg-indigo-600 px-3 py-1 text-white">
                News
              </span>
              <p className="flex items-center">
                Read the blogs post from here
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
            </a>
            <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
              Discover what Dream Byte can do for your business
            </h1>
            <p>
              Digital experiences delivered as apps, workflows, and automations
              require powerful cloud native infrastructure to do the heavy
              lifting. You can now focus on your business requirements while we
              handle the complexities.
            </p>
            <div className="flex items-center gap-x-3 sm:text-sm">
              <a
                href="javascript:void(0)"
                className="flex items-center justify-center gap-x-1 rounded-full bg-gray-800 px-4 py-2 font-medium text-white duration-150 hover:bg-gray-700 active:bg-gray-900 md:inline-flex"
              >
                Schedule Meeting
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              {/* <a
                href="javascript:void(0)"
                className="flex items-center justify-center gap-x-1 px-4 py-2 font-medium text-gray-700 duration-150 hover:text-gray-900 md:inline-flex"
              >
                Contact sales
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a> */}
            </div>
          </div>
          <div className="hidden flex-1 md:block">
            {/* Replace with your image */}
            <img
              src="https://raw.githubusercontent.com/sidiDev/remote-assets/c86a7ae02ac188442548f510b5393c04140515d7/undraw_progressive_app_m-9-ms_oftfv5.svg"
              className="max-w-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

// "use client";

// import React from "react";
// import Image from "next/image";

// const Hero = () => {
//   return (
//     <section>
//       <div className="mx-auto max-w-screen-xl gap-12 overflow-hidden px-4 py-28 text-gray-600 md:flex md:px-8">
//         <div className="max-w-xl flex-none space-y-5">
//           <a
//             href="javascript:void(0)"
//             className="inline-flex items-center gap-x-6 rounded-full border p-1 pr-6 text-sm font-medium duration-150 hover:bg-white"
//           >
//             <span className="inline-block rounded-full bg-indigo-600 px-3 py-1 text-white">
//               News
//             </span>
//             <p className="flex items-center">
//               Read the launch post from here
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="h-5 w-5"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </p>
//           </a>
//           <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
//             Build your SaaS exactly how you want
//           </h1>
//           <p>
//             Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
//             doloremque laudantium, totam rem aperiam, eaque ipsa quae.
//           </p>
//           <div className="flex items-center gap-x-3 sm:text-sm">
//             <a
//               href="javascript:void(0)"
//               className="flex items-center justify-center gap-x-1 rounded-full bg-gray-800 px-4 py-2 font-medium text-white duration-150 hover:bg-gray-700 active:bg-gray-900 md:inline-flex"
//             >
//               Get started
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="h-5 w-5"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </a>
//             <a
//               href="javascript:void(0)"
//               className="flex items-center justify-center gap-x-1 px-4 py-2 font-medium text-gray-700 duration-150 hover:text-gray-900 md:inline-flex"
//             >
//               Contact sales
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="h-5 w-5"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </a>
//           </div>
//         </div>
//         <div className="hidden flex-1 md:block">
//           {/* Replace with your image */}
//           <img
//             src="https://raw.githubusercontent.com/sidiDev/remote-assets/c86a7ae02ac188442548f510b5393c04140515d7/undraw_progressive_app_m-9-ms_oftfv5.svg"
//             className="max-w-xl"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
