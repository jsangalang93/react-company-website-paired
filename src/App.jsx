import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StaffListItem from './components/StaffDirectory.jsx';



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

StaffListHandler () => {
  
}

]
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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

export default App
