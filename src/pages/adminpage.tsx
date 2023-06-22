import AdminNavBar from "@/components/AdminNavBar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Adminpage() {
  const { data: session }:any = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session !== null) {
      if (!session) {
        router.push("/");
      } else if (session?.user?.role !== "admin") {
        router.push("/");
      }
    }
  }, [session, router]);
  return <AdminNavBar />;
}

export default Adminpage;
