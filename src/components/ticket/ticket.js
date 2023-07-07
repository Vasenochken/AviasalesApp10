import React from 'react'
import { format } from 'date-fns'
import classes from './ticket.module.scss'

const Ticket = ({ item }) => {
  const { price, segments, carrier } = item

  const priceFormat = (price) => {
    return `${price
      .toString()
      .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')}`
  }

  const transfersNumFormat = (transfer) => {
    const textForms = ['ПЕРЕСАДКА', 'ПЕРЕСАДКИ', 'ПЕРЕСАДОК']
    let form = ''
    if (transfer >= 4) form += textForms[2]
    if (transfer > 1 && transfer <= 4) form += textForms[1]
    if (transfer === 1) form += textForms[0]
    return transfer ? `${transfer} ${form}` : 'Нет пересадок'
  }

  const transferTimeFormat = (data, duration) => {
    const startDate = format(new Date(data), 'HH:mm')
    const endDate = format(
      new Date(new Date(data).getTime() + duration * 60000),
      'HH:mm',
    )
    return `${startDate} - ${endDate}`
  }

  const dateTimeFormat = (duration) => {
    return `${Math.trunc(duration / 60)}ч ${duration % 60}м`
  }

  return (
    <li className={classes.ticket}>
      <div className={classes.ticket__header}>
        <span className={classes.ticket__price}>{priceFormat(price)}</span>
        <img
          className={classes.ticket__logo}
          src={`https://pics.avs.io/99/36/${carrier}.png`}
          alt={carrier}
        />
      </div>

      <div className={classes.ticket__box}>
        <span className={classes.ticket__info}>
          <span className={classes.ticket__info__box_route}>
            <p className={classes.ticket__info__title}>
              mow-hkt{segments[0].origin}-{segments[0].duration}
            </p>
            <p className={classes.ticket__info__description}>
              {transferTimeFormat(segments[0].date, segments[0].duration)}
            </p>
          </span>
          <span className={classes.ticket__info__box_length}>
            <p className={classes.ticket__info__title}>в пути</p>
            <p className={classes.ticket__info__description}>
              {dateTimeFormat(segments[0].duration)}
            </p>
          </span>
          <span className={classes.ticket__info__box_stops}>
            <p className={classes.ticket__info__title}>
              {transfersNumFormat(segments[0].stops.length)}
            </p>
            <p className={classes.ticket__info__description}>
              {segments[0].stops.join(', ')}
            </p>
          </span>
        </span>

        <span className={classes.ticket__info}>
          <span className={classes.ticket__info__box_route}>
            <p className={classes.ticket__info__title}>
              mow-hkt{segments[1].origin}-{segments[1].duration}
            </p>
            <p className={classes.ticket__info__description}>
              {transferTimeFormat(segments[1].date, segments[1].duration)}
            </p>
          </span>
          <span className={classes.ticket__info__box_length}>
            <p className={classes.ticket__info__title}>в пути</p>
            <p className={classes.ticket__info__description}>
              {dateTimeFormat(segments[1].duration)}
            </p>
          </span>
          <span className={classes.ticket__info__box_stops}>
            <p className={classes.ticket__info__title}>
              {transfersNumFormat(segments[1].stops.length)}
            </p>
            <p className={classes.ticket__info__description}>
              {segments[1].stops.join(', ')}
            </p>
          </span>
        </span>
      </div>
    </li>
  )
}

export default Ticket
