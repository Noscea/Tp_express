
import { Request, Response } from "express";
import UserService from "../serivce/user.service";

export default class UserController {
  #service: UserService;

  constructor(service: UserService) {
    this.#service = service;
  }

  postElement = async(req : Request, res : Response): Promise<void> => {
    console.log(req.body);

    // const body = req.body;
    // console.log(body);
    
    // const data = await this.#service.create(body);
    res.send("ok")
   
  };
}
