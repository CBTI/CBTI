import React, { useState, useEffect, memo } from 'react'
import { questionData } from '../../../data/questionData'
import ResultPage from '../ResultPage/ResultPage'
import './QuestionPage.css'
let userAnswer = [];
const QuestionPage = memo((props) => {

    const [MBTIIndex, setMBTIIndex] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(0);
    const [isEnd, setIsEnd] = useState(false);
    const { questionArray } = questionData;

    useEffect(() => {
        const { questionArray } = questionData;
        for(let i = 0; i < questionArray.length; i++){
            if(questionArray[i].key === props.Key){
                setMBTIIndex(i);
                setEndIndex(questionArray[i].questions.length);
                break;
            }
        }
    }, [])

    const answerToQuestion = (e) => {
        setQuestionIndex((prevIndex) => {
            return ++prevIndex;
        })
        if(endIndex === questionIndex + 1) setIsEnd(true);
        userAnswer.push(e.target.dataset.value);
    }

    return (
        <>
            <section className = "question__container">
                <div className="item__question">
                    {isEnd ?
                        <ResultPage userAnswer={userAnswer}/>
                        :
                        <>
                            <ol className="item__question__list">
                                <div className="item__question__list__infomation">
                                    <li className="item__question__title">{questionArray[MBTIIndex].name}</li>
                                    <li className="item__question__question">질문 : {questionArray[MBTIIndex].questions[questionIndex].question}</li>
                                    <li className="item__question__question">진행률 : {questionIndex + 1}/{endIndex}</li>
                                </div>
                                <div className="item__question__answer">
                                    <li data-value='1' onClick={answerToQuestion}>1. {questionArray[MBTIIndex].questions[questionIndex].Answer[0]}</li>
                                    <li data-value='2' onClick={answerToQuestion}>2. {questionArray[MBTIIndex].questions[questionIndex].Answer[1]}</li>
                                    <li data-value='3' onClick={answerToQuestion}>3. {questionArray[MBTIIndex].questions[questionIndex].Answer[2]}</li>
                                </div>
                            </ol>
                        </>
                    }
                </div>
            </section>
        </>
    )
})

export default QuestionPage
