const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "paula",
  host: "localhost",
  database: "users",
  password: "paula123",
  port: "5432"
});

app.use(cors());
app.options('*', cors());

app.get('/currency', (req, res) => {
    var htmlString = "";
    var cadRate = "";
    var usdRate = "";

    cadRate += "<p>CAD's exchange rate is: $" + data.rates.CAD + ".";
    usdRate += "<p>USD's exchange rate is: $" + data.rates.USD + ".";
    htmlString = cadRate + "<br>" + usdRate;

    currencyContainer.insertAdjacentHTML('beforeend', htmlString)
    res.send(htmlString)

});

app.get('/validate', (req, res) => {

    if (req.query.email && req.query.phone){
        pool.query(
            "INSERT INTO users(email, phoneno)VALUES($1, $2)",
            [req.query.email, req.query.phone],
            (err, res) => {
              console.log(err, res);
              pool.end();
            }
          );
        res.send(true);
    } else {
        res.send(false);
    }
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`));