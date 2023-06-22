// import AdminNavBar from "@/components/AdminNavBar";
// import axios from "axios";
// import { useSession } from "next-auth/react";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";

// const AuctionItems = () => {
//   const { data: session }: any = useSession();
//   const [items, SetItems] = useState([]);
//   const router = useRouter();
//   useEffect(() => {
//     if (session !== null) {
//       if (!session) {
//         router.push("/");
//       } else if (session?.user?.role !== "admin") {
//         router.push("/");
//       }
//     }
//   }, [session, router]);
  
//   useEffect(() => {
//     axios.get("/api/auctionitems").then((response) => {
//       SetItems(response.data);
//     });
//   }, []);
//   return (
//     <>
//       <AdminNavBar />

//       <Link
//         className="bg-[#0b469c] text-white  rounded-md py-1 px-4 "
//         href={"auctionitems/new"}
//       >
//         {" "}
//         Add new Artwork
//       </Link>
//       <table className="basic mt-2">
//         <thead>
//           <tr>
//             <td>Title</td>
//             <td></td>
//           </tr>
//         </thead>
//         <tbody>
//           {items &&
//             items.map((item: any, index: any) => (
//               <tr key={index}>
//                 <td>{item.title}</td>
//                 <td>
//                   {" "}
//                   <Link href={"/auctionitems/edit" + item._id}>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       className="w-4 h-4"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
//                       />
//                     </svg>
//                     Edit
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default AuctionItems;
