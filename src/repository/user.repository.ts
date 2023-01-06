import User from "../model/user.model";
import axios from "axios";
import "dotenv/config";


export default class UserRepository {
    #URL = `${process.env.JSONSERVER}`;

    create = async (item: User): Promise<User> => {
        return axios.post(`${this.#URL}`, item).then((res) => res.data);
      };
}