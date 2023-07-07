import React from 'react'
import TitleLogo from '../header/header'
import FilterTransfer from '../filter/filter-transfer'
import TabsSort from '../tabs-sort/tabs-sort'

import classes from './app.module.scss'
import TicketList from '../ticket-list/ticket-list'

const App = () => {
  return (
    <section className={classes.app}>
      <TitleLogo />
      <main className={classes.app__main}>
        <FilterTransfer />
        <div className={classes.app__box}>
          <TabsSort />
          <TicketList />
        </div>
      </main>
    </section>
  )
}

export default App
