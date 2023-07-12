import { UserController as _UserController } from "./user.controller";
import { prisma } from "src/services/prisma";

const UserController = new _UserController({
  name: "prisma",
  package: prisma,
});

export default UserController;
