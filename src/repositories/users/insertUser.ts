import { PrismaClient } from "@prisma/client"

interface userType {
  name: string
  email: string,
  role?: string
  encryptedPassword: string
}

const insertUser = async (props: userType) => {
  const {email, name, role } = props
  const prismaCliente = new PrismaClient()

  prismaCliente.user.create({
    data:{
      name: "Jhon Doe",
      email: "jhondoe@gmail.com",
    }
  }).then((data) => console.log(data)).catch((error)=>console.log(error))
}
export default insertUser
