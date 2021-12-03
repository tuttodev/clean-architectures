import { User } from "../entities/User";
import { UserNotFoundException } from "../exceptions/userNotFoundException";
import { UserRepository } from "../repositories/UserRepository";

export class UserFinder {
  private _userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository
  }

  async run(userId: string): Promise<User> {
    const user: User = await this._userRepository.getById(userId)
    
    if (!user)
      throw new UserNotFoundException()

    return user
  }
}
