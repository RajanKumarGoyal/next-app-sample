
// 500 Bad Request
const sendError500 = (object, res) => res.status(500).json({ status: 500, message: object.message });

// 400 Bad Request
const sendError400 = (object, res) => res.status(400).json({ status: 400, message: object.message });

// 401 Unauthorized (RFC 7235)
const sendError401 = (res) => res.status(401).json({ status: 401, message: 'Unauthrized' });

// 400 Success
const sendResp200 = (object, res) => res.status(200).json({ status: 200, message: 'Ok', data: object });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    sendError500,
    sendError400,
    sendError401,
    sendResp200,
};
