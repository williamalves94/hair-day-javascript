import { schedulesDay } from "../schedules/load"

// seleciona o input de data
const selectedDate = document.getElementById("date")

// recarrega a lista de horários quando o input de data mudar
selectedDate.onchange = () => schedulesDay()