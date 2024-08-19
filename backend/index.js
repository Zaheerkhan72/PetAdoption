const express = require('express');

const UserRouter = require('./routers/userRouter')
const petRouter = require('./routers/petRouter')
const cors = require('cors');

// initialize express
const app = express();

const port = 5000;

// middleware

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json());

app.use('/user', UserRouter);
app.use('/pet', petRouter);

// route or endpoint
app.get('/', (req, res) => {
    res.send('Response from express');
});

// add
app.get('/add', (req, res) => {
    res.send('Response from add');
})

// getall
// update
// delete

app.listen(port, () => {
    console.log('server started');
});