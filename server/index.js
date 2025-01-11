import express from "express";
import cookieParser from 'cookie-parser';

const PORT = 80;

const app = express();
app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});