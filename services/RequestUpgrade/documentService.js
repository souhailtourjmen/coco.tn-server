const { Document } = require("../../models");
const createDocument = async (path,name, type) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!path || !type || !name) {
        return reject({
          success: false,
          message: "All fields are required for create document",
        });
      }
      const newDocument = new Document({
        path: path,
        name:name,
        type: type,
      });

      const savedDocument = await newDocument.save();

      return resolve(savedDocument);
    } catch (error) {
      console.log(error);
      return reject({
        success: false,
        data: null,
        message: "something went wrong, fail to create Document ",
      });
    }
  });
};
const createAllDocuments = async (documents) => {
  try {
    if (!documents) {
      return Promise.reject({
        success: false,
        message: "All fields are required",
      });
    }
    const documentPromises = await documents.map((doc) =>
      createDocument(doc._path, doc._name, doc._type)
    );
    return Promise.all(documentPromises)
      .then((createdDocuments) => {
        return {
          success: true,
          message: "documents created successfully",
          dataDocuments: createdDocuments,
        };
      })
      .catch((error) => {
        return {
          success: false,
          message: "documents created faild ",
          error: error,
        };
      });
  } catch (error) {
    return reject({
      success: false,
      message: "server side error in documents",
      error: error,
    });
  }
};
const getDocumentById = async (idDocument) => {
  const chatDocument = await Document.findById(idDocument)
    .select("path")
    .exec();
  if (!chatDocument) {
    throw new Error("error getting getDocumentById");
  } else {
    return chatDocument;
  }
};
module.exports = {
  createDocument,
  getDocumentById,
  createAllDocuments,
};
