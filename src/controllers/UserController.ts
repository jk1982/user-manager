import { Controller } from './Controller';

export interface UserContract{
    login: string;
    password: string;
    verification: string;
    email: string;
    module: string;
}

export class UserController extends Controller{

    public Create(){
        let user = this.req.body as UserContract;
        
    }
}