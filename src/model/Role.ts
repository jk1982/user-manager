import { v4 as uuid } from 'uuid';

export class Role {
    private _uid: string;
    private _title: string;
    private _description: string;
    private _last_date: Date;
    private _last_user_id: string;
    private _enabled: boolean;
    private _dependent_role_id: string;

    constructor() {
        this._uid = uuid();
        this._title = "";
        this._description = "";
        this._last_date = new Date(0);
        this._last_user_id = "";
        this._enabled = false;
        this._dependent_role_id = "";
    }
}