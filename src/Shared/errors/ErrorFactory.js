import { createDataBaseError } from "./DataBaseError.js";
import { createInvalidDataError } from "./InvalidDataError.js";
import { createUserNotFoundError } from "./UserNotFoundError.js";
import { createNoTokenProvidedError } from "./NoTokenProvided.js";
import { createDuplicateUserError } from "./DuplicateUserError.js";

function createErrorFactory() {
  return {
    dataBaseError: (message) => {
      return createDataBaseError(message);
    },
    invalidDataError: (message) => {
      return createInvalidDataError(message);
    },
    userNotFoundError: (message) => {
      return createUserNotFoundError(message);
    },
    duplicateUserError: (message) => {
      return createDuplicateUserError(message);
    },
    noTokenProvided: () => {
      return createNoTokenProvidedError();
    }
  };
}

export default createErrorFactory;
