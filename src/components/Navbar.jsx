import {useState} from 'react';
import { pageType } from '../App';
import '../bootstrap.css';
import {Tabs, Tab} from 'react-bootstrap';


export default function Navbar(props){

const[key, setKey] = useState(1);

return(
<div>
<Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(eventKey) => {   props.changePage(eventKey); 
                                    setKey(eventKey);   
                                }   
                  }>

        <Tab eventKey={pageType.PTO} title="PTO"> </Tab>
        <Tab eventKey={pageType.Skills} title="Skills" > </Tab>

</Tabs>

</div>

);


}