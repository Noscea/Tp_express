import User from "../model/user.model";
import UserRepository from "../repository/user.repository";

export default class UserService {
  #repo: UserRepository;

  constructor(repo: UserRepository) {
    this.#repo = repo;
  }

  getAll = async (): Promise<User[]> => {
    return this.#repo.getAll();
  };

  getById = async (id: number): Promise<User> => {
    return this.#repo.getById(id);
  };

  delete = async (id: number): Promise<void> => {
    return this.#repo.delete(id);
  };

  create = async (item: any): Promise<User> => {
    const data = new User(item);
    return this.#repo.create(data);
  };

  replace = async (id: number, item: any): Promise<User> => {
    if (id != item.id) throw "Id non concordant";
    const user = new User(item, false);

    return this.#repo.replace(id, user);
  };

  patch = async (id: number, item: any): Promise<User> => {
    if (id != item.id) throw "Id non concordant";
    const user = new User(item, true);
    return this.#repo.patch(id, user);
  };
}
