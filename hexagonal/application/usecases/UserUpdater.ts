import { User } from "../../domain/entities/User";
import { Notifier } from "../../domain/repositories/Notifier";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { UserFinder } from "../../domain/services/userFinder";

export class UserUpdater {
  private _userRepository: UserRepository
  private _notifier: Notifier
  private _userFinder: UserFinder

  constructor(userRepository: UserRepository, notifier: Notifier){
    this._userRepository = userRepository
    this._notifier = notifier
    this._userFinder = new UserFinder(userRepository)
  }

  async run({ id, name, age }: { id: string, name: string, age: number }): Promise<User> {
    const user: User = await this._userFinder.run(id)

    const userToUpdate = new User({ id, name, age })
    await this._userRepository.update(userToUpdate);

    this._notifier.notify({
      name: user.name
    })

    return user
  }
}