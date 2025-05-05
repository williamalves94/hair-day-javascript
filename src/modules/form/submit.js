import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// date atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// carrega a data atual
selectedDate.value = inputToday

// define a data mínima como sendo a data atual
selectedDate.min = inputToday

form.onsubmit = async (event) => {
    event.preventDefault()

    try {
        // recuperando o nome do cliente
        const name = clientName.value.trim()
        if (!name) {
            return alert("Informe o nome do cliente!")
        }

        // recupera o horário selecionado
        const hourSelected = document.querySelector(".hour-selected")

        if (!hourSelected) {
            return alert("Selecione a hora.")
        }

        // recupera somente a hora
        const [hour] = hourSelected.innerText.split(":")

        // insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")

        // gera um ID
        const id = new Date().getTime()

        // faz o agendamento
        await scheduleNew({
            id,
            name,
            when,
        })

        await schedulesDay()

        // limpa o nome do cliente
        clientName.value = ""

    } catch (error) {
        alert("Não foi possível realizar o agendamento.")
    }
}