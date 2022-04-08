import {Request, Response, NextFunction} from 'express'
import {AnySchema} from 'yup'

import ApiError from '../exceptions/ApiErrorException'

const validateRequest = (schema: AnySchema) => async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    }).catch((errors) => {
      throw new ApiError(errors.toString(), 400)
    })

    next()
  } catch (error: any) {
    next(error)
  }
}

export default validateRequest
