import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classes from './tabs-sort.module.scss'
import * as actions from '../../redux/actions/actionCreators'

const TabsSort = () => {
  const active = useSelector((state) => state.reducerSortTab.sort)
  const { onSortCheap, onSortFast, onSortOptimal } = actions
  const dispatch = useDispatch()

  return (
    <div className={classes.tabs}>
      <button
        onClick={() => dispatch(onSortCheap())}
        className={`${classes.tabs__tab_cheap} ${
          active === 'cheap' ? classes.tabs__tab_cheap_active : ''
        }`}
      >
        самый дешевый
      </button>
      <button
        onClick={() => dispatch(onSortFast())}
        className={`${classes.tabs__tab_fast} ${
          active === 'fast' ? classes.tabs__tab_fast_active : ''
        }`}
      >
        самый быстрый
      </button>
      <button
        onClick={() => dispatch(onSortOptimal())}
        className={`${classes.tabs__tab_optimal} ${
          active === 'optimal' ? classes.tabs__tab_optimal_active : ''
        }`}
      >
        оптимальный
      </button>
    </div>
  )
}

export default TabsSort
