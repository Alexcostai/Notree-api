function createNoTokenProvidedError() {
    const error = new Error("No token provided");
    error.type = 'NO_TOKEN_PROVIDED'
    return error
  }
  
  export { createNoTokenProvidedError }