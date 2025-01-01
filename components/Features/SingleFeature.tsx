// import React from "react";
// import { Feature } from "@/types/feature";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const SingleFeature = ({ feature }: { feature: Feature }) => {
//   const { icon, title, description } = feature;

//   return (
//     <>
//       <motion.div
//         variants={{
//           hidden: {
//             opacity: 0,
//             y: -10,
//           },

//           visible: {
//             opacity: 1,
//             y: 0,
//           },
//         }}
//         initial="hidden"
//         whileInView="visible"
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
//       >
//         <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
//           <Image src={icon} width={36} height={36} alt="title" />
//         </div>
//         <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
//           {title}
//         </h3>
//         <p>{description}</p>
//       </motion.div>
//     </>
//   );
// };

// export default SingleFeature;

import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="group relative z-40 overflow-hidden rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection xl:p-12.5"
      >
        <div className="absolute inset-0 z-0 origin-top-right scale-0 bg-[#4F46E5] transition-transform duration-500 ease-in-out group-hover:scale-100" />

        <div className="relative z-10">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
            <Image src={icon} width={36} height={36} alt={title} />
          </div>
          <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black transition-colors duration-300 group-hover:text-white dark:text-white xl:text-itemtitle">
            {title}
          </h3>
          <p className="text-black transition-colors duration-300 group-hover:text-white dark:text-white">
            {description}
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default SingleFeature;
