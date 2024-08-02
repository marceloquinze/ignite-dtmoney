import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const total = transactions
    .filter((item) => item.type === 'income')
    .reduce((acc, curr) => acc + curr.price, 0)

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Incomes</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>
        <strong>R$ {total}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Outcomes</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
