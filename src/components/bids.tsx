// import AdminNavBar from "@/components/AdminNavBar";
// import axios from "axios";
// import { useSession } from "next-auth/react";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";

// const Bids = () => {
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
//       <>
//         <AdminNavBar />

//         <table className="basic mt-2">
//           <thead>
//             <tr>
//               <td>Bids</td>
//               <td></td>
//             </tr>
//           </thead>
//           <tbody>
//             {items &&
//               items.map((item: any, index: any) => (
//                 <tr key={index}>
//                   <td>{item.title}</td>
//                   <td>{item.bidder}</td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </>
//   );
// };

// export default Bids;
