import { type NextRequest, NextResponse } from 'next/server';
import { type RegistrationCredentialsType } from '@/types/auth-types';
import { hash } from 'bcrypt';
import { PrismaORM } from '@/dbClient/client';

const prisma = PrismaORM.getInstance();

export async function POST(request: NextRequest) {
  const body: RegistrationCredentialsType = await request.json();

  const { name, email, password } = body;

  if (!name || !email || !password) {
    return new NextResponse('Missing name, email or password.', {
      status: 400,
    });
  }

  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (exist) {
    return new NextResponse('User already exist.', {
      status: 400,
    });
  }

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword: await hash(password, 15),
    },
  });

  return NextResponse.json(user);
}
