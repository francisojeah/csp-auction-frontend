import Adminpage from "./adminpage";
import Homee from "./homee";
import { useSession, signIn, signOut } from "next-auth/react";

type Props = {
  items: any;
};

export default function Home({ items }: Props) {
  const { data: session } = useSession();

  return (
    <main>
      <Homee />
    </main>
  );
}


