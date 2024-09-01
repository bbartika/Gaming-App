const express=require('express')
const router=express.Router()
const moodController=require('../controller/mood')
const userAuthentication=require('../middleware/auth')

// EXPENSE ROUTES

router.post('/add-mood',userAuthentication.authenticate,moodController.addMood)
router.get('/get-mood',userAuthentication.authenticate,moodController.getMood)

router.delete('/delete-mood/:id',userAuthentication.authenticate,moodController.deleteMood)


module.exports=router


