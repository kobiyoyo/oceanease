import React from 'react';
import { Typography, Divider,Icon,Collapse } from 'antd';
import {NavLink} from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}
const { Title, Paragraph, Text } = Typography;


class Services extends React.Component {


  
  render() {
    return (
      <div >
      <div className='breadLink'>
      <NavLink to='/' exact={true}>Home</NavLink> <div style={{ padding: '0 20px'}}><Icon type="arrow-right" /> </div> <div>Services</div>
      </div>
      <div className='contentWrap' >
      <div className='content' >
 
      <Title  key="0">Services</Title>
      <p  key="1">Ocean-Ease ltd provides an extensive portfolio of professional ROV underwater inspection and intervention services which include:</p> 

      
      <Collapse
      key="2"
      bordered={false}
      // className='accord'
      defaultActiveKey={['1']}
      onChange={callback}
      expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
      accordion >





      <Panel header="Asset Integrity Inspections" key="1">
        <p>•	General visual inspections (GVIs) and close visual inspections (CVI) using high definition cameras</p>
        <p>• CP Survey</p>
        <p>• Non destructive Tests</p>
        <p>• Photogrametry / Laser scan</p>
        <p>• Coating / Marine growth assesment</p>
      </Panel>

      <Panel header="Hull & Structural Inspection" key="2">
        <p>•	NDT</p>
      </Panel>
      
        <Panel header="Inspection for class" key="3">
        <p>•	Underwater Inspections in Lieu of Dry-Docking (UWILD) </p>
        <p>•	Underwater portions of In-Service Inspection Plans (ISIP)</p>
      </Panel>

        <Panel header="Underwater cleaning" key="4">
        <p>•	Cavitation cleaning  </p>
        <p>•	Brush</p>
      </Panel>


      <Panel header="Non-Destructive Testing" key="5">
      <p>•	Ultrasonic wall thickness</p>
      <p>•	Flooded member detection</p>
      </Panel>
      <Panel header="Cathodic Protection Survey" key="6">
      <p>•	Contact CP probe</p>
      <p>•	Proximity CP probe</p>
      <p>•	FIGS (Field Gradient Sensor)s</p>
      </Panel>


      <Panel header="Metrology and Damage Assessment" key="7" >
      <p></p>
    </Panel>
      
    <Panel header="Dive Support Operations" key="8" >
    <p></p>
  </Panel>
  
  <Panel header="Seabed scour monitoring" key="9" >
  <p></p>
</Panel>

<Panel header="Coating Condition / Marine growth assessment" key="10" >
  <p></p>
</Panel>
<Panel header="Mooring and Riser Turret Inspections" key="11" >
  <p></p>
</Panel>

<Panel header="Photogrammetry, Laser Scanning and 3D modelling during inspections" key="12" >
  <p></p>
</Panel>
    </Collapse>

       </div>
       </div>
      
       </div>
      
       
       
       
    );
  }
}

export default Services;