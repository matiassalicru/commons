import moment from 'moment'

const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export default function timeFromNow(time: string): string {
  const start = moment(time, DATE_FORMAT)
  const now = moment()
  const secondsOffset = now.diff(start, 'seconds', true)
  return moment.utc(secondsOffset * 1000).format('HH:mm:ss')
}
