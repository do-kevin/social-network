import { Request, Response, NextFunction } from "express";
import { PrismaClientType } from "./types";

interface Dependency {
  name: string;
  package: unknown;
}

export class UserController {
  [key: string]: unknown;

  private _prisma!: PrismaClientType;

  constructor(...dependencies: Dependency[]) {
    dependencies.forEach((dependency) => {
      this[`_${dependency.name}`] = dependency.package;
    });
  }

  get prisma() {
    return this._prisma;
  }

  getUsers = async (_req: Request, res: Response, _next: NextFunction) => {
    try {
      const usersDto = await this.prisma.user.findMany();

      console.log(usersDto);

      return res.json(usersDto);
    } catch (error) {
      console.error(error);
    }
  };

  createUser = async (req: Request, res: Response, _next: NextFunction) => {
    const { first_name, middle_name, last_name, email, role } = req.body;

    const newUser = await this.prisma.user.create({
      data: {
        first_name,
        last_name,
        middle_name,
        email,
        role,
      },
    });

    return res.json(newUser);
  };

  deleteUser = async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    const userDto = await this.prisma.user.delete({
      where: {
        id,
      },
    });

    return res.json(userDto);
  };

  editUser = async (req: Request, res: Response, _next: NextFunction) => {
    try {
      const { id } = req.params;
      const { first_name, last_name, middle_name, email, role } = req.body;

      const programmersModel = {
        userId: id,
        firstName: first_name,
        lastName: last_name,
        middleName: middle_name,
        email,
        role,
      };

      const userDto = await this.prisma.user.update({
        where: {
          id: programmersModel.userId,
        },
        data: {
          first_name: programmersModel.firstName,
          last_name: programmersModel.lastName,
          middle_name: programmersModel.middleName,
          email: programmersModel.email,
          role: programmersModel.role,
        },
      });

      return res.json(userDto);
    } catch (error) {
      console.error(error);
    }
  };
}
