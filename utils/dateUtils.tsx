const dayDictionary: Record<string, string> = {
  SEG: "segunda",
  TER: "terça",
  QUA: "quarta",
  QUI: "quinta",
  SEX: "sexta",
  SAB: "sábado",
  DOM: "domingo",
};

function formatIsoDate(isoDate: string, includeTime: boolean): string {
  const splitDate = isoDate.split("T")[0].split("-");
  const formattedDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;

  if (includeTime) {
    const splitTime = isoDate.split("T")[1].split(":");
    const formattedTime = `${splitTime[0]}:${splitTime[1]}`;
    return `${formattedDate} ${formattedTime}`;
  }

  return formattedDate;
}

export function formatDate(
  date: string,
  isIso: boolean = false,
  includeTime: boolean = false
): string {
  if (isIso) {
    return formatIsoDate(date, includeTime);
  }

  if (!includeTime) {
    const splitDate = date.split("-");

    return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
  }

  return "erro";
}

export function formatBookingSchedule(schedule: string): string {
  const date = schedule.split("/")[0];
  const period = schedule.split("/")[1];

  const startDay = date.split("-")[0];
  const endDay = date.split("-")[1];

  const startTime = period.split("-")[0];
  const endTime = period.split("-")[1];

  return `${dayDictionary[startDay]} à ${dayDictionary[endDay]} - ${startTime} às ${endTime}`;
}
