import { PrismaClient } from "prisma/src/generated/client";

export type PrismaClientType = InstanceType<typeof PrismaClient>;
