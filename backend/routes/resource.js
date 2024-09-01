const express=require('express')
const router=express.Router()
const resourceController=require('../controller/resource')
const userAuthentication=require('../middleware/auth')

// EXPENSE ROUTES

router.post('/add-resource',userAuthentication.authenticate,resourceController.addResource)
router.get('/get-resource',userAuthentication.authenticate,resourceController.getResource)

router.get('/get-resource/:id',userAuthentication.authenticate,resourceController.getSpecificResource)


router.delete('/delete-mood/:id',userAuthentication.authenticate,courseController.deleteMood)


module.exports=router
