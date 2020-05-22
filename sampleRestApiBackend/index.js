const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/check', (req, res) => {
    if (req.query.checkParam == 'Foo' || req.query.checkParam == 'Bar'){
        res.send(true);
    } else {
        res.send(false);
    }
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`));