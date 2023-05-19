// require("dotenv").config();
// const { Client } = require("ssh2");
// const ftpConfig = {
//   host: process.env.host,
//   port: 22,
//   username: process.env.username,
//   password: process.env.password,
// };
// const conn = new Client();
// conn
//   .on("ready", () => {
//     console.log("Client :: ready");
//     conn.sftp((err, sftp) => {
//       if (err) throw err;
//       sftp.readdir("foo", (err, list) => {
//         if (err) throw err;
//         console.dir(list);
//         conn.end();
//       });
//     });
//   })
//   .connect(ftpConfig);
// module.exports = { conn };
