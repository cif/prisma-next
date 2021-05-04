// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from '.prisma/client';
import { NextApiRequest as Req, NextApiResponse as Res } from 'next'
import { prisma } from '../../lib/prisma'

export default async (req: Req, res: Res): Promise<void> => {
  switch (req.method) {
    case 'GET':
      fetchUsers(res)
      break
    case 'POST':
      addUser(JSON.parse(req.body), res)
      break
    default:
      res.send(404)
  }
}

const fetchUsers = async (res: Res): Promise<void> => {
  const users: User[] = await prisma.user.findMany()
  res.json(users)
}

const addUser = async (user: User, res: Res): Promise<void> => {
  try {
    const created: User = await prisma.user.create({ data: user })
    res.json(created)
  } catch (err) {
    res.status(400).send(err.toString())
  }
  
}
