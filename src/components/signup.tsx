// import Image from "next/image";
// import {Imagess} from "../constants/imagess";
// import { FaGoogle } from "react-icons/fa";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState, updateSport1 } from "@/store/store";
// import React, { useContext, useState } from "react";

// import { useRouter } from "next/router";
// import Link from "next/link";

// export interface SignUpProps {
//   email: string;
//   password: string;
// }

// export interface AuthProps {
//   email?: string;
//   password?: string;
// }

// type Props = {
//   sports?: string;
//   setSports?: (value: string) => void;
// };

// const SignUp = () => {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [cpassword, setCPassword] = useState("");
//   // console.log(auth?.currentUser?.email);

//   // const { currentUser }: { currentUser: User | null } = useContext(AuthContext);
//   // const onSubmit = async (e: any) => {
//   //   e.preventDefault();

//   //   await createUserWithEmailAndPassword(auth, email, password)
//   //     .then(async (userCredential) => {
//   //       const { uid, email } = userCredential.user;

//   //       await addDoc(collection(db, "users"), {
//   //         email,
//   //       });
//   //       router.push("/login");
//   //     })
//   //     .catch((error) => {
//   //       const errorCode = error.code;
//   //       const errorMessage = error.message;
//   //       console.log(errorCode, errorMessage);
//   //     });
//   // };

//   // const signInwithGoogle = async () => {
//   //   try {
//   //     await signInWithPopup(auth, googleProvider);
//   //   } catch (err) {
//   //     console.error(err);
//   //   }
//   // };

//   const sharedSport = useSelector((state: RootState) => state.string1);
//   const dispatch = useDispatch();

//   const handleSportsBasketball = () => {
//     dispatch(updateSport1(""));
//   };
//   const handleSportsFootball = (email:string) => {
//     dispatch(updateSport1(email));
//   };

//   //   // @ts-ignore
//   //   const { data: googleApi, error } = useGetGoogleLinkQuery();
//   //   const dispatch = useDispatch<Dispatch<any>>();
//   //   const userSlice = useSelector<RootState, UserStateProps>(
//   //     (state) => state.user,
//   //   );

//   //   const location = useLocation();
//   //   const searchParams = new URLSearchParams(location.search);
//   //   const message = searchParams.get('msg');

//   //   const { isOpen, onOpen, onClose } = useDisclosure();

//   //   const onGoogleLogin = useCallback(() => {
//   //     if (googleApi && googleApi.url) {
//   //       return (window.location.href = googleApi.url);
//   //     }
//   //   }, []);

//   //   const onLogin = useCallback((props: LoginProps) => {
//   //     return dispatch(login(props));
//   //   }, []);

//   //   const handleClose = useCallback(() => {
//   //     onClose();
//   //     dispatch(resetUser());
//   //   }, []);

//   //   useEffect(() => {
//   //     dispatch(resetRegistered());
//   //   }, []);

//   //   useEffect(() => {
//   //     if (userSlice.errMsg && userSlice.errMsg.Id === 'LOGIN_ERROR') {
//   //       setTimeout(() => {
//   //         dispatch(resetRegErrMsg());
//   //       }, 5000);
//   //     }

//   //     if (userSlice.user && !userSlice.user?.isVerified) {
//   //       onOpen();
//   //       setTimeout(() => {
//   //         dispatch(resetUser());
//   //       }, 10000);
//   //     }
//   //   }, [userSlice.user, userSlice.user]);
//   return (
//     <div className="w-full h-screen flex items-start">
//       <div className="hidden sm:w-1/2 sm:flex relative h-full flex-col">
//         <div className="absolute top-[20%] left-[10%] flex flex-col">
//           <h1 className="text-4xl text-white font-bold my-4">
//             CSP Silent Auction
//           </h1>
//           <p className="text-xl text-white font-normal">
//             Raising funds to renovate RACO Orphanage
//           </p>
//         </div>
//         <Image
//           src={Imagess.blueCool}
//           alt="sign up screen image"
//           width="0"
//           height="0"
//           sizes="100vw"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div className="max-w-[500px] sm:w-1/2 w-full h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
//         <h1 className=" max-w-[500px] mx-auto w-full text-xl text-[#0b469c] font-semibold">
//           CSP x YSMA
//         </h1>

//         <div className="w-full flex flex-col max-w-[500px]">
//           <div className="w-full flex flex-col mb-2">
//             <h3 className="text-3xl font-semibold mb-2">Register</h3>
//             <p className="text-sm mb-2">Please enter your email.</p>
//           </div>

//           <div className="w-full flex flex-col">
//             <input
//               name="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
//             />
//             {/* 
//               <input
//                 name="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
//               />

//               <input
//                 name="cpassword"
//                 type="password"
//                 value={cpassword}
//                 onChange={(e) => setCPassword(e.target.value)}
//                 placeholder="Re-type Password"
//                 className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
//               />
//             </div> */}
//             {/* <div className="w-full flex items-center justify-between">
//               <div className="w-full items-center flex">
//                 <input type="checkbox" className="w-4 h-4 mr-2" />
//                 <p className="text-sm">Remember me</p>
//               </div>
//               <p className="text-sm font-medium whitespace-nowrap cursor-pointer ubderline underline-offset-2">
//                 Forget Password?
//               </p>
//             </div> */}

//             <div className="w-full flex flex-col my-4">
//               <Link href={"/"}>
//                 <button
//                   type="submit"
//                   className="w-full text-white bg-[#0b469c] font-semibold my-2 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
//                   onClick={() => handleSportsFootball(email)}
//                 >
//                   Sign Up
//                 </button>
//               </Link>
//             </div>

//             {/* <div className="w-full flex items-center justify-center relative py-2">
//               <div className="w-full h-[1px] bg-black/40"></div>
//               <p className="text-lg absolute text-black/80 bg-[#f5f5f5]">or</p>
//             </div> */}

//             {/* <div
//               onClick={signInwithGoogle}
//               className="w-full text-[#0b469c] my-2 bg-white border-1 border-black/40 font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
//             >
//               <div className="h-6 mr-2 flex items-center justify-center ">
//                 <FaGoogle />
//               </div>
//               Sign Up with Google
//             </div> */}
//           </div>
//           {/*    )}
//            </Formik> */}
//           {/* <div className="w-full flex items-center justify-center">
//             <p className="text-sm font-normal text-black">
//               Already have an account?{" "}
//               <span className="font-semibold underline underline-offset-2 cursor-pointer text-[#0b469c]">
//                 Sign in
//               </span>
//             </p>*/}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

// // #0b469c

// // #46afe0
