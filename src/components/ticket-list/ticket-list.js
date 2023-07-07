import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Ticket from '../ticket/ticket'
import Spinner from '../spin-load/spin-load'
import { AlertAttention, AlertError } from '../alert-error/alert-error'
import * as actions from '../../redux/actions/actionCreators'
import classes from './ticket-list.module.scss'
import { filterTickets, onSortTickets } from '../../utilities/utilities'

const TicketList = () => {
  const [counter, setCounter] = useState(5)
  const reducerSortTab = useSelector((state) => state.reducerSortTab)
  const reducerFilter = useSelector((state) => state.reducerFilter)
  const reducerTickets = useSelector((state) => state.reducerTickets)
  const dispatch = useDispatch()
  const { sort } = reducerSortTab
  const { tickets, loading, error } = reducerTickets

  useEffect(() => {
    const { getDataId } = actions
    dispatch(getDataId())
  }, [])

  const sortFilterTickets = useMemo(() => {
    return filterTickets(reducerFilter, onSortTickets(tickets, sort))
  }, [reducerFilter, onSortTickets, tickets, sort])

  return (
    <div>
      {!loading && !error ? <Spinner /> : null}
      {error ? <AlertError message={error} /> : null}
      <ul className={classes.ticket_list}>
        {sortFilterTickets.slice(0, counter).map((el) => {
          return (
            <Ticket
              key={`${el.price}${el.carrier}${el.segments[0].stops}`}
              item={el}
            />
          )
        })}
        {!sortFilterTickets.length && !error ? <AlertAttention /> : null}
      </ul>
      {sortFilterTickets.length ? (
        <button
          onClick={() => setCounter(counter + 5)}
          className={classes.button_view}
        >
          показать ещё 5 билетов
        </button>
      ) : null}
    </div>
  )
}

export default TicketList
