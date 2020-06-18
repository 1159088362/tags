import React from 'react'
import { Tag  } from 'antd'
import { connect } from 'react-redux'
import { addCheck, addData } from '@/actions/home'
export default connect(state => {
  return{
    data:state.home.data,
    selectedRowKeys:state.home.selectedRowKeys
  }
},{
  addCheck,
  addData
})(Tags)
function Tags(props) {
  const { data, selectedRowKeys, addCheck, addData} = props
  const log = key => {
    const seletd = selectedRowKeys.filter(v =>v !== key)
    const dataed = data.filter(v =>v.key !== key)
    addCheck(seletd)
    addData(dataed)
  }
    return (
      <div>
      {
        data.map(v => {
          return(
            <Tag closable onClose={() => log(v.key)} key={v.key}>
            {v.name}
          </Tag>
          )
        })
      }
      </div>
    )
  }
