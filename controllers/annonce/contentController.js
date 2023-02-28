const Content =require("../../models/content")



const getAllContents = async (req, res)  => {

    try {
        const contents = await Content.find();
        return res.status(200).json(contents);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error });
      }

}
const getContentById = async (req, res) => {
    try {
      if (! req.body.idContent) {
          return res.status(404).json({ message: 'All fields are required' })
      }

      const contentFound = await Content.findById(req.body.idContent).populate("images")

      if (!contentFound) {
          return res.status(404).json({ success: false, message: "Content not found" })
      }
      return res.status(200).json({ successful: true, data:contentFound});
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: error.message });
    }
  };
  

  const deleteContentById = async (req, res) => {
    try {
        if (!req.body.idContent ) {
            return res.status(404).json({ message: 'All fields are required' })
        }
    const contentFound = await Content.findByID(req.body.idContent);
    if (!contentFound  ) {
        return res
          .status(404)
          .json({ success: false, message: "Content  not found" });
      }
      const content = await Content.deleteOne({
        _id: req.body.idContent
      });
  
      return res.status(200).json({ successful: true, data: content, message: `Content delete successfully`, });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false,message: "server side error" });
    }
  };

  module.exports = {

    getAllContents,
    getContentById,
    deleteContentById

 };