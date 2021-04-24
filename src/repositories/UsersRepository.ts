import { EntityRepository, Repository} from "typeorm";
import { User } from "../entities/User"

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  static create(arg0: { email: string; }) {
    throw new Error("Method not implemented.");
  }
}

export { UsersRepository};