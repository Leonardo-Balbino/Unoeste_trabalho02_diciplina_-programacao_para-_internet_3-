import Evento from "./Model/evento.js";

const evento = new Evento("Nome diferente", "23/10/2000", "21:50","Jau","235,78","50","Show nova turne Gustavo Lima");

//const evento2 = new Evento("Show do Gustavo Lima", "23/10/2000", "21:50","Jau","235,78","50","Show nova turne Gustavo Lima");

//console.log(evento.editorText())



evento.incluir().then(()=> {
    console.log("Eventos incluido com sucesso")
}).catch((erro) =>{
    console.log("Erro ao Criar os Eventos: " + erro);
});

// evento.consultar(2).then((listaEventos)=>{
//     for (const evento of listaEventos){
//         console.log(evento.editorText());
//     }
// }).catch((erro) =>{
//     console.log("Erro ao consultar os eventos: " + erro);
// });




    // evento.excluir()
    // .then(() => {
    //     console.log("Evento excluído com sucesso");
    // })
    // .catch((erro) => {
    //     console.error("Erro ao excluir o evento:", erro);
    // });
    
    // evento.pk = 1; 
    // evento.nome = "Novo Nome do Evento";
    

    // evento.alterar(evento)
    //     .then(() => {
    //         console.log("Evento atualizado com sucesso");
    //     })
    //     .catch((erro) => {
    //         console.error("Erro ao atualizar o evento:", erro);
    //     });