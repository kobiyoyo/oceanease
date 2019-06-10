import React from 'react';
import { Typography, Divider,Icon} from 'antd';
import {NavLink} from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';
const { Title, Paragraph, Text } = Typography;



  
const Equipment = ()=>(
<div >
<div className='breadLink'>
<NavLink to='/' exact={true}>Home</NavLink> <div style={{ padding: '0 20px'}}><Icon type="arrow-right" /> </div> <div>Equipment</div>
</div>

<div className='contentWrapEquip' >
<div className='ROV'>
<img src={require('../images/equip.png')} alt='one'/>

</div>

            <div className='contentEquip' >
            <QueueAnim key="1" delay={400}  ease={['easeOutQuart', 'easeInOutQuart']}>
                <Title key="0" >Equipment</Title>
                <p key="1" >
                Our value driven, high quality service offering is achieved by knowledgeable and experienced personnel utilising high quality ROV system and tooling.
                Ocean-Ease ltd has an impressive team of highly skilled, dedicated support team to ensure that all of our equipment is serviced and managed effectively and efficiently throughout the project cycle as well as equipment and accessories. We are certain that we are the subsea ROV Inspection Company suitable for your needs.
                With our unique Inspection ROV system and experienced ROV personnel, we deliver high quality, reliable and cost effective Subsea Inspection service.

                </p>

                </QueueAnim>
            </div>
 </div>

 </div>

 
 
 
 

)
export default Equipment;