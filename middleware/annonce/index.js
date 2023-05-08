
const checkIsValidFilter = (req, res, next) => {
  const isValid = ["in progress", "Colis", "archives"];
  console.log(req?.params)
  const filter =req?.params?.filter
  if (!filter) {
    res
      .status(404)
      .json({ successful: false, message: "filter is required" });
  }
  if (!isValid.includes(filter)) {
    res
      .status(404)
      .json({ successful: false, message: "Not found, invalid filter" });
  }

  next();
};
module.exports = {checkIsValidFilter};
