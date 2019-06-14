import React from 'react';
import {Icon} from 'antd';
import { Typography, Divider } from 'antd';
import {NavLink} from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;
const Footer = ()=>(
<div>

<div className='footerWrap'>
<div>
    <Paragraph className='paragraph'><span className='Strtitle'>Ocean-Ease LTD</span><br/>
    63, OGUNLANA DRIVE  SURULERE, LAGOS.<br/>info@oceanease.com.ng  <br/> +2348038592166 
    </Paragraph>
</div>

<div className='footerIcon'>
    <Icon type="facebook" />
    <Icon type="twitter" />
    <Icon type="instagram" />
    </div>

    <div className='footerMenu'>
    <p><NavLink className='Link' to='/about' exact={true} >About</NavLink></p> 
    <p><NavLink className='Link' to='/contact' exact={true} >Contact</NavLink></p> 
    <p><NavLink className='Link' to='/terms' exact={true} >Terms/Conditions</NavLink></p> 
    <p className='right'>© Copyright 2019 - All Rights Reserved</p>
    <div>
   

    </div>
    </div>

    
    
</div>

</div>


)
export default Footer;