import React from 'react'
import HomeButton from '../../Component/HomeButton';
import { withRouter } from 'react-router'
function ResultPage(props) {

    return (
        <>
            <div className="item__result">
                <p className="item__result__title">ResultPage입니다</p>
                <p className="item__result__title">당신은 바보군요!</p>
                <p className="item__result__Answer">선택하신 답은
                {props.userAnswer.map((v,i) => {
                    return(
                        <span> {i + 1}번 : {v} </span>
                    )
                })}
                입니다.</p>
                <HomeButton history={props.history}></HomeButton>
            </div>
        </>
    )
}

export default withRouter(ResultPage)
