import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IQuizzData } from '../../interfaces/IQuizzData'
import { IQuizzFinalized } from '../../interfaces/IQuizzFinalized'
import { IQuizzWithAnswers } from '../../interfaces/IQuizzWithAnswers'
import { GetQuizzDataService } from '../../services/GetQuizzDataService'

import * as S from './styles'

type TQuizzContent = {}

const QuizzContent: React.FC<TQuizzContent> = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [quizzQuestions, setQuizzQuestions] = useState<IQuizzData[]>()
  const [quizzAnswers, setQuizzAnswers] = useState<IQuizzFinalized>({ answers: [], total: 0 })
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const navigate = useNavigate()

  const redirect = () => {
    return navigate('/')
  }

  const handleAnswerButton = (answer: string) => {
    if (!quizzQuestions) return
    if (currentQuestion < quizzQuestions.length) {
      setQuizzAnswers((oldState: IQuizzFinalized) => {
        if (answer === quizzQuestions[currentQuestion].correct_answer) {
          const currentData: IQuizzWithAnswers = {
            ...quizzQuestions[currentQuestion],
            isCorrect: true
          }
          return { answers: [...oldState.answers, currentData], total: oldState.total + 1 }
        } else {
          const currentData: IQuizzWithAnswers = {
            ...quizzQuestions[currentQuestion],
            isCorrect: false
          }
          return { answers: [...oldState.answers, currentData], total: oldState.total }
        }
      })
      const nextQuestion: number = currentQuestion + 1
      return setCurrentQuestion(nextQuestion)
    }
  }

  const getAllQuestions = useCallback(async () => {
    setIsLoading(true)
    const res = await new GetQuizzDataService().execute()
    setIsLoading(false)
    if (!res) return alert('SOMETHING GOES WORNG')
    setQuizzQuestions(res)
  }, [])

  useEffect(() => {
    getAllQuestions()
  }, [])

  return (
    <S.Wrapper>
      {isLoading && <S.Header>LOADING...</S.Header>}
      {currentQuestion === quizzQuestions?.length && quizzAnswers && (
        <S.Content>
          <S.Header>
            You scored {quizzAnswers.total}/{quizzQuestions?.length}
          </S.Header>

          <S.ItemList>
            <>
              {quizzAnswers.answers.map((answer) => {
                return (
                  <div key={Math.random()} className={'final-statement'}>
                    {answer.isCorrect ? '✅' : '❌'}{' '}
                    <S.TextFinalized dangerouslySetInnerHTML={{ __html: answer.question }} />
                  </div>
                )
              })}
              <S.TextFinalized />
            </>
          </S.ItemList>

          <S.Button onClick={redirect}>PLAY AGAIN?</S.Button>
        </S.Content>
      )}
      {!!quizzQuestions && currentQuestion < quizzQuestions.length && (
        <S.Content>
          <S.Header>{quizzQuestions[currentQuestion].category}</S.Header>
          <S.Text dangerouslySetInnerHTML={{ __html: quizzQuestions[currentQuestion].question }} />
          <S.ButtonBox>
            <S.Button onClick={() => handleAnswerButton('True')}>True</S.Button>
            <S.Button onClick={() => handleAnswerButton('False')}>False</S.Button>
          </S.ButtonBox>
        </S.Content>
      )}
    </S.Wrapper>
  )
}

export default QuizzContent
