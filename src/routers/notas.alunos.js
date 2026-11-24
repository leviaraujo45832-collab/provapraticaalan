import Router from "express";
import { conn } from "../database/conf.db.js";


const notasRout = Router();

notasRout.post("/inserirNotas", (req, res) => {
    const {nota1, nota2, nota3} = req.body;
    conn.query("INSERT INTO notas (nota1, nota2, nota3) VALUES (?, ?, ?)", [nota1, nota2, nota3], (err, result) => {
        if(err){
            console.log("Erro ao inserir dados: ", err);
            return;
        } else{
            res.json({message:`notas inseridas com sucesso!`});
        }
    });
});

notasRout.get("/consultarNotas", (req, res) => {
    const {id} = req.query;

    conn.query(`select * from notas `, (err, result) => {
        if(err){
            return res.json(err.message);
        } 
            res.json(result);
})
});

notasRout.put("/atualizarNotas", (req, res) => {
    const {novaNt1, novaNt2, novaNt3, id} = req.body;

    conn.query(`update notas set nota1 = ?, nota2 = ?, nota3 = ? where id=${id}`, [novaNt1, novaNt2, novaNt3], (err,result)=>{

        res.json({
                    Edição:`produto com id ${id} atualizado com sucesso!`
        })
    })
})

notasRout.delete("/deletarNotas", (req, res) => {
    const {id_notas} = req.body;

    conn.query(`delete from notas where id=${id_notas}`, (err,result)=>{
        if(err){
            return res.json(err.message);
        }
        res.json({
            Deletado:`produto ${result.name} deletado com sucesso!`
    })
  })
});

export {notasRout};