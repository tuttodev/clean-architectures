import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = []

  save(user: User): void {
    this.users.push(user)
  }
  
  getAll(): User[] {
    return this.users
  }

  getById(userId: string): User {
    return this.users.find(user => user.id === userId)!!
  }
  
  delete(userId: string): User {
    const user: User = this.getById(userId)

    this.users = this.users.filter(user => user.id !== userId)

    return user
  }

  update(user: User): User {
    this.delete(user.id)
    this.save(user)

    return user
  }

}