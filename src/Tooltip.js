import {useState} from "react";
import "./Tooltip.css"

function Tooltip({position, children}) {
    const[Tooltip,setTooltip] = useState(false);

    function handleClick(){
        setTooltip(!Tooltip)
    }

    function getTooltipPosition(){
        switch(position){
            case 'top':
                return 'top';
            case 'bottom':
                return 'bottom';
            case 'left':
                return 'left';
            case 'right':
                return 'right';
            default:
                return 'top'     
        }
    }
    console.log(getTooltipPosition())
 return(
    <div>
        <div className="press" onClick={handleClick}>
            {children}
        </div>
        {Tooltip && (
            <div className={getTooltipPosition()}>
                Show
            </div>
        )}
    </div>
 )
}

export default Tooltip;