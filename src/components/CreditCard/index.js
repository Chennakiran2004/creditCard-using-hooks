import {useState} from 'react'

import {
  AppContainer,
  CreditCardContainer,
  CreditCardHeading,
  CreditCardHeadingContainer,
  HorizontalLine,
  CardContainer,
  Card,
  CardNumber,
  Text,
  CardHolderName,
  PaymentContainer,
  PaymentMethodContainer,
  PaymentMethodHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')

  const cardHolderNameUpperCase = cardHolderName.toUpperCase()

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeCardholderName = event => {
    setCardHolderName(event.target.value)
  }

  return (
    <AppContainer>
      <CreditCardContainer>
        <CreditCardHeadingContainer>
          <CreditCardHeading>CREDIT CARD</CreditCardHeading>
          <HorizontalLine />
          <CardContainer>
            <Card data-testid="creditCard">
              <CardNumber>{cardNumber}</CardNumber>
              <Text>CARDHOLDER NAME</Text>
              <CardHolderName>{cardHolderNameUpperCase}</CardHolderName>
            </Card>
          </CardContainer>
        </CreditCardHeadingContainer>
      </CreditCardContainer>
      <PaymentContainer>
        <PaymentMethodContainer>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <Input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeCardNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={cardHolderName}
            onChange={onChangeCardholderName}
          />
        </PaymentMethodContainer>
      </PaymentContainer>
    </AppContainer>
  )
}

export default CreditCard
