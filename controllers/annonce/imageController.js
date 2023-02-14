const Image =require("../../models/image")

const getAllImages = async (req, res)  => {

    try {
        const images = await Image.find();
        return res.status(200).json(images);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error });
      }

}
const getImageById = async (req, res) => {
    try {
      if (! req.body.idImage) {
          return res.status(404).json({ message: 'All fields are required' })
      }

      const imageFound = await Image.findById(req.body.idImage)

      if (!imageFound) {
          return res.status(404).json({ success: false, message: "image not found" })
      }
      return res.status(200).json({ successful: true, data:imageFound});
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: error.message });
    }
  };
  
const createImage =async (req, res) => {
    try {
      const { path , thumbnail   } = req.body;

      if (!path || !thumbnail  ) {
        return res.status(404).json({ message: 'All fields are required' })
    }

    
    const image=new Image({
      path:path,
      thumbnail:thumbnail
    })

    const savedImage = await image.save();
  
      return res.status(201).json({
        success: true,
        data: {
            image,
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "something went wrong, fail to create proposition",
      });
    }
  };
  const deleteImageById = async (req, res) => {
    try {
        if (!req.body.idImage ) {
            return res.status(404).json({ message: 'All fields are required' })
        }
    const ImageFound = await Image.findByID(req.body.idImage);
    if (!ImageFound  ) {
        return res
          .status(404)
          .json({ success: false, message: "image  not found" });
      }
      const image = await Image.deleteOne({
        _id: req.body.idImage
      });
  
      return res.status(200).json({ successful: true, data: image , message: `image delete successfully`, });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false,message: "server side error" });
    }
  };

  module.exports = {

    getAllImages,
    getImageById,
    createImage,
    deleteImageById

 };