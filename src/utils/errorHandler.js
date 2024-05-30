const handleErrors = (res, statusCode, message) => {
  res.status(statusCode).json({ message });
};

export default handleErrors;
