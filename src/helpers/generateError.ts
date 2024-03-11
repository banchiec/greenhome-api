const generateError = (message: any, status: any) => {
  const error: any = new Error(message)
  error.statusCode = status
  return error
}

module.exports = generateError
