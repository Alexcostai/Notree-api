function createNoteNotFoundError(message) {
    const error = new Error(message);
    error.type = 'NOTE_NOT_FOUND_ERROR'
    return error
  }
  
  export { createNoteNotFoundError }