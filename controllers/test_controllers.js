const User = require("../models/user");
const Role = require("../models/role");
test= async(req, res, next) =>{
    try {
      User= {
          cin:"123",
          nom:"souhail",
          prenom:"souhail",
          address:{
            address:"djerba"
          },
          tel:"123",
          gender:"0",
          email:"souhail5@gmail.com",
          mdp:"5655456"

      }
      await res.status(200).json({message :User});
    } catch (error) {
      next(error)
    }
} 
const createUser = async (req, res) => {
  try {
    let roles=["annonceur","admin"];
    const rolesFound = await Role.find({ role: { $in: roles } });
    const user = new User({
      cin:"123",
      nom:"souhail",
      prenom:"souhail",
      addresses:[{
        address:"djerba"
      }],
      tel:"123",
      gender:"0",
      email:"soudws@dasil.com",
      password:"5655456",
      roles:rolesFound.map((role) => role._id),
      verified:{},
    });
  
    const savedUser = await user.save();
    
    let mdpt={mdpdklm:await user.checkPassword("5655456")}
    
    return  res.status(201).json({
      success: true,
      mdpt,
      data: {
        user,
        rolesFound
      },
    });
  } catch (error) {
    console.log(error);
    
    return res.status(500).json({
      success: false,
      message: "something went wrong, fail to create user ",

    });
  }
};
const getUserById = async (req, res) => {
  try {
    console.log(req.params.id);
    const user = await User.findById(req.params.id, { password: 0 }).populate(
      "roles"
    );

    return user ? res.status(200).json({ successful: true, data: user }):res.status(401).json({ successful: false ,id:req.params.id });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
module.exports ={test , createUser,getUserById};