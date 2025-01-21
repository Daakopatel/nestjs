import { Injectable } from '@nestjs/common';
import { Users } from 'src/users/interfaces/user.interface';
@Injectable()
export class UsersService {
    private readonly users: Users[] = [];

    create(user: Users) {
        this.users.push(user);
    }

    findAll(): Users[] {
        console.log(this.users);
        
        return this.users;
    }
}
