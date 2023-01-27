test= async(req, res, next) =>{
    try {
      await res.status(200).json({message :"succss test"});
    } catch (error) {
      next(error)
    }
} 
module.exports =test;