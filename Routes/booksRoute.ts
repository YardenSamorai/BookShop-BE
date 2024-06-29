import express, { Request, Response, Router } from 'express';
import { books, Book } from '../models/Book';  // Import the array and the Book interface


export const bookRoute = Router();

bookRoute.get('/',(req: Request, res: Response) => {
    res.json({books});
} )

bookRoute.get('/:id',(req: Request, res: Response) => {
    console.log(req.params, req.body, req.query);
} )

bookRoute.post('/',(req: Request, res:Response) => {
    const body = req.body
    console.log(req.params, req.body, req.query);
})
