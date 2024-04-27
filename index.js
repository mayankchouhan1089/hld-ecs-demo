import express from 'express'

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Congratulations, Showing ECS demo');
});

app.get('/health', (req, res) => {
    console.log('App is healthy');;
    res.status(200).send('App is healthy');
});

app.listen(port, () => {
    console.log(`ECS demo app Listening at ${port}`);
});