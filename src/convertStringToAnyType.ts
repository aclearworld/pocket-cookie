import _ from 'lodash'
import moment from 'moment'
import { isObject } from './utility'

export const isConvertibleToNumber = (s: string): boolean => {
  if (!s) return false
  const toNumber = _.toNumber(s)

  return !Number.isNaN(toNumber)
}

export const isConvertibleToBool = (s: string): boolean => {
  if (!s) return false

  return s === 'true' || s === 'false'
}

export const isConvertibleToDate = (s: string): boolean => {
  if (!s) return false

  return moment(s).isValid()
}

export const isConvertibleToArray = (s: string): boolean => {
  if (!s) return false

  let toArray: any
  try {
    toArray = JSON.parse(s)
  } catch (e) {
    return false
  }

  return Array.isArray(toArray)
}

export const isConvertibleToObject = (s: string): boolean => {
  if (!s) return false

  let toObject: any
  try {
    toObject = JSON.parse(s)
  } catch (e) {
    return false
  }

  return isObject(toObject)
}

export const isConvertibleToNull = (s: string): boolean => {
  if (!s) return false

  return s === 'null'
}

export const isConvertibleToUndefined = (s: string): boolean => {
  if (!s) return false

  return s === 'undefined'
}
