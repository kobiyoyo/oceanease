import React from 'react';
import { Typography, Divider,Icon} from 'antd';
import {NavLink} from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';
const { Title, Paragraph, Text } = Typography;



  
const About = ()=>(
<div >
<div className='breadLink'>
<NavLink to='/' exact={true}>Home</NavLink> <div style={{ padding: '0 20px'}}><Icon type="arrow-right" /> </div> <div>About</div>
</div>
<div className='contentWrap' >
<div className='content' > 
 
<Title  key="0">About</Title>
<p  key="1">
Ocean-ease ltd is a full-service, Underwater ROV Inspection Company, providing innovative and proven technical services to the offshore oil & gas and Maritime Industries.
Ocean-ease ltd is a company founded by ROV and offshore professionals from a need to provide a safe and cost-effective underwater inspection solutions to the offshore oil & gas / marine customers and clients.
Our services use the latest innovative Mini ROV technologies as we are innovators in the use of Mini ROVs.
</p>
<p  key="2">We research new technology, particularly subsea tools that can help us improve the accuracy of our data and extend the operational limits and service capabilities of our ROVs. 
The tools include visual and non-destructive testing (NDT) inspection sensors, cleaning equipment and manipulators to control the sensors and stabilise the ROV to the structure.
Our ROV systems are significantly cheaper to mobilise and maintain while on projects due to the latest innovate technologies.
</p>
<p  key="3">
 With our portable innovative ROV Control station, our systems and services can be mobilised easily nationwide to your project location. 
For further details of what we can provide, please contact us. Ocean-ease ltd is a company that wishes to help our clients achieve their aims in the best possible way.
 This being the best results while reducing costs and most importantly, supplying the greatest safe systems of work.
</p>

 </div>
 </div>

 </div>

 
 
 
 

)
export default About;