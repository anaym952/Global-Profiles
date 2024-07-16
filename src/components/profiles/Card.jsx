
import './Profiles.css'
export const Card = ({user}) =>{
    return (
        <div className="card">
            <div className="img-container">
                <img src={user.image} alt="" />
            </div>
            <div className='card-text'>
                <h2>{user.firstName} {user.lastName}</h2>
                <h4>{user.age} y/o {user.gender}</h4>
                <h6>{user.email}</h6>
                <h5>{user.address.city}, {user.address.state}</h5>
            </div>
        </div>
    )
}