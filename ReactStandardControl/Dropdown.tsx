import * as React from 'react';
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";


function Dropdown1()
{
    
        return ( <Dropdown
						label="Select option"
						selectedKey="2"
						options={[
                            { key: "1", text: "16px" },
							{ key:"2", text: "16px" },
							{ key:"3", text: "16px" },
							{ key:"4", text: "16px" },
							{ key:"5", text: "16px" },
							{ key:"6", text: "16px" },
						]}
					/> );
    }
 
export default Dropdown1;