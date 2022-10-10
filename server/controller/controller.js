const bcrypt = require('bcrypt');
const User = require('../model/schema');
const { use } = require('../router/router');
const jwt = require('jsonwebtoken');


exports.registerUser = async(req,res) =>{
    try{
        if(!req.body){
            res.status(406).json({err:"You have to fill the Register form"});
            return;
        }
        let {email,password,passwordCheck,username} = req.body
        if(!email || !password || !passwordCheck)
            return res.status(406).json({err: "Not all fields have been entered"})
        if(password.length<8)
            return res.status(406).json({err: "The Password length Must be 8 charactor"})
        if(password!==passwordCheck)
            res.status(406).json({err:"Password Must be same"})

        
        const hash = await bcrypt.hashSync(password,10);

        const newUser = new User({
            email,
            password: hash,
            username
        })
        newUser
            .save(newUser)
            .then(register=>{
                res.json(register);
            })
            .catch(error=>{
                res.status(406).json({err: error.message|| "Something error While Register"});
            })
        // res.json({email,hash,passwordCheck,username});
    }
    catch(error){
        res.status(500).json({ err : error.message || "Error While Registeration" })
    }
};

exports.login = async (req,res) =>{
    try{
        if(!req.body){
            res.status(406).json({err:"You have to fill the Register form"});
            return;
        }

        const {email,password} = req.body

        if(!email || !password){
            return res.status(406).json({err:"Not all fields have been entered"})
        }

        const user = await User.findOne({ email });
        if(!user)
            return res.status(406).json({err: "No Account With this Email."});


        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(406).json({err:"Invalid Creditials"});

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET);

        res.json({token,username:user.username,email:user.email });

    }
    catch(error){
        res.status(500).json({err: error.message || "Error While Login"})
    }
};


exports.delete = async (req,res) =>{
    try {
        await User.findByIdAndDelete(req.user_id);
        res.json({msg : "User Deleting User"});
        
    } catch (error) {
        res.status(500).json({err:error.message || "Error while Deleting User"});
    }

};