import { RoleType } from '../role/roletype';

export interface IJwtPayload {
    id: number;
    username: string;
    email: string;
    roles: RoleType[]
    iat?: Date;
}