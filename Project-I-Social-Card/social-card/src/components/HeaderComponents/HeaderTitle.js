import React from 'react';
import './Header.css';
import Timestamp from 'react-timestamp';


function HeaderTitle() {
    return(
        <div className='HeaderTitle'>
            <h2>Lambda School </h2>
            <h3>@LambdaSchool <Timestamp time='1551300000' format='date' autoUpdate/></h3>
        </div>
        );
}

export default HeaderTitle;