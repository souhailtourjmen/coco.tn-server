const checkIsValidFilter = (req, res, next) => {
  const isValid = ["In progress", "Annouce", "Archives"];
  const filter = req?.params?.filter;

  if (filter) {
    if (filter === "undefined") {
      req.params.filter = null;
      next();
    } else if (isValid.includes(filter)) {
      next();
    } else {
      return res
        .status(404)
        .json({ success: false,data:null, message: "filter is invalid" });
    }
  } else {
    next();
  }
};
module.exports = { checkIsValidFilter };
