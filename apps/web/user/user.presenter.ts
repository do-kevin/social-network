import UserRepository from "./user.repository";

export class UserPresenter {
  load = async (callbackFunction) => {
    let role = null;

    await UserRepository.fetchUsers((usersPM) => {
      const usersViewModel = usersPM.map((userPM) => {
        role = userPM.role;

        if (role === "GOD_USER") {
          role = "GOD";
        }

        return {
          userId: userPM.id,
          firstName: userPM.first_name,
          middleName: userPM.middle_name,
          lastName: userPM.last_name,
          email: userPM.email,
          role: role,
          createdAt: userPM.created_at,
        };
      });

      callbackFunction(usersViewModel);
    });
  };
}
