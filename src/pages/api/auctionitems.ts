import clientPromise from '@/lib/mongodb';
import { AuctionItemProps } from '@/store/interfaces/auctionItem.interface';
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'
import { mongooseConnect } from '@/lib/mongoose';
import { AuctionItem } from '@/models/AuctionItem';
import { getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req;

    await mongooseConnect();
    
    const session = await getServerSession(req, res, authOptions);

    if (method === 'GET') {
        if (req.query?._id) {
            res.json(await AuctionItem.findOne({ _id: req.query._id }));
        }
        res.json(await AuctionItem.find());
    }

    if (method === 'POST') {
        const { author, description, title, isOpened, currentBid, minimumBid, bidder, photo }: AuctionItemProps = req.body;

        const auctionItemDoc = await AuctionItem.create({
            author, description, title, isOpened, currentBid, minimumBid, bidder, photo
        })
        res.json(auctionItemDoc);
    }

    if (method === 'PUT') {
        const { author, description, title, isOpened, currentBid, minimumBid, bidder, photo, _id }: any = req.body;

        await AuctionItem.updateOne({ _id }, {
            author, description, title, isOpened, currentBid, minimumBid, bidder, photo
        })
        res.json(true);
    }


    if (method === 'DELETE') {
        if (req.query?._id) {
            await AuctionItem.deleteOne({ _id: req.query._id });
        }
        res.json(true);
    }

}
