import { useMemo } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  // useMemo is used to avoid summary variable to be recreated every time
  // the useSummary is re-rendered
  const summary = useMemo(() => {
    return transactions.reduce(
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
  }, [transactions])
  return summary
}
