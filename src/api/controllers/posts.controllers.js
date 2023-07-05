const Post = require("../models/post.model");

// get all the posts
const getPosts = async (req, res)=>{
    try {
        const all = await Post.find();  
        //res.send("estoy en get cinemas")

      
        
        if (all.length === 0){
            res.send("No existen post a mostrar")
        }
        return res.status(200).json(all);
    } catch (error) {
        return res.status(500).json({message:`error de servidor ${error}`});
    }
}

const postPosts = async (req, res)=>{
    try {
        const newpost = new Post(req.body);
        const createpost = await newpost.save();
        if (!res.status(201)){
            res.send({message:"No se ha creado bien el post"})
        }
        return res.status(201).json(createpost);
    } catch (error) {
        return res.status(500).json({message:`error de servidor ${error}`});
    }
}








module.exports = {getPosts,postPosts};