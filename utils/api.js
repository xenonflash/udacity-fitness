import { AsyncStorage as AS } from 'react-native'
import { CALENDAR_STORAGE_KEY } from './_calendar'

export function submitEntry({ entry, key }) {
  AS.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}
export function removeEntry({ key }) {
  AS.getItem(CALENDAR_STORAGE_KEY).then(res => {
    const data = JSON.parse(res)
    data[key] = undefined
    delete data[key]
    AS.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
  })
}