import User from "../model/user.model";
import axios from "axios";
import "dotenv/config";

export default class UserRepository {
  #URL = `${process.env.JSONSERVER}`;

  getAll = async (): Promise<User[]> => {
    const data = await axios.get(`${this.#URL}`).then((res) => res.data);
    return data;
  };

  getById = async(id: number): Promise<User> => {
    const data = await axios.get(`${this.#URL}/${id}`).then((res) => res.data).catch(err => "Id non existant");
    return data;
  };

  delete = async(id:number):Promise<void> => {
    const data = await axios.delete(`${this.#URL}/${id}`).then(res => res.data).catch(err=> "Id non existant")
    return data;
  }

  create = async (item: User): Promise<User> => {
    return axios.post(`${this.#URL}`, item).then((res) => res.data);
  };

  replace = async (id:number, item : User):Promise<User> => {
    const data = await axios.put(`${this.#URL}/${id}`,item).then(res => res.data).catch(err => "Id non existant")
    return data;
  }

  patch = async (id:number, item: User):Promise<User> => {
    const data = await axios.patch(`${this.#URL}/${id}`,item).then(res => res.data).catch(err => "Id non existant")
    return data;
  }
}
