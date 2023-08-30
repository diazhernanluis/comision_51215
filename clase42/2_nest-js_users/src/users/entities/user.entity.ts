export class User {
    static nextId: number = 1;

    id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    avatar: string;

    constructor({first_name, last_name, email, password, avatar}) {
        this.id = User.nextId++;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
    }
}
