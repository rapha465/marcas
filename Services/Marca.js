import Marca from "../Models/Marca";

const marcas = [

new Marca(
  1,
 "Netflix",
  "Plataforma de streaming de filmes e séries",
     "https://www.netflix.com"
),

new Marca(
 2,
 "Prime Vídeo",
 "Plataforma de streaming da Amazon",
  "https://www.disneyplus.com"
    )
];

class MarcaService {
  
    // CREATE
    Criar(nome, descricao, site) {
     
        const novaMarca= new Marca(
        marcas.length + 1,
        nome,
        descricao,
        site,
      );

      marcas.push(novaMarca);

      return novaMarca;
    }

     // READ- Listar todos
       
     Listar() {
        
       return marcas;
     }
 
      // READ - buscar por ID
      BuscarPorId(id) {

        const marca = marcas.find(
           marca => marca.id === id 
        );
       
        return marca;
      }
     
      //UPDATE
      Atualizar(id, nome, descricao, site) {
       
        const marca = marcas.find(
         marca=> marca.id === id
        );

        if (!marca) {
        throw new Error ("Marca não encontrada");
        }

      marca.nome = nome;
      marca.descricao = descricao;
      marca.site = site;
      
      return marca;
     }
     
      // DELETE
      Excluir(id) {

     const index = marcas.findIndex(
       marca => marca.id === id
       );

       if (index === -1)  {
       throw new Error("Marca não encontrada");
       
    }
     const marcaExcluida = marcas.splice(index , 1);
     
    return marcaExcluida;
      }
 }

 export default MarcaService;
