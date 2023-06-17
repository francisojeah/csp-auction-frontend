import Homee from "./homee";
import { getArtWorks } from "../pages/api/sheets";

type Props = {
  items: any;
};

export default function Home({ items }: Props) {
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
