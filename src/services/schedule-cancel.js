import { apiConfig } from "./api-config.js"

export async function scheduleCancel({ id }) {
    try {
        await fetch(`${apiConfig.baseURL}/shedules/${id}`, {
            method: "DELETE"
        })

        alert("Agendamento cancelado com sucesso!")

    } catch (error) {
        alert("Não foi possível cancelar o agendamento")
    }
}