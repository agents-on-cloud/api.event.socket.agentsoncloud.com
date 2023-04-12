var express = require('express');
var router = express.Router();
const knex = require("../config/database");

/* GET home page. */
router.get('/', async function (req, res, next) {
  // = knex({ workspace: 'table' }).select("*")

  // let x = await knex.select('*').from('AGE_MT_Workspace')
  // console.log(x)
  // res.status(200).json({ x });
});

module.exports = router; knex
