import { User } from '../entities/User'

export interface UserRepository {
  save(user: User): void
  getAll(): User[]
  getById(userId: string): User
  delete(userId: string): User
  update(user: User): User
}