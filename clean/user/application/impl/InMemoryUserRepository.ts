import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/interfaces/UserRepository";

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = []

  getAll(): User[] {
    return this.users
  }
  getById(userId: string): User {
    return this.users.find(x => x.id === userId)
  }
  
}