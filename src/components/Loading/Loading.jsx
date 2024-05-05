import React from "react";
import ReactLoading from 'react-loading';
import './Loading.css'


function Loading () {
    return  <ReactLoading className="loading" type={'spin'} color={'#000'} height={'5%'} width={'5%'} />
}

export default Loading