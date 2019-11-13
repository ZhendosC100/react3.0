import React from 'react';
import './spinner.css';

const Spinner = () => {
    return(
        <div className="lds-css ng-scope">
            <div className="lds-blocks"><div className="s1"></div><div className="s2"></div><div className="s3"></div><div className="s4"></div><div className="s5"></div><div className="s6"></div><div className="s7"></div><div className="s8"                  ></div></div>
        </div>
    )
}

export default Spinner;