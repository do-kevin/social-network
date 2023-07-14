import { Observable } from "../Observable";
import HttpGateway from "../http.gateway";

export interface UserDTO {
  id: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  email: string;
  role: string;
  created_at: string;
}

class UserRepository {
  programmersModel: Observable | null = null;
  gateway: any = null;

  constructor() {
    this.gateway = HttpGateway;
    this.programmersModel = new Observable([]);
  }

  fetchUsers = async (callbackFunction: Function) => {
    this.programmersModel?.subscribe(callbackFunction);

    await this.loadUsers();
  };

  loadUsers = async () => {
    const usersDto = await this.gateway.get("/users", {
      cache: "no-store",
    });

    this.programmersModel!.value = usersDto.map((userDto: UserDTO[]) => {
      return userDto;
    });
  };
}

const userRepository = new UserRepository();

export default userRepository;
