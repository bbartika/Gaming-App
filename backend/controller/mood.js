const Mood=require('../models/mood')
const User=require('../models/user')


exports.addMood=async(req,res)=>{
    const user=req.user
    const userId=req.user._id
    
    try{
        const { mood, notes } = req.body;

        const newMood = new Mood({
            user: userId,
            mood,
            notes,
        });

        const moodEntry = await newMood.save();
        res.json(moodEntry);

    }catch(err){

        res.status(500).json({error:err})
    }

}

exports.getMood=async (req,res)=>{
    try {
        
          const moods = await Mood.find({ user: req.user._id }).sort({ date: -1 });
          res.json(moods);
        
        
      } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve courses' });
      }
    }


exports.deleteMood=async(req,res)=>{
    try{
        const user=req.user
        const id=req.params.id

        const mood = await Mood.findById(id);

        if (!mood) return res.status(404).json({ message: 'Mood entry not found' });

        if (mood.user.toString() !== req.user._id.toString()) {
           
            return res.status(401).json({ message: 'Unauthorized' });
        
        }
        await mood.remove();
        
        res.json({ message: 'Mood entry removed' });
    
        
    }catch(err){
        res.status(500).json({error:err})
    }

}


