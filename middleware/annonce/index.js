const checkIsValidFilter = (req, res, next) => {
  const isValid = ["in progress", "Colis", "archives"];
  const filter = req?.params?.filter;
  console.log(filter);
  if (!filter) {
    return res
      .status(404)
      .json({ successful: false, message: "filter is required" });
  }
  if (isValid.includes(filter)) {
    next();
  }

 
};
module.exports = { checkIsValidFilter };