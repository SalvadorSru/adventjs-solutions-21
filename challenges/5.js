export default function daysToXmas(date) {

  let current_day = date.getDate()
  if  ( date.getMonth() == 0 ) current_day = 31 + current_day

  return 25 - current_day // Days to christmas
}