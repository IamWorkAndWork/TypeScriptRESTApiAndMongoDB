import mongoose from "mongoose";
import { IBook } from "./IBook";

const uri: string = "mongodb://127.0.0.1:27017/local"

mongoose.connect(uri, (err: any) => {

    if (err) {
        console.log("mongodb status error : " + err.message)
    }
    else {
        console.log("mongodb status successfully connected!")
    }

})


export const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
})

const Book = mongoose.model<IBook>("Book", BookSchema)

export default Book