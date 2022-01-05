const mysql = require("think-model-mysql");

module.exports = {
  handle: mysql,
  database: "xzzshop",
  prefix: "xzzshop_",
  encoding: "utf8mb4",
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "zxbzxb1655",
  dateStrings: true,
};
