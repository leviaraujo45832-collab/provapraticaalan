import Router from "express";
import { conn } from "../database/conf.db.js";


const turmaRout = Router();

turmaRout.post("/turmas", (req, res) => {
    const {nome, serie} = req.body;
    conn.query("INSERT INTO turma (nome, serie) VALUES (?, ?)", [nome, serie], (err, result) => {
        if(err){
            console.log("Erro ao inserir dados: ", err);
            return;
        } else{
            res.json({message:`turma ${nome} inserida com sucesso!`});
        }
    });
});

turmaRout.get("/consultarTurma", (req, res) => {
    const {id} = req.query;

    conn.query(`select * from turma `, (err, result) => {
        if(err){
            return res.json(err.message);
        } 
            res.json(result);
})
});

turmaRout.put("/atualizarTurma", (req, res) => {
    const {nome, serie, id} = req.body;

    conn.query(`update turma set nome = ?, serie = ? where id=${id}`, [nome, serie], (err,result)=>{

        res.json({
     
            Edição:`produto com id ${id} atualizado com sucesso!`
        })
    })
})

turmaRout.delete("/deletarTurma", (req, res) => {
    const {id_turma} = req.body;

    conn.query(`delete from turma where id=${id_turma}`, (err,result)=>{
        if(err){
            return res.json(err.message);
        }
        res.json({
            Deletado:`produto ${result.name} deletado com sucesso!`
    })
  })
});

export {turmaRout};