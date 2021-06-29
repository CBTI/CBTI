import React, { useState, useEffect } from 'react';
import './DetailPage.css'
import MenuBar from '../menu/MenuBar'

const DetailPage = (props) => {
    const [temp, setTemp] = useState({});
    useEffect(() => {
        const { state } = props.location;
        console.log(props);      // props의 구조를 확인바랍니다. props->location->state에 mbti정보들이 있습니다.
        setTemp(state);
    }, [])
    
    return (
        <> 
            <MenuBar/>
            <section className = "container">
                <div key={temp.title + temp.author}className="detail__item">
                    <div>
                        <img src={temp.imgsrc} alt={temp.title} title={temp.title}/>
                    </div>
                    <h3 className="item__title">{temp.title} {temp.testType}</h3>
                    <p className="item__genre">{temp.author}</p>
                    <p className="item__summary">{temp.summary}</p>
                </div>
            </section>
        </>
    )
}

export default DetailPage;
