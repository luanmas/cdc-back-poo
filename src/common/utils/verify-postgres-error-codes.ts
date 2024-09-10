interface IResponseErrorCode {
  message: string[];
  error: string;
  statusCode: number;
}

export function verifyPostgresErrorCode(
  error: string,
  details: string,
): IResponseErrorCode {
  const codes = {
    '23505': {
      message: [details],
      error: 'Bad Request',
      statusCode: 400,
    },
  };

  const defaultRespondeErrorCode: IResponseErrorCode = {
    message: ['Ocorreu um erro na comunicação com o servidor'],
    error: 'Internal Server Error',
    statusCode: 500,
  };

  return codes[error] || defaultRespondeErrorCode;
}
