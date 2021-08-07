import React, { useState, useEffect, memo } from 'react'
import { HomeOutlined }from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { questionData } from '../../data/questionData'
import { actionCreators } from '../../redux/modules/user';
import './QuestionPage.scss'
import Progressbar from './Progressbar'

function fadein(item) {
    item.style.opacity = "0";
    item.animate( {
        opacity: '1'
    }, 550);
    setTimeout(function() {
        item.style.opacity = "1";
    }, 500);
}
let userAnswer = [];
const QuestionPage = memo((props) => {
    const { history } = props;
    const dispatch = useDispatch();
    const [MBTIIndex, setMBTIIndex] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(0);
    const { questionArray } = questionData;
    const question_id = sessionStorage.getItem("question_id");

    useEffect(() => {
        userAnswer=[];
        const startCount = new Date().getTime();
        sessionStorage.setItem("startCount", startCount);

        for(let i = 0; i < questionArray.length; i++){
            if(questionArray[i].key === question_id){
                setMBTIIndex(i);
                setEndIndex(questionArray[i].questions.length);
                break;
            }
        }
    }, [])

    const answerToQuestion = (e) => {
        const liList = document.querySelectorAll('.item__question__answer li');
        const infomation = document.querySelector('.item__question__list__infomation');
        userAnswer = [...userAnswer, e.target.dataset.value];
        setQuestionIndex((prevIndex) => {
            return ++prevIndex;
        })
        for(let liItem of liList) {
            fadein(liItem);
        }
        fadein(infomation);

        // userAnswer.push(e.target.dataset.value);
        // console.log(e.target.dataset.value);
        if(endIndex === questionIndex + 1) {
            dispatch(actionCreators.submitAnswer(userAnswer));
            history.replace(`/result:${question_id}`);
        }
    }

    return (
        <>
            <section className = "container">
                <div className="item__question">
                    <ol className="item__question__list">
                        <div className="item__question__list__infomation">
                            <Link to="/">
                                <HomeOutlined className="question__item__homebutton"/>
                            </Link>
                            <li className="item__question__title">{questionArray[MBTIIndex].name}</li>
                            <li className="item__question__title">질문 : {questionArray[MBTIIndex].questions[questionIndex].question}</li>
                            <div className="item__question__progress">
                                <span>진행률 : </span>
                                <div className="item__question__progress__Bar">
                                    <Progressbar count={questionIndex} length={endIndex-1}/>
                                    {/* <span>{questionIndex + 1}/{endIndex}</span> */}
                                </div>
                            </div>
                        </div>
                        <div className="item__question__answer">
                            <li data-value='1' onClick={answerToQuestion}>1. {questionArray[MBTIIndex].questions[questionIndex].Answer[0]}</li>
                            <li data-value='2' onClick={answerToQuestion}>2. {questionArray[MBTIIndex].questions[questionIndex].Answer[1]}</li>
                            <li data-value='3' onClick={answerToQuestion}>3. {questionArray[MBTIIndex].questions[questionIndex].Answer[2]}</li>
                        </div>
                    </ol>
                </div>
            </section>
        </>
    )
})

export default QuestionPage
