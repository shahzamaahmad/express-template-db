const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.getHello = async (req, res, next) => {
  // 1. Get Data Data from collection
  // 2. Build template
  // 3. Render that template
  res.status(200).json({ status: "sucess", data: "hello" });
};
