import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUserById = async (id: number) => {
  return prisma.user.findQnique({ where: { id } });
};

export { getUserById };

// Add other user-related functions