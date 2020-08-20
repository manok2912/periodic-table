const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const element = require('./routes/element')

const app = express();
const port = 3000;


app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/element', element);

app.get('/', (req, res) => {
    res.json({name : "A periodic-table api", wetsite : "nil"})
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));