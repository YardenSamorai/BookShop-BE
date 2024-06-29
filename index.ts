// const { Books, Book } = require('./models/Book');
import express, { Request, Response } from 'express';
import { bookRoute } from './Routes/booksRoute';
const app = express();
const port = 3001;

app.use(express.json());
app.use("/books", bookRoute);

app.get("/", (req: Request, res: Response) => {
    res.send("welcome to the book shop");
})


app.listen(port, () => {
    console.log(`The server is running and listning on port ${port}`);
});
