import { Observable } from "../shared/Observable";
import HttpGateway from "../shared/http.gateway";

class UserRepository {
  programmersModel: Observable = null;
  gateway = null;

  constructor() {
    this.gateway = HttpGateway;
    this.programmersModel = new Observable([]);
  }

  fetchUsers = async (callbackFunction) => {
    this.programmersModel.subscribe(callbackFunction);

    await this.loadUsers();
  };

  loadUsers = async () => {
    const usersDto = await this.gateway.get("/users");
    this.programmersModel.value = usersDto.map((userDto) => {
      return userDto;
    });
  };
}

const userRepository = new UserRepository();

export default userRepository;
