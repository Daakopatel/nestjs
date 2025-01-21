export class CreateUserDto {
    name: string;
    age: number;
    breed: string;
  }

  export class UpdateUserDto {
    name: string;
    age: number;
    breed: string;
  }

  export class ListAllEntities {
    name: string;
    age: number;
    breed: string;
    limit : Number
  }