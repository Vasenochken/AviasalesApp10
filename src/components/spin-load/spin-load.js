import React from 'react'
import { Spin } from 'antd'
import classes from './spin-load.module.scss'

const Spinner = () => {
  return <Spin className={classes.spinner}></Spin>
}

export default Spinner
