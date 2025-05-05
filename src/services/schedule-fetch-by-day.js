import { apiConfig } from "../services/api-config.js"

export async function scheduleFetchByDay({ date }) {
    try {
        const response = await fetch(`${apiConfig.baseURL}`);
        // if (!response.ok) {
        //     throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
        // }

        const data = await response.json();

        const dailySchedules = data.filter((schedule) =>
            dayjs(date).isSame(schedule.when, "day")
        );

        return dailySchedules;
    } catch (error) {
        console.log("Erro ao buscar agendamentos:", error);
        alert("Não foi possível buscar os agendamentos do dia selecionado.");
        return []; // Retorna array vazio para evitar undefined
    }
}
