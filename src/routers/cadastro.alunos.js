import Router from "express";
import { conn } from "../database/conf.db.js";


const cadastRout = Router();

cadastRout.post("/cadastro", (req, res) => {
    const {nome, dataNascimento, telefone, cpf, senha} = req.body;
    conn.query("INSERT INTO cadastroaluno (nome, dataNascimento, telefone, cpf, senha) VALUES (?, ?, ?, ?, ?)", [nome, dataNascimento, telefone, cpf, senha], (err, result) => {
        if(err){
            console.log("Erro ao inserir dados: ", err);
            return;
        } else{
            res.json({message:`usuario ${nome} inserido com sucesso!`});
        }
    });
});

cadastRout.get("/consultar", (req,res) =>{
    const {id} = req.query;

    conn.query( `select * from cadastroaluno `, (err, result) => {
        if(err){
            return res.json(err.message);
        }
        res.json(result);
    })
})




cadastRout.put("/atualizar", (req, res) => {
    const {nome, dataNascimento, telefone, cpf, senha, id} = req.body;

    conn.query(`update cadastroaluno set nome = ?, dataNascimento = ?, telefone = ?, cpf = ?, senha = ? where id=${id}`, [nome, dataNascimento, telefone, cpf, senha], (err,result)=>{

        res.json({
     
            Edição:`produto com id ${id} atualizado com sucesso!`
        })
    })
})

cadastRout.delete("/deletar", (req, res) => {
    const {id_cadastroaluno} = req.body;

    conn.query(`delete from cadastroaluno where id=${id_cadastroaluno}`, (err,result)=>{
        if(err){
            return res.json(err.message);
        }
        res.json({
            Deletado:`produto ${result.name} deletado com sucesso!`
    })
  })
});

export {cadastRout};
