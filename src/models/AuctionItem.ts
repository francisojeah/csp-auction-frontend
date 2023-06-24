import { model, Schema, models } from "mongoose";
const AuctionItemSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    photo: String,
    description: String,
    minimumBid: { type: Number, required: true },
    currentBid: Number,
    bidder: String,
    bidderPhone: String,
    bidderName: String,
    isOpened: { type: Boolean, required: true },
});

export const AuctionItem = models.AuctionItem || model('AuctionItem', AuctionItemSchema);