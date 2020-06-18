import { FETCH_ADD_DATA,FETCH_ADD_CHECK } from '@/constants/actionTypes'
export const addData = (payload) => ({
  type: FETCH_ADD_DATA,
  payload
})
export const addCheck = (payload) => ({
  type: FETCH_ADD_CHECK,
  payload
})
