const BASE_URL = require("../../constants")
const {
    default: axios
} = require("axios");

function request(apiKey) {
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        }
    })
}
module.exports = request;