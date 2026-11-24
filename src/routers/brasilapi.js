
import Router from "express";

const brasilRout = Router();

brasilRout.get("/consultarCep", async (req, res) => {
    const { cep } = req.query;

    if (!cep || !/^\d{8}$/.test(cep)) {
        return res.status(400).json({
            message: "Informe um CEP com 8 números!"
        });
    }

    try {
        const resposta = await fetch(
            `https://brasilapi.com.br/api/cep/v1/${cep}`
        );

        if (!resposta.ok) {
            return res.status(resposta.status).json({
                message: "Erro ao consultar CEP!"
            });
        }

        const result = await resposta.json();

        res.json({
            cep: result.cep,
            estado: result.state,
            cidade: result.city,
            bairro: result.neighborhood,
            rua: result.street
        });

    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

export { brasilRout };