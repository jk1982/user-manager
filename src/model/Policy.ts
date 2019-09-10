import { Role } from './Role';
import { v4 as uuid } from 'uuid';

export class Policy {
    private _uid: string;
    private _module_id: string;
    private _roles: Role[];
    private _last_date: Date;
    private _last_user_id: string;
    private _enabled: boolean;

    get Roles(): Role[] {
        return this._roles;
    }

    constructor() {
        this._uid = uuid();
        this._module_id = "";
        this._roles = [];
        this._last_date = new Date(0);
        this._last_user_id = "";
        this._enabled = false;
    }

    AddRole(role: Role): void {
        this._last_date.setDate(Date.now());
    }

    RemoveRole(role_id: string): void {
        this._last_date.setDate(Date.now());
    }

    EnablePolicy(): void {
        this._enabled = true;
        this._last_date.setDate(Date.now());
    }

    DisablePolicy(): void {
        this._enabled = false;
        this._last_date.setDate(Date.now());
    }
}