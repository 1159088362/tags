import React from 'react'
import Tables from '../Tables'
import Tags from '../tags'
import './styles.less'

export default function Home() {
    return (
      <div className="pages-home">
      <Tags />
      <Tables />
      </div>
    )
}
