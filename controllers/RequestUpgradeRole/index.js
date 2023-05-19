const {
  createRequest,
  getRequestById,
  updateStatusRequest,
  updateIsrequired,
  getStatusRequestById,
} = require("../../services");

const createRequestController = async (req, res) => {
  const idProfil = req.auth.idProfil;

  const { _Documents } = req.body;
  try {
    if (!_Documents) {
      return res.status(404).json({
        success: false,
        message: "All fields are required for create Request",
      });
    }
    const { success, data, message } = await createRequest(
      idProfil,
      _Documents
    );

    if (success) {
     const profile= await updateIsrequired(idProfil, true);
      return res
        .status(201)
        .json({ success: success, data: profile, message: message });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const updateStatusRequestController = async (req, res) => {
  const { _status, idRequest } = req.body;
  try {
    if (!_status || !idRequest) {
      return res.status(404).json({
        success: false,
        message: "All fields are required for update ChatRoom",
      });
    }
    const { success, data, message } = await updateStatusRequest(
      _status,
      idRequest
    );

    if (success) {
      return res
        .status(202)
        .json({ success: success, data: data, message: message });
    } else {
      return res
        .status(304)
        .json({ success: success, data: data, message: message });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const getRequestByIdController = async (req, res) => {
  const idRequest = req?.params.idRequest;
  try {
    const { success, data, message } = await getRequestById(idRequest);
    if (success) {
      return res
        .status(200)
        .json({ success: success, data: data, message: message });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const getStatusRequestByIdController = async (req, res) => {
  const idRequest = req?.params.idRequest;
  try {
    const { success, data, message } = await getStatusRequestById(idRequest);
    if (success) {
      return res
        .status(200)
        .json({ success: success, data: data, message: message });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createRequestController,
  updateStatusRequestController,
  getRequestByIdController,
  getStatusRequestByIdController,
};
