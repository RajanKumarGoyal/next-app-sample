
import bcrypt from 'bcrypt';
import prisma from "@/db.server";
import httpStatus from "@/helpers/httpStatus.helper";

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns Users List / User Create
 */
async function handler(req, res) {
    try {

        const { method } = req;

        if (method === 'GET') {

            /**
             * Index User Listing
             */
            const users = await prisma.user.findMany({});
            return httpStatus.sendResp200(users, res);

        } else if (method === 'POST') {

            const { password } = req.body;

            req.body = {
                ...req.body,
                password: bcrypt.hashSync(password, 10)
            };

            /**
             * Create User
             */
            const createdUser = await prisma.user.create({ data: req.body });
            return httpStatus.sendResp200(createdUser, res);

        } else {

            /**
             * Exception : In Case of Wrong Method
             */
            return httpStatus.sendError400({ message: 'Invalid request!' }, res);
        }

    } catch (error) {

        return httpStatus.sendError500(error, res);
    }
};

export default handler;