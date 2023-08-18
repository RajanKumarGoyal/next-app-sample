
import prisma from "@/server/lib/prisma";
import httpStatus from "../../helpers/httpStatus.helper";

import bcryptjs from 'bcryptjs';

class UserController {

    /**
     * @returns Index all users
     */
    static index = async () => {
        try {
            const users = await prisma.user.findMany({});
            return httpStatus.sendResp200(users);
        } catch (error) {
            return httpStatus.sendError400(error);
        }
    };

    /**
     * @returns created user data
     */
    static create = async (input) => {
        try {

            const { password } = input;

            input = {
                ...input,
                password: bcryptjs.hashSync(password, 10)
            };

            console.log('prisma', prisma);

            const createdUser = await prisma.users.create({ data: input });
            return httpStatus.sendResp200(createdUser);

        } catch (error) {
            return httpStatus.sendError400(error);
        }
    };

    /**
     * @returns created user data
     */
    static login = async (input) => {
        try {

            const { email, password } = input;

            const authUser = await prisma.user.findUnique({ where: {
                email: email
            } });

            if (authUser) {
                return httpStatus.sendResp200(authUser);
            } else {
                return httpStatus.sendError401();
            }

        } catch (error) {
            return httpStatus.sendError400(error);
        }
    };
};

export default UserController;