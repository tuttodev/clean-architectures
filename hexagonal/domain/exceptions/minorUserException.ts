export class MinorUserException extends Error {
  constructor(message?: string) {
    super(message || 'The user is minor age')

    Object.setPrototypeOf(this, MinorUserException.prototype)
  }
}