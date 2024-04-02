import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UserSignupData {
  email: string;
  password: string;
}

class UserRepository {
  async createUser(data: UserSignupData) {
    try {
      const response = await prisma.user.create({
        data: data,
      });
      return response;
    } catch (error) {
      console.log("error from repository", error);
    }
  }

  async getUser(email: string) {
    try {
      const response = await prisma.user.findFirst({
        where: { email: email },
      });
      return response;
    } catch (error) {
      console.log("error from repository", error);
    }
  }
}

export default UserRepository;
