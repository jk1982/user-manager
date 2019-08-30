import express from 'express';
import Routes from './Routes';
import bodyParser from 'body-parser';

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = new Routes(app);

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
