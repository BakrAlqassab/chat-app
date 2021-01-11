"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Users", [
      {
        firstName: "Bakr",
        lastName: "Al-Qassab",
        email: "alqassab31@gmail.com",
        password: bcrypt.hashSync("secret", 10),
        gender: "male",
      },
      {
        firstName: "Firas",
        lastName: "Al-Rawi",
        email: "firas.alrawi@gmail.com",
        password: bcrypt.hashSync("secret2", 10),

        gender: "male",
      },
      {
        firstName: "Pekka",
        lastName: "lainen",
        email: "pekkka@gmail.com",
        password: bcrypt.hashSync("secret3", 10),
        gender: "female",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Users", null, {});
  },
};
