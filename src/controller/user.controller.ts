import { Request, Response } from "express";
import UserService from "../serivce/user.service";

export default class UserController {
  #service: UserService;

  constructor(service: UserService) {
    this.#service = service;
  }

  getAll = async (req: Request, res: Response): Promise<void> => {
    const data = await this.#service.getAll();
    res.send(data);
  };
  getById = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const data = await this.#service.getById(+id);
    res.send(data);
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const data = await this.#service.delete(+id);
    res.send(data);
  };

  create = async (req: Request, res: Response): Promise<void> => {
    const body = req.body;
    const data = await this.#service.create(body).catch(err => err);
    res.send(data);
  };

  replace = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const body = req.body;    
    const data = await this.#service.replace(+id, body).catch(err => err);
    res.send(data);
  };

  patch = async (req :Request, res:Response):Promise<void> => {
    const id = req.params.id;
    const body = req.body;
    const data = await this.#service.patch(+id, body).catch(err => err);
    res.send(data);
  }
}
