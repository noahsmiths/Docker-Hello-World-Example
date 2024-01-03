import express, { Request, Response, Express } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send("Hello from Docker!");
});

app.listen(port, () => {
    console.log(`Server is now listening on port ${port}`);
});
