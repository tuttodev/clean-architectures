export class User {
  readonly id: string
  readonly name: string
  readonly age: number

  constructor({ id, name, age }: { id: string, name: string, age: number }) {
    this.id = id
    this.name = name
    this.age = age
  }
}