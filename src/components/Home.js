import React from 'react';
import {Carousel,Icon,Button} from 'antd';
import {NavLink} from 'react-router-dom';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Animate from 'rc-animate';
import Texty from 'rc-texty'
import 'rc-texty/assets/index.css';
const ScrollOverPack = ScrollAnim.OverPack;

class Home extends React.Component{
  


    render(){
return(
    <div style={{ margin:"0"}} >
    <Carousel autoplay effect="fade" easing='linear'>
    <div>
      <img   className="homeSlide" src={require('../images/1.jpg')}   alt='one'/>
    </div>
    <div>
    <img  className="homeSlide"  src={require('../images/3.jpg')}  alt='one'/>
    </div>
    <div>
    <img  className="homeSlide"  src={require('../images/10.jpg')} alt='one'/>
    </div>
  </Carousel>
  
<div className="icon-main">
<TweenOne className="tween-one" key="0" animation={{ opacity: 1 }}>
<div className="iconhead"><h1>Our Services</h1></div>
</TweenOne>

      <ul className='page1-box-wrapper'>
  
            <li className="listIcon" key='a'>
                <div className="page1-box">
                <div className="page1-image" >
                <img  src='https://gw.alipayobjects.com/zos/rmsportal/smwQOoxCjXVbNAKMqvWk.svg'  alt='one'/>
                </div><h3>Asset Integrity Inspections </h3>
                <p>General visual inspections (GVIs) and close visual inspections (CVI) using high definition cameras</p></div>
            </li>
            <li className="listIcon" key='b'>
                  <div className="page1-box">
                  <div className="page1-image" >
                  <img src="https://gw.alipayobjects.com/zos/rmsportal/RpJIQitGbSCHwLMimybX.svg" alt="img" />
                  </div><h3>Hull & Structural Inspection </h3>
                  <p>General visual inspections (GVIs) and close visual inspections (CVI) using high definition cameras</p></div>
            </li>
            <li className="listIcon" key='c'>
                  <div className="page1-box">
                  <div className="page1-image" >
                  <img src="https://gw.alipayobjects.com/zos/rmsportal/JsixxWSViARJnQbAAPkI.svg" alt="img1" />
                  </div><h3>Inspection for class </h3>
                  <p>Underwater Inspections in Lieu of Dry-Docking <b/>Underwater portions of In-Service Inspection Plans</p></div>
            </li>
       
        </ul>
       
</div>






<div className='page2-box-wrapper'>
    <div className="overlay-1">
   

       <div className="background-1">
       <ScrollOverPack always={false} playScale={0.3} >
       <div>
       <h1>
          <Texty  
          type='right'
          mode='sync'
          style={{fontSize:'25px'}}
          > Welcome to Ocean Ease
          </Texty>
       </h1>
       <QueueAnim key="1" delay={400}  ease={['easeOutQuart', 'easeInOutQuart']}>
      <p key="0">Ocean-Ease Ltd is a specialist ROV inspection company providing systems and personnel for the offshore oil & gas and marine industries.
      Our value driven, high quality and cost effective service offering is achieved by knowledgeable and experienced personnel utilising high quality ROV system and tooling.
      They understand the client’s requirements which in turn helps produce a very informative final report.</p>
      <Button key="1" type="primary" size='large'><NavLink to='/about' exact={true} ><span style={{color:'white'}}>READ MORE</span></NavLink> </Button>
      </QueueAnim>
      </div>
      </ScrollOverPack>
       </div>
  
    
    </div>
   
</div>
<div className='page3-box-wrapper'>
    <div className="overlay-2">
   

       <div className="background-2">
       <ScrollOverPack always={false} playScale={0.3}  >
       <div style={{textAlign:'left'}}>
       <h1>
       <Texty  
       type='right'
       mode='sync'
       style={{fontSize:'25px'}}
       > Why Ocean-Ease Ltd?
       </Texty>
    </h1>
    <QueueAnim key="1" delay={400}  ease={['easeOutQuart', 'easeInOutQuart']}>
<ul key="0">

    <li> Experienced & competent personnel</li>
    <li>  ROV owned by the company and readily available in Nigeria</li>
    <li>  Our ROV systems can be deployed extremely quickly to enable effective turnaround on must-do jobs.</li>
    <li>  Nigerian  owned and operated company – Local content</li>
    <li>  Our ROV is efficient to mobilise, can be manually deployed from small vessels, platforms or large FPSOs (cost effective)</li>
    
    </ul>
      <Button key="1" type="primary" size='large'><NavLink to='/services' exact={true}><span style={{color:'white'}}>READ MORE</span></NavLink> </Button>
      </QueueAnim>
      </div>
      </ScrollOverPack>
       </div>
    

    </div>
</div>
<div className='page4-box-wrapper'>
    <div className="overlay-3">
       <div className="background-3">
       <ScrollOverPack always={false} playScale={0.3}  >
       <div>
       <h1>
       <Texty  
       type='top'
       mode='sync'
       style={{fontSize:'25px'}}
       > Ready To Discuss Your Project?  
       </Texty>
    </h1>


           <p>There are many ways to contact us. You may drop us a line, give us a call or send an email, choose what suits you the most.</p>
       <Button type="primary" size='large'><NavLink to='/contact' exact={true}><span style={{color:'white'}}>WORK WITH US</span></NavLink></Button>
       </div>
       </ScrollOverPack>
       
       </div>
    </div>
</div>


</div>


) 

}


}
export default Home;