const Resource=require('../models/resource')
const User=require('../models/user')



exports.addResource=async(req,res)=>{
    const user=req.user
    const userId=req.user._id
    
    try{
        const { title, description, link } = req.body;

        
        const newResource = new Resource({
            user: userId,
            title,
            description,
            link,
        });
    
        const resource = await newResource.save();
        res.status(201).json(resource);
    }
    catch(err){

        res.status(500).json({error:err})
    }

}

exports.getResource=async(req,res)=>{
    const user=req.user
    const userId=req.user._id
    
    try{

        const resources = await Resource.find({ user: userId }).sort({ createdAt: -1 });
        res.json(resources);
       
        
    }catch(err){

        res.status(500).json({error:err})
    }

}

exports.getSpecificResource=async(req,res)=>{
    
    
    try {
        const resource = await Resource.findById(req.params.id);

        if (!resource) {
            return res.status(404).json({ message: 'Resource not found' });
        }

        if (resource.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Access denied' });
        }

        res.json(resource);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}








