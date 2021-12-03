import { User } from "../entities/User";

export interface UserRepository {
  getAll(): User[]
  getById(userId: string): User
}