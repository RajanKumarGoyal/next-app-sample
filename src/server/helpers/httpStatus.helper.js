
// 400 Bad Request
const sendError400 = (object) => ({ status: 400, message: object.message, data: JSON.stringify(object) });

// 401 Unauthorized (RFC 7235)
const sendError401 = () => ({ status: 401, message: 'Unauthrized' });

// 400 Success
const sendResp200 = (object) => ({ status: 200, message: 'Ok', data: object });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    sendError400,
    sendError401,
    sendResp200,
};
