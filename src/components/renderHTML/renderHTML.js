
import React from 'react';


const RenderHTML = ({HTML, i, click, value}) => (<li data-item={value} onClick={click} className='dropItem' key={i} dangerouslySetInnerHTML={{__html: HTML}}></li>);


export default RenderHTML;
