/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { IQuizzData } from '../../interfaces/IQuizzData'

import * as S from './styles'

interface IQuizzFinalized {
  answers: IQuizzWithAnswers[]
  total: number
}
interface IQuizzWithAnswers {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
  isCorrect: boolean
}

type TQuizzContent = {}

const QuizzContent: React.FC<TQuizzContent> = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [quizzAnswers, setQuizzAnswers] = useState<IQuizzWithAnswers[]>([])

  const dummyData = [
    {
      category: 'History',
      type: 'boolean',
      difficulty: 'hard',
      question: 'Joseph Stalin&#039;s real name was Ioseb Bessarionis dze Dzugashvili.',
      correct_answer: 'True',
      incorrect_answers: ['False']
    },
    {
      category: 'SEILA',
      type: 'boolean',
      difficulty: 'hard',
      question: 'ALGUMA COISA',
      correct_answer: 'True',
      incorrect_answers: ['False']
    },
    {
      category: 'TERCEIRA COISA',
      type: 'boolean',
      difficulty: 'hard',
      question: 'OUTRA COISA DA OUTRA COISA',
      correct_answer: 'FALSE',
      incorrect_answers: ['TRUE']
    }
  ]

  const handleAnswerButton = (answer: string) => {
    if (currentQuestion < dummyData.length) {
      setQuizzAnswers((oldState: IQuizzWithAnswers[]) => {
        if (answer === dummyData[currentQuestion].correct_answer) {
          const currentData: IQuizzWithAnswers = { ...dummyData[currentQuestion], isCorrect: true }
          return [...oldState, currentData]
        } else {
          const currentData: IQuizzWithAnswers = { ...dummyData[currentQuestion], isCorrect: false }
          return [...oldState, currentData]
        }
      })
      const nextQuestion: number = currentQuestion + 1
      return setCurrentQuestion(nextQuestion)
    }
  }

  useEffect(() => {
    console.log(quizzAnswers, 'quizzAnswers')
  }, [quizzAnswers])
  /* const getAllQuestions = useCallback(async () => {
    const res = await new GetQuizzDataService().execute()
    console.log(res, 'res')
  }, [])

  useEffect(() => {
    getAllQuestions()
  },[]) */

  return (
    <S.Wrapper>
      {currentQuestion === dummyData.length && (
        <S.Content>
          <S.Header>ACABOU</S.Header>
        </S.Content>
      )}
      {currentQuestion < dummyData.length && (
        <S.Content>
          <S.Header>{dummyData[currentQuestion].category}</S.Header>
          <S.Text dangerouslySetInnerHTML={{ __html: dummyData[currentQuestion].question }} />
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
