import { AuctionItemProps } from "@/store/interfaces/auctionItem.interface";
import Link from "next/link";
import AuctionItemTile from "./AuctionItemTile";

type Props = {
  items: any;
};

const AutionItemList: React.FC<Props> = ({ items }) => {
  return (
    <section className="mb-20" id="auction">
      <div className="container mx-auto">
        <div className="p-10 font-bold text-[#0b469c] text-2xl lg:text-4xl text-center">
          CSP x YSMA Silent Art Auction{" "}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {items &&
            items.map((item: any, index: any) => (
              <Link href={`/auctionitem?id=${index + 1}`} key={index}>
                <AuctionItemTile
                  key={index}
                  title={item.title}
                  photo={item.photo}
                  author={item.author}
                  minimumBid={item.minimumBid}
                  currentBid={item.currentBid}
                  isClosed={item.isClosed}
                />
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AutionItemList;
