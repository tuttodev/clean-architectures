import { User } from "../../domain/entities/User"
import { UserRepository } from "../../domain/repositories/UserRepository"
import { MinorUserException } from '../../domain/exceptions/minorUserException'
import { Notifier } from "../../domain/repositories/Notifier"

export class UserCreator {
  private _userRepository: UserRepository
  private _notifier: Notifier

  constructor(userRepository: UserRepository, notifier: Notifier) {
    this._userRepository = userRepository
    this._notifier = notifier
  }

  async run({ id, name, age }: { id: string, name: string, age: number }): Promise<User> {
    const user = new User({ id, name, age })

    if (user.age < 18)
      throw new MinorUserException();
  
    await this._userRepository.save(user);

    this._notifier.notify({
      name: user.name,
      age: user.age
    })

    return user
  }
}
