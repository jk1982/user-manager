import Express from 'express';

export class Controller{
    
    protected req: Express.Request;
    protected res: Express.Response;

    constructor(req: Express.Request, res: Express.Response) {        
        this.req = req;
        this.res = res;
    }
}