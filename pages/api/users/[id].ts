import { User } from '.prisma/client';
import { NextApiRequest as Req, NextApiResponse as Res } from 'next'
import { prisma } from '../../../lib/prisma'

export default async (req: Req, res: Res): Promise<void> => {
    const { id } = req.query
    const user: User = await prisma.user.findFirst(
        {
            where: {
                id: Number(id)
            }
        }
    )
    if (!user) {
        res.status(404).send(null)
        return
    }
    res.json(user)
}
