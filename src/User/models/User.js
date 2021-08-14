//Errors
import createErrorFactory from "../../shared/errors/ErrorFactory.js";
//Moldes
import { createEmail } from "./Email.js";

/**
 * User
 * name: string
 * lastName: string
 * email: string
 * password: string
 * avatar?: string --- IN COMMING...
 */

const errorFactory = createErrorFactory();

function createUser(data) {
  const user = {};

  if (!data.name) {
    throw errorFactory.invalidDataError("Missing name");
  } else {
    user.name = data.name;
  }

  if (!data.lastName) {
    throw errorFactory.invalidDataError("Missing last name");
  } else {
    user.lastName = data.lastName;
  }

  if (!data.email) {
    throw errorFactory.invalidDataError("Missing email");
  }
  user.email = createEmail(data.email);

  if (!data.password) {
    throw errorFactory.invalidDataError("Missing password");
  } else {
    user.password = data.password;
  }

  if(data.phone) {
    user.phone = data.phone;
  }

  return user;
}

export { createUser };