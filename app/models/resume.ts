import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createResume = async (data: any) => {
  return prisma.resume.create({ data });
};

// Add other resume-related functions
