import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="40%">Site Development</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/01/2023</td>
            </tr>
            <tr>
              <td width="40%">Hamburger</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 35,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>14/01/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
