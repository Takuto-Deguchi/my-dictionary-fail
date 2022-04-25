import knex from "../database/main"
const express = require('express');
const router = express.Router();

// const axios = require('axios');

router.get('/test', async(req, res, next) => {
   try {
       const data=await knex('table_name').select('*')
       console.log(data)
       res.status(200).end()
   } catch (error) {
       console.log(error)
   }
})


module.exports = router