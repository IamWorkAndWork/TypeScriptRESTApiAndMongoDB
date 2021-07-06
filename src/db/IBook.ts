import * as mongoose from "mongoose";

export interface IBook extends mongoose.Document {
    title: string;
    author: number;
}