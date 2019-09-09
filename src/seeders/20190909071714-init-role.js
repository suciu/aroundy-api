'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('role', [
                {
                    alias: "employee",
                    name: "Employee"
                },{
                    alias: "pm",
                    name: "Project Manager"
                },{
                    alias: "hr",
                    name: "HR"
                },
            ],{});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
