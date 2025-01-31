require("dotenv").config();
var axios = require("axios");
const API_KEY = process.env.Kommunicat_Key;
const API_URL = "https://services.kommunicate.io/rest/ws/user/v2/detail";

const createConfig = (data) => ({
  method: "post",
  url: API_URL,
  headers: {
    "Api-Key": API_KEY,
    "Content-Type": "application/json",
  },
  data,
});

const data = async (userId) => {
  const data = JSON.stringify({
    userIdList: [`${userId}`],
  });
  const config = createConfig(data);
  const response = await axios(config);
  const obj = response.data.response[0].metadata;
  return obj;
};



module.exports = {
    data
}