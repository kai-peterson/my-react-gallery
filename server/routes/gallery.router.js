const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    const likes = req.body.likes;
    const id = req.params.id;
    const queryText = `UPDATE gallery SET likes=$1 WHERE id=$2`;
    pool.query(queryText, [likes, id])
        .then( (result) => {
            res.sendStatus(201)
        })
        .catch( (error) => {
            res.sendStatus(500);
        })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM gallery ORDER BY id`;
    pool.query(queryText)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            res.sendStatus(500);
        })
}); // END GET Route

// POST Route
router.post('/', (req, res) => {
    const queryText = `INSERT INTO gallery (path, description, likes) VALUES ($1, $2, 0)`;
    pool.query(queryText, [req.body.url, req.body.description])
        .then( (result) => {
            res.sendStatus(200);
        })
        .catch( (error) => {
            res.sendStatus(501);
        })
}); // END POST Route

// POST Route
router.delete('/:id', (req, res) => {
    const queryText = `DELETE FROM gallery WHERE id=$1`;
    pool.query(queryText, [req.params.id])
        .then( (result) => {
            res.sendStatus(200);
        })
        .catch( (error) => {
            res.sendStatus(501);
        })
}); // END GET Route

module.exports = router;