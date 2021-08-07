import React, {useState, useEffect} from 'react'
import './Cards.scss'
import { actionCreators } from '../../redux/modules/user';
import { useDispatch } from 'react-redux';

import {data} from '../../data/data'

function checkMobileDevice() {
    var mobileKeyWords = new Array('Android', 'iPhone', 'iPod', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson');
    for (var info in mobileKeyWords) {
        if (window.navigator.userAgent.match(mobileKeyWords[info]) != null) {
            return true;
        }
    }
    return false;
}


const Cards = ({history}) =>  {
    const dispatch = useDispatch();
    const [CardObjects, setCardObjects] = useState([]);
    useEffect(() => {       /// 심리테스트 데이터를 받아와서 CardObjects state에 넣는다.
        const {item} = data;
        const items = [];
        item.map(v => {
            items.push(v);
        })
        setCardObjects(items);
    }, [])

    const selectQuestion = (key) => {
        sessionStorage.setItem("question_id", key);
        dispatch(actionCreators.selectQuestion(key));
        history.push(`/detail:${key}`);
    }


    // PC화면에선 이미지, 제목, 장르, 만든이, 설명, 시작하기버튼, 출시일이 있고
    // 모바일화면에선 장르, 설명, 출시일을 제외한 나머지가 있습니다. 
    // 공통되는 부분들은 합치고 차이점들만 다르게 해놓은 것 뿐입니다.
    const Getdata = (key, imgsrc, title, years, author, summary, detail_summary, link, testType) => {
        return (
            <>
                <div key={key}className="card__item">
                    <img onClick={() =>selectQuestion(key)} src={imgsrc} alt={title} title={title}/>                               {/* 이미지 클릭시 /detail-page로 이동 */}
                    <h3 className="item__title">{title} {testType}</h3>
                    {!checkMobileDevice() &&                                                    /* 모바일 화면이 아니라면 작가이름과 설명을 return */
                        <>
                            <p className="item__genre">{author}</p>
                            <p className="item__summary">{summary}</p>
                        </>
                    }
                    <div className="btnContainer">
                        <div className="btn">
                            <div className="btn-eff"></div>
                            <a onClick={() => selectQuestion(key)}>시작하기</a>
                        </div>
                    </div>
                    {!checkMobileDevice() &&                                                    /* 모바일 화면이 아니라면 출시일을 return */
                        <h5 className="item__year">출시일 : {years}</h5>
                    }
                </div>
            </>
        );
    }


    return (                                    // 랜더링 안에 코드가 짧아지니 살짝 빨라진거같지 않습니까? 사실 저도 잘 모르겠습니다. 근데 가독성은 좋아보입니다.
        <section className = "cards__container">
            <div className = "cards__items"> 
            {CardObjects.map((v,i) =>{
                return Getdata(
                    v.key,                          // 고쳐야할 점 : 각 Card컴포넌트의 고유한 키값이 index이면 좋지 않다. 해결방법을 찾아봐야할듯 
                    v.imgsrc,
                    v.title,
                    v.years,
                    v.author,
                    v.summary,
                    v.detail_summary,
                    v.link,
                    v.testType)
            })}
            </div>
        </section>
    )
}



export default Cards;