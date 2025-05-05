import { hoursLoad } from "../form/hours-load"
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schedulesShow } from "../schedules/show.js"

// seleciona o input de data
const selectedDate = document.getElementById("date")
export async function schedulesDay() {
    // obtem a data do input
    const date = selectedDate.value

    // busca os agendamentos na api
    const dailySchedules = await scheduleFetchByDay({ date });

    // exibe os agendamentos
    schedulesShow({ dailySchedules })

    // renderiza as horas disponiveis
    hoursLoad({ date, dailySchedules })
}
