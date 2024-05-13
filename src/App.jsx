import { useState } from 'react'
import './App.css';
import StaffListItem from './components/StaffDirectory/StaffDirectory.jsx';
import NavItems from './components/nav/nav.jsx';
import CoPage from './components/CompanyHistory/CompanyHistory.jsx';
import PastWork from './components/PastWork/PastWork.jsx';

const App = () => {
const [showStaff, setShowStaff] = useState(false);
const [ShowCompanyHistory, setShowCompanyHistory] = useState(false);
const [ShowPastWork, setPastWork] = useState(false);
const [page, setPage] = useState('Company Page');
const [staff, setStaff] = useState('Company Page');
const [currentSection, setCurrentSection] = useState('Company Page');




const handleClickShowStaff = (staff) => {
  setShowStaff(!showStaff);
}

const handleClickShowCompanyHistory = () => {
  setShowCompanyHistory(!ShowCompanyHistory);
}

const handleClickShowPastWork = () => {
  setPastWork(!ShowPastWork);
}

const [StaffList, setStaffList] = useState([
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
  }
  ]
);
const [sectionToShow, setSectionToShow] = useState('Company Page');
  return (
    <>
    <div className="Nav">
      <ul>
        <NavItems
        handleClickShowStaff= {handleClickShowStaff}
        handleClickShowCompanyHistory= {handleClickShowCompanyHistory}
        handleClickShowPastWork= {handleClickShowPastWork}
        />

      </ul>
    </div>

    {/* {ShowCompanyHistory ? 
    CoPage.map((companyHistory) => (
      <CoPage
      key={companyHistory}
      companyHistory={companyHistory}
      />
    )
  )
  : null} */}

  {ShowPastWork ?
    <PastWork/>: null}



{ShowCompanyHistory ? 
      <CoPage/>: null}

    {showStaff ? 
    <h1>Staff List</h1>
    : null}
    {showStaff ?
    
    StaffList.map((staff) => (
      <StaffListItem 
      key={staff.firstName}
      staff={staff}
      />
    )
  )
  : null}
 
    </>
)
}


export default App;
