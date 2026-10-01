import MarcaService from "../services/MarcaService.js";

const marcaService = new MarcaService();

class MarcaController {

    Criar(req, res) {

     try {

     const {
        nome,
         descricao,
          site
     } = req.body;

    const marca = marca.Service.Criarriar(
            nome,
             descricao,
             site
            );

            res.status(201).json(marca);

        } catch (erro) {
        res.status(400).json({
        mensagem: erro.message
            });
        }

    }
   
    Listar(req , res) {
      const marcas = marcaService.Listar();
       
      res.json(marcas);
         req.json(marcas);
        
        }
    
        BuscarPorId(req, res) {
          const id = Number(req.params.id);
            const marca = marcaService.BuscarPorId(id);

            if(!marca) {
            return res.status(404).json({
            mensagem: "Marca não encontrada"
            });
         }
        res.json(marca);
    
       }

       Atualizar(req, res) {
         
        try {

        const id = Number(req.params.id);

        const {
            nome,
            descricao,
            site
        } = req.body;
        
        const marca = marca.Service.Atualizar(
          id,
          nome,
          descricao,
          site
          );
       
          res.json(marca);

        } catch (erro)  {
         
            res.status(404).json({
            mensagem: erro.message
            });
         }
        }
}

     Excluir(req, res) {
       try {

      const id = Number(req.params.id);
        const marca = marcaService.Excluir(id);

        
       }




     }