import React, { useState, useEffect } from 'react';
// import '../../../public/background.css';     // 왜 css파일을 import하지 않아도 적용이 되는 이유는 무엇일까..
// import './DetailPage.css';
import { Row, Col } from 'antd'; 
import MenuBar from '../menu/MenuBar'

const DetailPage = (props) => {
    const [temp, setTemp] = useState({});
    useEffect(() => {
        const { state } = props.location;
        console.log(props);      // props의 구조를 확인바랍니다. props->location->state에 mbti정보들이 있습니다.
        setTemp(state);
    }, [])
    
    // 테스트 이미지 <img src={require('./img/cbti.jpg)} alt="alt" title='title'/>
    return (
        <> 
        <MenuBar/>
            <section className = "container">
                <div className = "items"> 
                    <div key={temp.title + temp.author}className="item">
                        <img src={temp.imgsrc} alt={temp.title} title={temp.title}/>
                        <h3 className="item__title">{temp.title} {temp.testType} 상세정보</h3>
                        <p className="item__genre">{temp.author}</p>
                        <p className="item__summary">{temp.summary}</p>
                        <p className="item__summary">여기에 상세문을 붙여야 합니다</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DetailPage;
