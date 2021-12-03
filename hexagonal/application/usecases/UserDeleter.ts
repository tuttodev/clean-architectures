import { User } from "../../domain/entities/User";
import { Notifier } from "../../domain/repositories/Notifier";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { UserNotFoundException } from '../../domain/exceptions/userNotFoundException'
import { UserFinder } from "../../domain/services/userFinder";

export class UserDeleter {
  private _userRepository: UserRepository
  private _notifier: Notifier
  private _userFinder: UserFinder

  constructor(userRepository: UserRepository, notifier: Notifier){
    this._userRepository = userRepository
    this._notifier = notifier
    this._userFinder = new UserFinder(userRepository)
  }

  async run(userId: string): Promise<User> {
    const user: User = await this._userFinder.run(userId)

    await this._userRepository.delete(userId);

    this._notifier.notify({
      name: user.name,
      id: user.id
    })

    return user
  }
}