//Errors
import createErrorFactory from "../../shared/errors/ErrorFactory.js";

const errorFactory = createErrorFactory();

function createEmail(email) {

  const emailRegularExpresion = /\S+@\S+\.\S+/;
  if (emailRegularExpresion.test(String(email).toLowerCase()) == false) {
    throw errorFactory.invalidDataError("Invalid Email");
  }

  return email;
}

export { createEmail };