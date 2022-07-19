
interface UserRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUsersService{
    async execute({name, email, password}: UserRequest){

        console.log(name);

        return { name: name }
    }
}

export { CreateUsersService }