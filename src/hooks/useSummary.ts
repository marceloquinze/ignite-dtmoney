import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }
      // the accumulated values
      return acc
    },
    {
      // this represents the acc variable
      // notice it can be passed as an object, not only as a number
      income: 0,
      outcome: 0,
      total: 0,
    },
  )
  return summary
}
