'use strict';

const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {

    const hashPassowrd = await bcrypt.hash("Fazal#123", 10)

    await queryInterface.bulkInsert("Users",[
      {username: "admin",email: "admin@gmail.com",password: hashPassowrd, role: "admin"},
      {username: "fazal",email: "fazal@gmail.com",password: hashPassowrd},
      {username: "fazal",email: "fazal1@gmail.com",password: hashPassowrd},
      {username: "fazal",email: "fazal2@gmail.com",password: hashPassowrd},
      {username: "fazal",email: "fazal3@gmail.com",password: hashPassowrd},
      {username: "fazal",email: "fazal4@gmail.com",password: hashPassowrd},
      {username: "fazal",email: "fazal5@gmail.com",password: hashPassowrd},
      {username: "fazal",email: "fazal6@gmail.com",password: hashPassowrd},
      {username: "fazal",email: "fazal7@gmail.com",password: hashPassowrd},
      {username: "fazal",email: "fazal8@gmail.com",password: hashPassowrd},
      {username: "fazal",email: "fazal9@gmail.com",password: hashPassowrd},
      {username: "fazal",email: "fazal10@gmail.com",password: hashPassowrd},
      {username: "fazal",email: "fazal11@gmail.com",password: hashPassowrd},
      {username: "fazal",email: "fazal12@gmail.com",password: hashPassowrd},
      {username: "fazal",email: "fazal13@gmail.com",password: hashPassowrd},
      {username: "fazal",email: "fazal14@gmail.com",password: hashPassowrd},
      {username: "fazal",email: "fazal15@gmail.com",password: hashPassowrd},
      {username: "fazal",email: "fazal16@gmail.com",password: hashPassowrd},
      {username: "fazal",email: "fazal17@gmail.com",password: hashPassowrd},
    ],{})
  },

  async down (queryInterface, Sequelize) {
            await queryInterface.bulkDelete('Users', null, {});
  }
};
