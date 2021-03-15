exports.seed = async (knex) => {
  await knex("User").insert([
    {
      id: 2,
      FName: "Carl",
      LName: "Redding",
      Email: "credding07@gmail.com",
      Password: "Password1234",
      Admin: true,
      Username: "Miklo",
    },
  ]);
};
