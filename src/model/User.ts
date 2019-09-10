import { Policy } from './Policy';

export class User {
    private _login: string;
    private _email: string;
    private _policies: Policy[];

    constructor() {
        this._login = "";
        this._email = "";
        this._policies = [];
    }
}