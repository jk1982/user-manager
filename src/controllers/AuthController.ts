import { Controller } from './Controller';

export interface AuthContract{
    user: string;
    password: string;
}

export class AuthController extends Controller{
    
    public Auth() {
        
    }
}