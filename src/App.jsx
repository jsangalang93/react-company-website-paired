import { useState } from 'react'
import './App.css';
import StaffListItem from './components/StaffDirectory/StaffDirectory.jsx';
import NavItems from './components/nav/nav.jsx';


const App = () => {

const [navItems, setNavItems] = useState([]);
const [staff, setStaff] = useState([]);
const [currentSection, setCurrentSection] = useState('Company Page');

const StaffList = [
{
  firstName: 'Jordan',
  lastName: 'Sangalang',
  title: 'Junior Dev',
  yearStarted: '1986',
},
{
  firstName: 'Rayshawn',
  lastName: 'Jones',
  title: 'Junior Dev',
  yearStarted: '1993',
},
];

const StaffListHandler = (staff, index) => {
  setStaff(staff);

}



  return (
    <>
    <div className="Nav">
      <ul>
        {navItems.map((navItem) => (
        <navItems 
        key={navItem.index}
        navItem={navItem}
        navItems={navItems}/>
      ))}

      </ul>
    </div>

    <h1>Company Page</h1>
    {StaffList.map((staff, index) => (
      <StaffListItem
      key={index}
      staff={staff}
      />
    ))}
    </>
  );
}

export default App;
