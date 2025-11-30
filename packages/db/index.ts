import * as dotenv from 'dotenv';
import path from 'path';
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from './generated/prisma/client'

dotenv.config({ path: path.resolve(__dirname, './.env') });
// const connectionString = `${process.env.DATABASE_URL}`
const connectionString = "postgresql://postgres:root@localhost:5432/deploy_todo_monorepo"
// console.log(connectionString)

const adapter = new PrismaPg({ connectionString })
const prismaClient = new PrismaClient({ adapter })

export { prismaClient }