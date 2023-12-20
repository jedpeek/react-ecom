import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import "./shop.styles.scss";
import Category from "../category/category.component";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");

      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

// import * as React from "react";

// function MyComponent(props) {
//   return (
//     <div className="items-center self-stretch bg-black flex flex-col pt-6 pb-12 px-16 max-md:px-5">
//       <div className="flex w-full max-w-[1300px] flex-col items-center mb-3.5 max-md:max-w-full">
//         <div className="justify-between items-center self-stretch flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
//           <div className="items-stretch flex justify-between gap-5 my-auto">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/04009135b1e3bcacbca6c12a26e73b883b497fefe6d3311263c00600cb8df7a6?"
//               className="aspect-[4.95] object-contain object-center w-[99px] overflow-hidden shrink-0 max-w-full"
//             />
//             <div className="items-stretch flex justify-between gap-5 self-start max-md:justify-center">
//               <div className="text-neutral-100 text-sm font-semibold leading-4">
//                 Properties
//               </div>
//               <div className="text-neutral-100 text-sm font-semibold leading-4">
//                 Attractions
//               </div>
//               <div className="text-neutral-100 text-sm font-semibold leading-4">
//                 Popular
//               </div>
//             </div>
//           </div>
//           <div className="justify-between items-center border border-[color:var(--Neutral-300,#DCDCDC)] shadow-sm bg-white self-stretch flex gap-3 pl-3 pr-1.5 py-1 rounded-full border-solid">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/568184c640572726f7c7d09e2bfe2927a45a206412c2ab418d7ec65d2a46320c?"
//               className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
//             />
//             <img
//               loading="lazy"
//               srcSet="..."
//               className="aspect-square object-contain object-center w-7 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
//             />
//           </div>
//         </div>
//         <div className="justify-between items-start border border-[color:var(--Neutral-200,#EBEBEB)] bg-white flex w-[885px] max-w-full gap-5 mt-12 pl-8 pr-2 py-2 rounded-full border-solid max-md:flex-wrap max-md:justify-center max-md:mt-10 max-md:pl-5">
//           <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
//             <div className="text-neutral-800 text-xs font-bold leading-4">
//               Location
//             </div>
//             <div className="text-neutral-600 text-sm leading-4 whitespace-nowrap">
//               Where are you going?
//             </div>
//           </div>
//           <div className="self-center flex justify-between gap-5 my-auto items-start">
//             <div className="bg-gray-200 w-px shrink-0 h-8" />
//             <div className="items-stretch self-stretch flex flex-col">
//               <div className="text-neutral-800 text-xs font-bold leading-4 whitespace-nowrap">
//                 Check-in
//               </div>
//               <div className="text-neutral-600 text-sm leading-4 whitespace-nowrap">
//                 Add date
//               </div>
//             </div>
//           </div>
//           <div className="items-stretch self-center flex basis-[0%] flex-col my-auto">
//             <div className="text-neutral-800 text-xs font-bold leading-4 whitespace-nowrap">
//               Check-out
//             </div>
//             <div className="text-neutral-600 text-sm leading-4 whitespace-nowrap">
//               Add date
//             </div>
//           </div>
//           <div className="self-stretch flex items-center justify-between gap-5">
//             <div className="items-stretch flex flex-col my-auto">
//               <div className="text-neutral-800 text-xs font-bold leading-4">
//                 Guests
//               </div>
//               <div className="text-neutral-600 text-sm leading-4 whitespace-nowrap">
//                 Add guests
//               </div>
//             </div>
//             <div className="justify-center items-center bg-blue-600 self-stretch flex aspect-square flex-col w-11 h-11 px-3 rounded-full">
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/be8bb9c322a2c3372fef47d497b1c1290110fb484ad2cc67caf3456fb9d809ab?"
//                 className="aspect-square object-contain object-center w-full overflow-hidden"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="flex-col justify-center items-center self-stretch overflow-hidden relative flex min-h-[640px] w-full mt-6 px-16 py-12 max-md:max-w-full max-md:px-5">
//           <img
//             loading="lazy"
//             srcSet="..."
//             className="absolute h-full w-full object-cover object-center inset-0"
//           />
//           <div className="relative flex w-[578px] max-w-full flex-col items-stretch mt-96 mb-8 max-md:mt-10">
//             <div className="text-white text-4xl font-semibold leading-[50px] max-md:max-w-full">
//               Not sure where to go? Perfect.
//             </div>
//             <div className="text-neutral-600 text-base font-semibold leading-5 whitespace-nowrap justify-center items-stretch border border-[color:var(--Neutral-300,#DCDCDC)] shadow-sm bg-white self-center mt-6 px-6 py-3.5 rounded-md border-solid max-md:px-5">
//               I’m flexible
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
