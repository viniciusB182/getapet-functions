const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});

const PORT = process.env.PORT || 5000

var app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/account', async (req, res) => {
    try {
        const client = await pool.connect()
        const result = await client.query('SELECT * FROM ACCOUNT');
        res.send(result.rows);
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`))