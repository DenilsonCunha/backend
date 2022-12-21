
import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'

interface AuthRequest{
    email: string;
    password: string;
}

class AuthUserService{
    async execute({ email, password }: AuthRequest){
     //verificar se o email existe
     const user = await prismaClient.user.findFirst({
      where:{
        email: email
      }
     })
     if(!user){
      throw new Error("User/password Incorreto")
     }

     //verificar se a senha esta correta
     const passwordMatch = await compare(password, user.password)

     if(!passwordMatch){
      throw new Error("User/password incorreto")
     }

     
      return {ok: true }
    }
}

export { AuthUserService }