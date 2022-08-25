/* eslint-disable no-unused-vars */
import React, { useState }  from 'react'

import * as S from './styles'
type TQuizzContent = {}



const QuizzContent: React.FC<TQuizzContent> = () => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const dummyData = [
        {
            category: "History",
            type: "boolean",
            difficulty: "hard",
            question: "Joseph Stalin&#039;s real name was Ioseb Bessarionis dze Dzugashvili.",
            correct_answer: "True",
            incorrect_answers: [
                "False"
            ]
        },
        {
            category: "SEILA",
            type: "boolean",
            difficulty: "hard",
            question: "ALGUMA COISA",
            correct_answer: "True",
            incorrect_answers: [
                "False"
            ]
        },
        {
            category: "TERCEIRA COISA",
            type: "boolean",
            difficulty: "hard",
            question: "OUTRA COISA DA OUTRA COISA",
            correct_answer: "FALSE",
            incorrect_answers: [
                "TRUE"
            ]
        }
    ]
  /* const getAllQuestions = useCallback(async () => {
    const res = await new GetQuizzDataService().execute()
    console.log(res, 'res')
  }, [])

  useEffect(() => {
    getAllQuestions()
  },[]) */

  return (
    <S.Wrapper>
      <S.Content>
        <S.Header>{dummyData[currentQuestion].category}</S.Header>
        <S.Text>You will be presented with 10 True or False questions.</S.Text>
        <S.Text>Can you Score 100%?</S.Text>
        <S.Button>Begin</S.Button>
      </S.Content>
    </S.Wrapper>
  )
}

export default QuizzContent
