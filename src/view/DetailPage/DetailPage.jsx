import React, { useEffect, useState } from 'react';
import './DetailPage.scss'
import MenuBar from '../menu/MenuBar';
import { Button } from 'antd';
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import BackButton from '../../Component/BackButton';
import { useSelector } from 'react-redux';
import { data } from '../../data/data';

const DetailPage = (props) => {
    const question_id = useSelector(state => state.user.question_id)
    const { history } = props;
    const { item } = data;
    const [MBTIIndex, setMBTIIndex] = useState(0);
    useEffect(() => {
        const question_id = sessionStorage.getItem("question_id");
        for(let i = 0; i < item.length; i++){
            if(item[i].key === question_id){
                setMBTIIndex(i);
                break;
            }
        }
    }, [])
    
    return (
        <> 
            <MenuBar/>
            <section className = "detail__container">
                <div key={item[MBTIIndex].title + item[MBTIIndex].author}className="detail__item">
                    <img src={item[MBTIIndex].imgsrc} alt={item[MBTIIndex].title} title={item[MBTIIndex].title}/>
                    <h3 className="detail__item__title">{item[MBTIIndex].title} {item[MBTIIndex].testType}</h3>
                    <p className="detail__item__genre">{item[MBTIIndex].author}</p>
                    <p className="detail__item__summary">{item[MBTIIndex].detail_summary}</p>
                    <div>
                        <BackButton history={props.history} >뒤로가기</BackButton>
                        <Button type="primary" icon={<RightCircleOutlined />} onClick={() => history.push(`/question:${item[MBTIIndex].key}`)} style={{ marginLeft:"10px"}}  size="large">시작하기</Button>
                    </div>
                </div>
            </section>
        </>
  );
};

export default DetailPage;
