export class UserNotFoundException extends Error {
  constructor(message?: string) {
    super(message || 'User not found')

    Object.setPrototypeOf(this, UserNotFoundException.prototype)
  }
}