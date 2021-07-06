import { Request, Response } from "express";
import Book from "../db/book";

export let allBooks = (req: Request, res: Response) => {
    Book.find((err: any, books: any) => {
        if (err) {
            res.send("Error!")
        }
        else {
            res.send(books)
        }
    })
}

export let getBook = (req: Request, res: Response) => {
    Book.findById(req.params.id, (err: any, book: any) => {
        if (err) {
            res.send({
                status: "error",
                message: err
            })
        }
        else {
            if (book) {
                res.send({
                    status: 'ok',
                    item: book
                })
            }
            else {
                res.send({
                    status: 'ok',
                    message: "book not found"
                })
            }

        }
    })
}

export let deleteBook = (req: Request, res: Response) => {
    Book.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send({
                status: 'ok',
                message: "Successfully Deleted Book"
            })
        }
    })
}

export let updateBook = (req: Request, res: Response) => {
    console.log("update book : " + req.params.id)
    Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err: any, book: any) => {
            if (err) {
                res.send(err)
            }
            else {
                if (book){
                    res.send({
                        status: 'ok',
                        message: "Successfully updated book!",
                        item: book
                    })
                }
                else{
                    res.send({
                        status: 'ok',
                        message: "book not exist to update!",
                    })
                }
            }
        }
    )
}

export let addBook = (req: Request, res: Response) => {
    let book = new Book(req.body)

    book.save((err: any) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(book)
        }
    })
}