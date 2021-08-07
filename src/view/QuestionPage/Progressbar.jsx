import React from 'react'
import styled from 'styled-components'
const Progressbar = ({ count, length}) => {

    return (
        <ProgressBar>
            <HighLight width={(count/ length)*100+"%"}></HighLight>
            <Circle left={(count/ length)*100 - 7 + "%"}></Circle>
            <Span>{count + 1}/{length + 1}</Span>
        </ProgressBar>
    )
}
const Span = styled.div`
    position: absolute;
    top:-15px;
    left:70px;
    color:#263DBE;
`
const ProgressBar = styled.div`
    position : relative;
    background: #eee;
    width: 200px;
    height: 20px;
    top: 15px;
    border-radius: 25px;
`;
const HighLight = styled.div`
    background: #20BFD6;
    width: ${props=> props.width === "NaN%" ? "0%" : props.width};
    height: 20px;
    transition: width 1s;
    border-radius: 25px;
`;
const Circle = styled.div`
    position: absolute;
    background: white;
    border: 3px solid #20BFD6;
    left:${props=> props.left === "NaN%" ? "-5%" : props.left};
    top:-5px;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    transition: left 1s;
`;
export default Progressbar
