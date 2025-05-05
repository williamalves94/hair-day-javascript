import { openingHours } from "../../utils/opening-hours"
import dayjs from "dayjs"
import { hoursClick } from "./hours-click"

const hours = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }) {

    //if (!Array.isArray(dailySchedules)) {
    //    console.warn("dailySchedules não é um array:", dailySchedules)
    //    dailySchedules = []
    //}

    // limpa a lista de horários
    hours.innerHTML = ""

    const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))

    const opening = openingHours.map((hour) => {
        // recupera somente a hora.
        const [scheduleHour] = hour.split(":")

        // adiciona a hora na date e verificar se esta no passado.
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

        const available = !unavailableHours.includes(hour) && !isHourPast

        return {
            hour,
            available: isHourPast,
        }

    })

    // renderiza os horarios
    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")
        li.textContent = hour

        if (hour === "09:00") {
            hourHeaderAdd("Manhã")
        } else if (hour === "13:00") {
            hourHeaderAdd("Tarde")
        } else if (hour === "18:00") {
            hourHeaderAdd("Noite")
        }

        hours.append(li)
    })

    hoursClick()

}

function hourHeaderAdd(title) {
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}


