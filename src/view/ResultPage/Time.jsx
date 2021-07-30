import React, { useEffect } from 'react'

const Time = () => {

    useEffect(() => {
        const startCount = sessionStorage.getItem("startCount");
        const _startCount = new Date();
        const finishCount = new Date();
        _startCount.setTime(startCount);
        
        document.querySelector('.startCount').innerHTML = 
                                                        "시작시간 : " + 
                                                        _startCount.getFullYear() + "년 " +
                                                        _startCount.getMonth() + "월 " +
                                                        _startCount.getDate() + "일 " +
                                                        _startCount.getHours() + "시 " +
                                                        _startCount.getMinutes() + "분 " +
                                                        _startCount.getSeconds() + "초 ";
        document.querySelector('.finishCount').innerHTML = 
                                                        "종료시간 : " + 
                                                        finishCount.getFullYear() + "년 " +
                                                        finishCount.getMonth() + "월 " +
                                                        finishCount.getDate() + "일 " +
                                                        finishCount.getHours() + "시 " +
                                                        finishCount.getMinutes() + "분 " +
                                                        finishCount.getSeconds() + "초 ";                              
    }, [])

    return (
        <>
            <p className="item__result__Time startCount">{}</p>
            <p className="item__result__Time finishCount">{}</p>
        </>
    )
}

export default Time
