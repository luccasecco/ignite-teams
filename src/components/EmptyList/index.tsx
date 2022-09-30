import { Container, Message } from './styles'

interface EmpytListProps {
  message: string;
}

export function EmptyList({message}: EmpytListProps){
  return(
    <Container>
      <Message>
        {message}
      </Message>
    </Container>
  )
}