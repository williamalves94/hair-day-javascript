// Importa o objeto `apiConfig` de um arquivo local chamado "api-config.js"
// Esse objeto geralmente contém a URL base da API ou outras configurações úteis
import { apiConfig } from "./api-config.js";

// Declara uma função assíncrona chamada `scheduleNew` que recebe um objeto com as propriedades `id`, `name` e `when`
// Essa função será usada para agendar algo, enviando os dados para uma API
export async function scheduleNew({ id, name, when }) {
    try {
        // Tenta executar o bloco de código dentro do try
        // Faz uma requisição HTTP do tipo POST para a rota /schedules da API definida em apiConfig.baseURL
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: "POST", // Define o método HTTP como POST, usado para envio de dados | method define o tipo de requisição HTTP | "POST" significa: enviar dados para o servidor.
            headers: { // headers são metadados da requisição, ou seja, informações adicionais que dizem como ela está estruturada.
                "Content-Type": "application/json", // "Content-Type": "application/json" está dizendo para o servidor: "Ei, os dados que estou te mandando estão no formato JSON, beleza?"
            },
            body: JSON.stringify({ id, name, when }) // body é o corpo da requisição — onde vão os dados que queremos enviar | Como o servidor espera texto em formato JSON, usamos JSON.stringify() para converter o objeto JS { nome: "Maria", idade: 25 } em uma string JSON.
        });

        alert("Agendamento realizado com sucesso!")
    } catch (error) {
        // Se der algum erro na requisição, ele será capturado aqui
        console.log(error); // Exibe o erro no console para fins de debug
        alert("Não foi possível agendar. Tente novamente mais tarde."); // Mostra uma mensagem de erro amigável ao usuário
    }
}
