import Image from "next/image";
import React, { useContext, useState } from "react";
import Imagess from "../constants/imagess";
import { FaGoogle } from "react-icons/fa";

import { Formik, Form } from "formik";
import ConditionalRoute from "@/routes/ConditionalRoute";

import { auth, googleProvider } from "@/firebase";
import {
  User,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { AuthContext } from "@/AuthContext";
import { useRouter } from "next/router";
import { updateArtwork } from "./api/sheets";
import Link from "next/link";

export interface LoginProps {
  currentBid: string;
  id: string;
}

export interface AuthProps {
  email?: string;
  password?: string;
}

const Login = ({ currentBid, id }: LoginProps) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const { currentUser }: { currentUser: User | null } = useContext(AuthContext);

  const onLogin = () => {};

  // const onLogin = (e: any) => {
  //   e.preventDefault();
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       router.push("/");
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //     });
  // };

  // const signInwithGoogle = async () => {
  //   try {
  //     await signInWithPopup(auth, googleProvider);
  //     router.push("/");
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  //   // @ts-ignore
  //   const { data: googleApi, error } = useGetGoogleLinkQuery();
  //   const dispatch = useDispatch<Dispatch<any>>();
  //   const userSlice = useSelector<RootState, UserStateProps>(
  //     (state) => state.user,
  //   );

  //   const location = useLocation();
  //   const searchParams = new URLSearchParams(location.search);
  //   const message = searchParams.get('msg');

  //   const { isOpen, onOpen, onClose } = useDisclosure();

  //   const onGoogleLogin = useCallback(() => {
  //     if (googleApi && googleApi.url) {
  //       return (window.location.href = googleApi.url);
  //     }
  //   }, []);

  //   const onLogin = useCallback((props: LoginProps) => {
  //     return dispatch(login(props));
  //   }, []);

  //   const handleClose = useCallback(() => {
  //     onClose();
  //     dispatch(resetUser());
  //   }, []);

  //   useEffect(() => {
  //     dispatch(resetRegistered());
  //   }, []);

  //   useEffect(() => {
  //     if (userSlice.errMsg && userSlice.errMsg.Id === 'LOGIN_ERROR') {
  //       setTimeout(() => {
  //         dispatch(resetRegErrMsg());
  //       }, 5000);
  //     }

  //     if (userSlice.user && !userSlice.user?.isVerified) {
  //       onOpen();
  //       setTimeout(() => {
  //         dispatch(resetUser());
  //       }, 10000);
  //     }
  //   }, [userSlice.user, userSlice.user]);
  return (
    <div className="w-full h-screen flex items-start">
      <div className="hidden sm:w-1/2 sm:flex relative h-full flex-col">
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          <h1 className="text-4xl text-white font-bold my-4">
            CSP Silent Auction
          </h1>
          <p className="text-xl text-white font-normal">
            Raising funds to renovate RACO Orphanage
          </p>
        </div>
        <Image
          src={Imagess.blueCool}
          alt="login screen image"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-[500px] sm:w-1/2 w-full h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
        <h1 className=" max-w-[500px] mx-auto w-full text-xl text-[#0b469c] font-semibold">
          CSP x YSMA
        </h1>

        {/* <Formik
            initialValues={{
              email: '',
              password: '',
              loginAlways: false,
            }}
            // validationSchema={LoginSchema}
            onSubmit={(values) => {
              // onLogin(values);
            }}
          >
            {({ errors, values, setFieldValue }) => ( */}

        {/* {message ? (
                  <Alert
                    alignItems={'center'}
                    borderRadius={'0.2rem'}
                    mb={'0.4rem'}
                    padding={'0.2rem'}
                    fontSize={'14px'}
                    status="success"
                  >
                    <AlertIcon />
                    {message}
                  </Alert>
                ) : null}

                {userSlice.errMsg && userSlice.errMsg.Id === 'LOGIN_ERROR' ? (
                  <Alert
                    alignItems={'center'}
                    borderRadius={'0.2rem'}
                    mb={'0.4rem'}
                    padding={'0.2rem'}
                    fontSize={'14px'}
                    status="error"
                  >
                    <AlertIcon />
                    {userSlice.errMsg.msg}
                  </Alert>
                ) : null} */}
        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-semibold mb-2">Login</h3>
            <p className="text-sm mb-2">
              Welcome Back! Please enter your details.
            </p>
          </div>

          <div className="w-full flex flex-col">
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />

            <div className="w-full flex flex-col my-4">
              <Link href={"/"}>
                <button
                  type="submit"
                  className="w-full text-white bg-[#0b469c] font-semibold my-2 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
                  onClick={()=>updateArtwork(id, currentBid, email)}
                >
                  Login
                </button>
              </Link>
            </div>

            <div className="w-full flex items-center justify-center relative py-2">
              <div className="w-full h-[1px] bg-black/40"></div>
              <p className="text-lg absolute text-black/80 bg-[#f5f5f5]">or</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// #0b469c

// #46afe0
