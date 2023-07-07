export const initStateFilter = [
  { label: 'всё', value: 'all', checked: false },
  { label: 'без пересадок', value: '0', checked: false },
  { label: '1 пересадка', value: '1', checked: false },
  { label: '2 пересадки', value: '2', checked: false },
  { label: '3 пересадки', value: '3', checked: false },
]

export const initStateSort = {
  sort: 'cheap',
}

export const initStateTickets = {
  tickets: [],
  loading: false,
  error: null,
  counter: 5,
}
