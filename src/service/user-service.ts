import UserRepository from "../repository/user-repository";

interface UserData {
  email: string;
  password: string;
}

class UserService {
  userRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async signupUser(data: UserData) {
    try {
      const response = await this.userRepository.createUser(data);
      return response;
    } catch (error) {
      console.log("error from service ", error);
    }
  }

  async signinUser(data: UserData) {
    try {
      const response = await this.userRepository.getUser(data.email);
      if (!response) {
        return "email not found ";
      }
      if (response?.password === data.password) {
        return "login success";
      } else {
        return "password dont match login failed";
      }
    } catch (error) {
      console.log("error from service ", error);
    }
  }
}

export default UserService;
