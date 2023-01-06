import User from "../model/user.model";
import UserRepository from "../repository/user.repository";

export default class UserService {
  #repo: UserRepository;

  constructor(repo: UserRepository) {
    this.#repo = repo;
  }

  create = async(item:any):Promise<User>=>{
    const data = new User(item)
    return this.#repo.create(data)

  }
}
