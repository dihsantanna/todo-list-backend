enum StatusCode {
  OK = 200,
  CREATED,
  ACCEPTED,
  BAD_REQUEST = 400,
  UNAUTHORIZED,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}

export default StatusCode;