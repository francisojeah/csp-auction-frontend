import { MenuSlice } from "@/store/interfaces/menuSlice.interface";
import { updateMenu } from "@/store/slices/menuSlice";
import { updateSport1, RootState } from "@/store/store";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, useMemo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function AdminNavBar() {
  const { data: session } = useSession();

  const dispatch = useDispatch();

  const router = useRouter();

  const activeMenuItem = useSelector<RootState>((state) => state.menu);

  const { menu } = activeMenuItem as MenuSlice;

  const signOuttt = async () => {
    await router.push("/");
    await signOut();
  };

  const submitt = () => {
    confirmAlert({
      title: "Confirm Log Out",
      message: "Are you sure you want to log out?",
      buttons: [
        {
          label: "Yes",
          onClick: () => signOuttt(),
        },
        {
          label: "No",
          onClick: () => close(),
        },
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
      keyCodeForClose: [8, 32],
      overlayClassName: "overlay-custom-class-name",
    });
  };

  const menus = useMemo(() => {
    return [
      {
        title: "Art Works",
        link: "auctionitems",
      },

      {
        title: "Bids",
        link: "bids",
      },

      {
        title: "Settings",
        link: "settings",
      },
    ];
  }, []);
  useEffect(() => {
    const pathName = router.pathname.split("/");
    const pathTitle = pathName[1];
    const menuTitle = menus.find(
      (menuitem) => menuitem.link === pathTitle
    )?.title;

    const handleMenuItemClick = (menuItem: number) => {
      dispatch(updateMenu(menuItem));
    };

    if (menuTitle && menuTitle !== activeMenuItem) {
      handleMenuItemClick(
        menus.findIndex((menuitem) => menuitem.title === menuTitle)
      );
    }
  }, [router.pathname, menus, activeMenuItem, dispatch]);

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <>
      <nav className="w-screen z-10 top-0 fixed p-6 mb-12 border-b lg:shadow-1 bg-transparent backdrop-blur">
        <div className="container mx-auto flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <Link href="/">
              <div className="font-bold text-xl sm:text-3xl">CSP x YSMA</div>
            </Link>

            <ul className="hidden lg:flex space-x-10 text-lg text-center pl-20">
              {menus.map(({ title, link }, index) => (
                <Link
                  key={index}
                  href={`/${link}`}
                  className={`${
                    menu === index
                      ? "bg-[#0b469c] text-white rounded-md w-32 h-10 transition flex items-center justify-center"
                      : "hover:bg-[#0a3576] hover:text-white rounded-md w-32 h-10 transition flex items-center justify-center"
                  }`}
                >
                  <li>{title}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex pr-8">
            {!session ? (
              <button
                className="px-8 py-3 text-lg whitespace-nowrap bg-[#0b469c] hover:bg-[#0a3576] text-white  rounded-lg transition"
                onClick={() => signIn("google")}
              >
                Login
              </button>
            ) : (
              <button
                className="bg-[#0b469c] px-8 py-3 text-lg whitespace-nowrap hover:bg-[#0a3576] text-white  rounded-lg transition"
                onClick={() => submitt()}
              >
                Log Out
              </button>
            )}
          </div>
          <div className="lg:hidden" onClick={handleClick}>
            {!nav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        </div>

        <ul className={!nav ? "hidden" : "absolute w-full bg-white px-8"}>
          {menus.map(({ title, link }, index) => (
            <Link key={index} href={`/${link}`} onClick={handleClose}>
              <li className="border-b-2 p-4 border-zinc-300 w-full">{title}</li>
            </Link>
          ))}
          <div className="flex flex-col my-4">
            {!session ? (
              <button
                className="bg-[#0b469c] px-8 py-3 text-lg whitespace-nowrap hover:bg-[#0a3576] text-white  rounded-lg transition"
                onClick={() => signIn("google")}
              >
                Sign In
              </button>
            ) : (
              <button
                className="bg-[#0b469c] px-8 py-3 text-lg whitespace-nowrap hover:bg-[#0a3576] text-white  rounded-lg transition"
                onClick={() => submitt()}
              >
                Sign Out
              </button>
            )}
          </div>
        </ul>
      </nav>

      <div className="h-40"></div>
    </>
  );
}

export default AdminNavBar;
