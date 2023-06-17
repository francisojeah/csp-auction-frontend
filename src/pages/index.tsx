import Image from "next/image";
import { Inter } from "next/font/google";
import Login from "./login";
import SignUp from "./signup";
import Homee from "./homee";
import {getArtWorks } from '../pages/api/sheets';
// import AddItem from "@/components/AddItem";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ items }: any) {
  return (
    <main>
      <Homee items={items} />
    </main>
  );
}

export async function getServerSideProps(context: any) {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=300, stale-while-revalidate=360"
  );
  const items = await getArtWorks();
    
  

  return {
    props: {
      items: items.slice(1, items.length),
    },
  };
}

