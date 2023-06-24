// import { Server as SocketIOServer, Socket } from 'socket.io';
// import { MongoClient, ChangeStream } from 'mongodb';
// import { NextApiRequest, NextApiResponse } from 'next';
// import { mongooseConnect } from '@/lib/mongoose';
// import { AuctionItem } from '@/models/AuctionItem';
// import { ChangeEvent } from 'react';
// import { AuctionItemProps } from '@/store/interfaces/auctionItem.interface';

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {

//     try {
//         await mongooseConnect();

//         const io = new SocketIOServer({
//             transports: ['websocket'],
//         }
//         );
//         io.attach(req.socket as unknown as Socket);

//         const changeStream: ChangeStream = AuctionItem.watch();

//         changeStream.on('change', (change: ChangeEvent<AuctionItemProps>) => {
//             if (change.operationType === 'insert' || change.operationType === 'update') {
//                 const updatedDocument = change.fullDocument; // Access fullDocument property when available

//                 // Emit the updated data to connected clients
//                 io.emit('data-updated', updatedDocument);
//             }
//         });

//         res.status(200).json({ message: 'Real-time updates enabled' });
//     } catch (error) {
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }