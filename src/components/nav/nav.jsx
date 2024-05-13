import {useState} from 'react';

const NavItems = ({navItem, handleClickShowStaff, handleClickShowCompanyHistory, handleClickShowPastWork}) => {
    return ( 
        
            <>

            
            <nav className='Nav'>
            <li>
            <button onClick={() => handleClickShowStaff('staff')}>Staff List</button>
            <button onClick={() => handleClickShowCompanyHistory()}>Company History</button>
            <button onClick={() => handleClickShowPastWork()}>Past Work</button>
                <a href= 'Past Work'>Past Work</a>
                <a href= 'Contact Us'>Contact Us</a>
                <a href= 'External Links'>External Links</a>
            </li>
            </nav>
            </>
        
    );
}

export default NavItems;