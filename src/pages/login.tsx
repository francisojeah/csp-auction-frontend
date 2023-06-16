import Image from 'next/image';
import React from 'react';
import Imagess from '../constants/imagess';
import { FaGoogle } from 'react-icons/fa';

import { Formik, Form } from 'formik';
import ConditionalRoute from '@/routes/ConditionalRoute';

export interface LoginProps {
  email: string;
  password: string;
}

export interface AuthProps {
  email?: string;
  password?: string;
}

const Login = () => {
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
    // <ConditionalRoute
    //   redirectTo="/adashboard"
    //   condition={
    //     userSlice.user &&
    //     userSlice.user.isVerified &&
    //     userSlice.isAuthenticated &&
    //     userSlice.user.roles.includes(Role.Admin)
    //       ? false
    //       : true
    //   }
    // >
    //   <ConditionalRoute
    //     redirectTo="/cdashboard"
    //     condition={
    //       userSlice.user &&
    //       userSlice.user.isVerified &&
    //       userSlice.isAuthenticated &&
    //       userSlice.user.roles.includes(Role.Client)
    //         ? false
    //         : true
    //     }
    //   >
    //     <ConditionalRoute
    //       redirectTo="/dashboard"
    //       condition={
    //         userSlice.user &&
    //         userSlice.user.isVerified &&
    //         userSlice.isAuthenticated &&
    //         userSlice.user.roles.includes(Role.User)
    //           ? false
    //           : true
    //       }
    //     >
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
              // value={values['email']}
              // onChange={(e) => setFieldValue('email', e.target.value)}
              placeholder="Email"
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />

            <input
              name="password"
              type="password"
              // value={values['password']}
              // onChange={(e) =>
              //   setFieldValue('password', e.target.value)
              // }
              placeholder="Password"
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="w-full items-center flex">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">Remember me</p>
            </div>
            <p className="text-sm font-medium whitespace-nowrap cursor-pointer ubderline underline-offset-2">
              Forget Password?
            </p>
          </div>

          <div className="w-full flex flex-col my-4">
            <button className="w-full text-white bg-[#0b469c] font-semibold my-2 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
              Login
            </button>
          </div>

          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[1px] bg-black/40"></div>
            <p className="text-lg absolute text-black/80 bg-[#f5f5f5]">or</p>
          </div>

          <div className="w-full text-[#0b469c] my-2 bg-white border-1 border-black/40 font-semibold rounded-md p-4 text-center flex items-center justify-center ">
            <div className="h-6 mr-2 flex items-center justify-center cursor-pointer">
              <FaGoogle />
            </div>
            Sign In with Google
          </div>
        </div>
        {/*    )}
           </Formik> */}
        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-black">
            Dont have an account?{' '}
            <span className="font-semibold underline underline-offset-2 cursor-pointer text-[#0b469c]">
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
    //     </ConditionalRoute>
    //   </ConditionalRoute>
    // </ConditionalRoute>
  );
};

export default Login;

// #0b469c

// #46afe0
