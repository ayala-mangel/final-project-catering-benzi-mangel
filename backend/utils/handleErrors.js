const handleError = (res, status = 404, message = "page not found") => {
  console.log(message);
  return res.status(status).send(message);
};

exports.handleError = handleError;
