import { ErrorRequestHandler } from "express";
import { ValidationError } from "yup";

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    const errors: { [key: string]: string[] } = {};

    error.inner.forEach(err => {
      errors[err.path as string] = err.errors;
    });

    return response.status(400).json({ message: 'Validation fails.', errors });
  }

  console.error(error);

  return response.status(500).json({ message: 'Internal server error.' });
};

export default errorHandler;