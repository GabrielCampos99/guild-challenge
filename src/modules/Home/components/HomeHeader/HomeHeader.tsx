import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

type THomeContent = {}

const HomeContent: React.FC<THomeContent> = () => {
  const navigate = useNavigate()
  const redirect = () => {
    return navigate('/quizz')
  }
  return (
    <S.Wrapper>
      <S.Content>
        <S.Header>Welcome to the Trivia Challenge</S.Header>
        <S.Text>You will be presented with 10 True or False questions.</S.Text>
        <S.Text>Can you Score 100%?</S.Text>
        <S.Button onClick={redirect}>Begin</S.Button>
      </S.Content>
    </S.Wrapper>
  )
}

export default HomeContent
