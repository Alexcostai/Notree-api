import createErrorFactory from "../../shared/errors/ErrorFactory.js";

/**
 * Note
 * userId: string
 * title?: string
 * content?: string
 * createdAt: timestamp
 * color?: string
 */

const errorFactory = createErrorFactory();

function createNote(data) {
  const note = {};

  if (!data.userId) {
    throw errorFactory.invalidDataError("There is no user id");
  } else {
    note.userId = data.userId;
  }

  if (!data.title && !data.content) {
    throw errorFactory.invalidDataError("There is no title and no content");
  }

  if (data.title) {
    note.title = data.title;
  } else {
    note.title = '';
  }

  if (data.content) {
    note.content = data.content;
  } else {
    note.content = '';
  }

  if (data.color) {
    note.color = data.color;
  }

  if (data.id) {
    note.id = data.id;
  }

  note.createdAt = new Date();

  return note;
}

export { createNote };
