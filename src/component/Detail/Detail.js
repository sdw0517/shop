import React, { useState } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let box = styled.div`
  padding : 20px;
  
`;
let 제목 = styled.h4`
  font-size : 25px;
  color : ${ props => props.색상 }
`;

function Detail (props){

      let {id} = useParams();
      let history = useHistory();
      let findProduct = props.shoes.find(x => x.id == id);

    return (
        <div className="container">
          <box>
           <제목 className="red">상세페이지</제목>
          </box>
            <div className="my-alert">
             <p>재고가 얼마 남지 않았습니다</p>
            </div> 
        <div className="row">
          <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes1.jpg"} width="100%" />
          </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findProduct.title}</h4>
          <p>{findProduct.content}</p>
          <p>{findProduct.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
          <button className="btn btn-danger" onClick={ ()=>{
            history.goBack();
            // push('/') 홈으로 이동
          } }>뒤로가기</button> 
          </div>
        </div>
      </div> 

    )
}

export default Detail;