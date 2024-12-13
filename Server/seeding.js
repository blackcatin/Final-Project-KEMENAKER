const pool = require("./connection");
const data = require("../tokotalent/menu.json");

let newData = data.map((el) => {
  return `('${el.title}', ${el.releaseYear}, '${el.imageUrl}', '${el.genre}')`;
});

let newDataToInsert = newData.join(",");

let seedDataQuery = `
  INSERT INTO Movies ("title", "releaseYear", "imageUrl", "genre")
  VALUES ${newDataToInsert}
`;

async function runSeed() {
  try {
    await pool.query(seedDataQuery);
    console.log("Success seed table movies");
  } catch (error) {
    console.log(error);
  }
}

runSeed();
