'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('user', [
                    {
                        name: "Popescu Martina",
                        email: "popescu.martina@around25.com",
                        password: "1",
                        hash: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoiUG9wZXNjdSBNYXJ0aW5hIiwiZW1haWwiOiJwb3Blc2N1Lm1hcnRpbmFAYXJvdW5kMjUuY29tIiwicm9sZV9hbGlhcyI6MX0.0-LITMH0gVyYygPgc7h3F_UH3n8jsY05xMYvM3GPqz0",
                        role_id: 1
                    },{
                        name: "Daniel Suciu",
                        email: "daniel.suciu@around25.com",
                        password: "2",
                        hash: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJuYW1lIjoiRGFuaWVsIFN1Y2l1IiwiZW1haWwiOiJkYW5pZWwuc3VjaXVAYXJvdW5kMjUuY29tIiwicm9sZV9hbGlhcyI6M30.OHwdrGW55HWWEHjg4w-47i_Nso8COms2C_BH35-jwu8",
                        role_id: 3
                    },{
                        name: "Alexandru Matei",
                        email: "alexandru.matei@around25.com",
                        password: "3",
                        hash: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMiLCJuYW1lIjoiQWxleGFuZHJ1IE1hdGVpIiwiZW1haWwiOiJhbGV4YW5kcnUubWF0ZWlAYXJvdW5kMjUuY29tIiwicm9sZV9hbGlhcyI6Mn0.c7t7647rDUihw5VIZKWWSoZUJ6nnE2t5gPfv3EbtYgo",
                        role_id: 2
                    },
                ],
                {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
