function getStatusCode() {
  const STATUS_CODE = {
    success: 200,
    created: 201,
    bad_resquest: 400,
    not_found: 404,
    server_error: 500,
  };

  return STATUS_CODE;
}

export const STATUS_CODE = getStatusCode();
