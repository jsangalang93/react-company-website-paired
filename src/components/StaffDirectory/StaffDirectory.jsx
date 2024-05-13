

const StaffListItem = (props) => {
const {staff} = props;
    return (
        <>
        <div className='staff'>
        <li>
            
                <p>Name: {staff.firstName} {staff.lastName}</p>
                <p>Title: {staff.title}</p>
                <p>Started: {staff.yearStarted}</p>
        </li>
        </div>
        </>
    )
}

export default StaffListItem;