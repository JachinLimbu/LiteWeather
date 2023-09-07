const {Router} = require('express')
const controller =require('../controllers/main.js')


const router = Router()

router.get('/', controller.check)

module.exports = router