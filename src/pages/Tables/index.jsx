import React from 'react'
import { connect } from 'react-redux'
import { addData, addCheck } from '@/actions/home'
import { Table } from 'antd'
import './style.less'
function Tables(props) {
  const { addData, selectedRowKeys, addCheck} = props
  const onSelectChange = (checked,data) => {
    addCheck(checked);
    addData(data)
  };
  const rowSelection = {
    selectedRowKeys,
    onChange:onSelectChange,
  };
 
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '3',
      name: '成龙',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  // const rowSelection = {
  //   onChange: (selectedRowKeys, selectedRows) => {
  //     addData(selectedRows)
  //   }
  // };
    return (
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
        pagination={false}
      />
    )
  }
  export default connect(state => {
    return{
      selectedRowKeys:state.home.selectedRowKeys
    }
  },{
    addData,
    addCheck
  })(Tables)