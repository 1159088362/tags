import { FETCH_ADD_DATA,FETCH_ADD_CHECK } from '@/constants/actionTypes'
const initialState = {
  data:[],
  selectedRowKeys:[]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case FETCH_ADD_DATA:
    return { ...state, data:payload }
  case FETCH_ADD_CHECK:
    return { ...state, selectedRowKeys:payload }
  default:
    return state
  }
}
