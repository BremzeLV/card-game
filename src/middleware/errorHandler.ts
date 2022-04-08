import {Request, Response, NextFunction} from 'express'
import {ValidationError} from 'yup'

import ApiError from '../exceptions/ApiErrorException'

function errorHandler(
    err: ApiError,
    req: Request,
    res: Response,
    next: NextFunction,
) {
  let apiError = err

  if (!(err instanceof ApiError)) {
    apiError = new ApiError('Unknown server error')
  }

  res.status((apiError as ApiError).status).json(apiError)
};

export type ErrorType = TypeError | ApiError | ValidationError

export default errorHandler
