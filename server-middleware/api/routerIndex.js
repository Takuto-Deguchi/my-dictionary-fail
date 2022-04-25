// import knex from "../database/main"
const express = require('express');
const router = express.Router();

// const axios = require('axios');

router.get('/test',(req, res, next) => {
//    try {
//        const data=await knex('table_name').select('*')
//        console.log(data)
//        res.status(200).json({ok:true,body:data})
//    } catch (error) {
//        console.log(error)
//    }
       res.status(200).json({ok:true,body:{test:"test"}})

})


module.exports = router