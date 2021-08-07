import React from 'react'
import './Upload.scss';
import MenuBar from '../menu/MenuBar'
import { imageSrc } from '../../data/imageSrc'
import { Link } from 'react-router-dom';
const Upload = () => {
    console.log(imageSrc.src);
    const srcArray = imageSrc.src;
    return (
        <>
            <MenuBar/>
            <div className="container">
                <div className="upload__item">
                    <div className="upload__item__div">
                        <img src={srcArray[0]}/>
                        <button className="upload__item__button">심리테스트 업로드</button>
                    </div>
                    <div className="upload__item__div">
                        <img src={srcArray[1]}/>
                        <button className="upload__item__button">캐릭터 업로드</button>
                    </div>
                    <Link to="/upload/scenarioPage">
                        <div className="upload__item__div">
                            <img src={srcArray[2]}/>
                            <button className="upload__item__button">시나리오 업로드</button>
                        </div>
                    </Link>
              </div>
            </div>
        </>
    )
}

export default Upload
