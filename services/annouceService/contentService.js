const Content = require("../../models/content");
const { createAllImage } = require("../imageService/imageService");
const createContent = async (content) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { name, width, length, height, weight, images } = content;

      if (!name || !width || !length || !height || !weight) {
        return reject({
          success: false,
          message: "content All fields are required",
        });
      }
      /* block  create list  images  */
      const { dataImages } = images ? await createAllImage(images) : null;
      /* end block list images */
      const newcontent = new Content({
        name: name,
        width: width,
        length: length,
        height: height,
        weight: weight,
        images: dataImages.map((image) => image._id) || null,
      });

      const savedcontent = await newcontent.save();

      return resolve(newcontent);
    } catch (error) {
      console.log(error);
      return reject({
        success: false,
        message: "something went wrong, fail to create proposition",
      });
    }
  });
};

const createAllContent = async (contents) => {
  try {
    if (!contents) {
      return Promise.reject({
        success: false,
        message: "All fields are required",
      });
    }
    const contentPromises = await contents.map((content) =>
      createContent(content)
    );
    return Promise.all(contentPromises)
      .then((createdContents) => {
        return {
          success: true,
          message: "Contents created successfully",
          dataContent: createdContents,
        };
      })
      .catch((error) => {
        console.log(error);
        return {
          success: false,
          message: "Contents created faild ",
          error: error,
        };
      });
  } catch (error) {
    return reject({
      success: false,
      message: "server side error",
      error: error,
    });
  }
};
const deleteContentByArray = async (contents) => {
  if (!contents) {
    return { success: false, message: "All fields are required" };
  }
  return new Promise(async (resolve, reject) => {
    try {
      const promisesDeleteContent = await contents.forEach(async (content) => {
        await Content.deleteOne({
          _id: content._id,
        });
      });
      return resolve({
        success: true,
        message: "Contents delete successfully",
      });
    } catch (error) {
      return reject({
        success: false,
        message: "server side error",
        error: error,
      });
    }
  });
};
module.exports = {
  createContent,
  createAllContent,
  deleteContentByArray,
};
