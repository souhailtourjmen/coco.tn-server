const Image = require("../../models/image");
const createImage = async (image) => {
    return new Promise(async(resolve, reject) => {
    try {
        const { _path , _thumbnail   } = image;

        if (!_path || !_thumbnail  ) {
        return reject({ success: false, message: "All fields are required" });
        }
        const newimage=new Image({
            path:_path,
            thumbnail:_thumbnail
          })
      
          const savedImage = await newimage.save();

    return resolve(newimage) ;

  } catch (error) {
    console.log(error);
    return reject( {
      success: false,
      message: "something went wrong, fail to create proposition",
    });
  }
});
};

const createAllImage =async(images)=>{
    try {
    if (!images) {
        return Promise.reject({
        success: false,
        message: 'All fields are required'
        });
    }   
    const imagePromises =await images.map(image => createImage(image));
    return Promise.all(imagePromises)
    .then(createdimages => {
      return {
        success: true,
        message: 'images created successfully',
        dataImages: createdimages
      };
    })
    .catch(error => {
        return {
          success: false,
          message: 'images created faild ',
          error: error
        };
    });
    } catch (error) {
        return reject({
          success: false,
          message: "server side error",
          error: error,
        });
      }
}
module.exports = {
    createImage,
    createAllImage,
};
