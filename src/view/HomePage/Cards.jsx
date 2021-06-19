import React, {useState, useEffect} from 'react'
import './Cards.css'
import {data} from './data'
// 이 페이지는 왠만하면 state를 건드리지 않는 편이 좋다. retrun 안에 코드들이 무겁기 때문이다.


function checkMobileDevice() {
    var mobileKeyWords = new Array('Android', 'iPhone', 'iPod', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson');
    for (var info in mobileKeyWords) {
        if (window.navigator.userAgent.match(mobileKeyWords[info]) != null) {
            return true;
        }
    }
    return false;
}

const Cards = () =>  {
    const [CardObjects, setCardObjects] = useState([]);

    useEffect(() => {       /// 심리테스트 데이터를 받아와서 CardObjects state에 넣는다.
        const {item} = data;
        const items = [];
        item.map(v => {
            items.push(v);
        })
        setCardObjects(items);
    }, [])

    if(checkMobileDevice()) {
        return (
            <section className = "container">
                <div className = "items"> 
                    {CardObjects.map((v,i) =>{
                        return <div key={v.title + v.author}className="item">
                                <img src={v.imgsrc} alt={v.title} title={v.title}/>
                                <h3 className="item__title">{v.title} {v.testType}</h3>
                                <div className="btnContainer">
                                    <div className="btn">
                                        <div className="btn-eff"></div>
                                        <a onClick={() => location.href = v.link}>시작하기</a>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </section>
        )
    } else {
        return (
            <section className = "container">
                <div className = "items"> 
                    {CardObjects.map((v,i) =>{
                        return <div key={v.title + v.author}className="item">
                            <img src={v.imgsrc} alt={v.title} title={v.title}/>
                            <h3 className="item__title">{v.title} 심리테스트</h3>
                                <p className="item__genre">{v.author}</p>
                                <p className="item__summary">{v.summary}</p>
                                <div className="btnContainer">
                                    <div className="btn">
                                        <div className="btn-eff"></div>
                                        <a onClick={() => location.href = v.link}>시작하기</a>
                                    </div>
                                </div>
                                <h5 className="item__year">출시일 : {v.years}</h5>
                        </div>
                        }
                    )
                    }
                </div>
            </section>
        )
    }
}



export default Cards;

