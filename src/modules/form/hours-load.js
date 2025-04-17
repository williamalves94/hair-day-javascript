import { openingHours } from "../../utils/opening-hours"
import dayjs from "dayjs"

export function hoursLoad({ date }) {
    const opening = openingHours.map((hour) => {
        // recupera somente a hora.
        const [scheduleHour] = hour.split(":")

        // adiciona a hora na date e verificar se esta no passado.
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

        return {
            hour,
            available: isHourPast,
        }

    })

}

