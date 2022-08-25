import React from 'react'
import * as S from './styles'
type TQuizzContent = {}

const QuizzContent:React.FC<TQuizzContent> = () => {
  return (
<S.Wrapper>
      <S.Content>
        <S.Header>Welcome to the Trivia Challenge</S.Header>
        <S.Text>You will be presented with 10 True or False questions.</S.Text>
        <S.Text>Can you Score 100%?</S.Text>
        <S.Button>Begin</S.Button>
      </S.Content>
    </S.Wrapper>
  )
}

export default QuizzContent