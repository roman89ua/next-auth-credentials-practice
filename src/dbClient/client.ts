import { PrismaClient } from '@prisma/client';

export class PrismaORM {
  private static instance: PrismaClient;

  public static getInstance(): PrismaClient {
    if (!PrismaORM.instance) {
      PrismaORM.instance = new PrismaClient();
    }

    return PrismaORM.instance;
  }
}
