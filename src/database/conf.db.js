import mysql from "mysql2";
import "dotenv/config"
const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
conn.connect((err) => {
    if (err) {
        console.log("Erro ao conectar com o banco de dados: ", err);
        return;
    }
    console.log("Conexão com o banco de dados sucesso!");

})

export { conn };