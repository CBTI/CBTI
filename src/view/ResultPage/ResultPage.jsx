import React from 'react'
import './ResultPage.scss';
import { useSelector } from 'react-redux';
import HomeButton from '../../Component/HomeButton';
import Menu from '../menu/MenuBar'
import Time from './Time'
function ResultPage(props) {
    const Answer = useSelector(state => state.user.Answer)
    const question_id = useSelector(state => state.user.question_id)
    return (
        <>
            <Menu/>
            <div className="result__container">
                <div className="result__item">
                    <p className="item__result__title">ResultPage입니다</p>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpsERHChG0GkHahQz1z0Psx-8Zia4n58TmaQ&usqp=CAU'/>
                    <p className="item__result__title">당신은 ENFJ군요!</p>
                    

                    {/* <p className="item__result__Answer">선택하신 답은<br/>
                    {Answer.map((v,i) => {
                        return(
                            <>
                            <span> {i + 1}번 : {v} </span>
                            <br/>
                            </>
                            )
                        })}
                    입니다.</p> */}
                    <p className="item__result__Time">테스트 ID : {question_id}</p>
                    <Time/>
                    <HomeButton history={props.history}></HomeButton>
                </div>
            </div>
        </>
    )
}

export default ResultPage
