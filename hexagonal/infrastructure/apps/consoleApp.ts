import { GetUsers } from "../../application/usecases/GetUsers";
import { UserCreator } from "../../application/usecases/UserCreator";
import { UserDeleter } from "../../application/usecases/UserDeleter";
import { UserUpdater } from "../../application/usecases/UserUpdater";
import { InMemoryUserRepository } from '../persistence/InMemoryUserRepository'
import { UserCreatedGmailNotifier } from "../implementations/notifiers/UserCreatedGmailNotifier";
import { UserDeleterGmailNotifier } from "../implementations/notifiers/UserDeleterGmailNotifier";
import { UserUpdaterGmailNotifier } from "../implementations/notifiers/UserUpdaterGmailNotifier";


(async () => {
  const userRepository = new InMemoryUserRepository()

  const userCreatedGmailNotifier = new UserCreatedGmailNotifier('jsebas2426@gmail.com')
  const userCreatorUseCase = new UserCreator(userRepository, userCreatedGmailNotifier)
  await userCreatorUseCase.run({ id: '1', name: 'Juan Sebastián', age: 21 })
  await userCreatorUseCase.run({ id: '2', name: 'Santiago', age: 18 })
  await userCreatorUseCase.run({ id: '3', name: 'Luciana Lopez', age: 18 })
  
  const getUserUseCase = new GetUsers(userRepository)
  const usersOne = await getUserUseCase.run()
  console.log(usersOne)

  const userDeleterGmailNotifier = new UserDeleterGmailNotifier('jsebas2426@gmail.com')
  const userDeleterUseCase = new UserDeleter(userRepository, userDeleterGmailNotifier)
  const userDeleted = await userDeleterUseCase.run('2')
  console.log('El usuario fue eliminado correctamente', userDeleted)

  const userUpdaterGmailNotifier = new UserUpdaterGmailNotifier('jsebas2426@gmail.com')
  const userUpdaterUseCase = new UserUpdater(userRepository, userUpdaterGmailNotifier)
  const userUpdated = await userUpdaterUseCase.run({ id: '3', name: 'Luciana Lopez Jimenez', age: 18 })
  console.log('El usuario fue actualizado correctamente', userUpdated)

  const usersTwo = await getUserUseCase.run()
  console.log(usersTwo)
})()
