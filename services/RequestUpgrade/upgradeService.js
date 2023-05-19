const { RequestUpgradeRole } = require("../../models");
const { createAllDocuments } = require("./documentService");
const createRequest = async (_idProfil, _documents) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(_documents);
      if (!_idProfil || !_documents) {
        return reject({
          success: false,
          message: "All fields are required for create request",
        });
      }
      const { dataDocuments } = await createAllDocuments(_documents);
      const newRequest = new RequestUpgradeRole({
        idProfil: _idProfil,
        idDocuments: dataDocuments.map((doc) => doc._id),
        status: [
          {
            _status: "In progress",
          },
        ],
      });

      const savedRequest = await newRequest.save();
      return resolve({
        success: true,
        data: savedRequest,
        message: "create request upgrade role",
      });
    } catch (error) {
      console.log(error);
      return reject({
        success: false,
        data: null,
        message: "something went wrong, fail to create request upgrade role",
      });
    }
  });
};
const updateStatusRequest = async (status, idRequest) => {
  try {
    /* check duplcate colis */
    const request = await RequestUpgradeRole.findByIdAndUpdate(
      idRequest,
      {
        $push: {
          status: {
            _status: status,
            updatedAt: new Date(),
          },
        },
      },
      { new: true }
    );
    if (request) {
      return {
        success: true,
        data: request,
        message: "request updated successfully.",
      };
    } else {
      return {
        success: false,
        data: null,
        message: "request updated failed.",
      };
    }
    /* end dplicate  */
  } catch (error) {
    console.log(error);
    return {
      success: false,
      data: null,
      message: "something went wrong, fail to catch service update request",
    };
  }
};
const getRequestById = async (idRequest) => {
  const getRequest = await RequestUpgradeRole.findById(idRequest)
    .populate({
      path: "idDocument idProfil",
      select: "_id  path user",
      populate: {
        path: "user",
        select: " -_id name email phone role  verified", // select only the lastName firstName email phone and verified fields in profil
        populate: {
          path: "role ",
          select: "_id role",
        },
      },
    })
    .select("idProfil idDocument")
    .exec();
  if (!getRequest) {
    throw new Error("error getting getRequestById");
  } else {
    return {
      success: true,
      data: getRequest,
      message: "get Request successfully.",
    };
  }
};
const getStatusRequestById = async (idRequest) => {
  const getRequest = await RequestUpgradeRole.findById(idRequest)
    .select("status")
    .exec();
  if (!getRequest) {
    throw new Error("error getting getStatusById");
  } else {
    return {
      success: true,
      data: getRequest,
      message: "get status successfully.",
    };
  }
};
module.exports = {
  createRequest,
  getRequestById,
  updateStatusRequest,
  getStatusRequestById,
};
