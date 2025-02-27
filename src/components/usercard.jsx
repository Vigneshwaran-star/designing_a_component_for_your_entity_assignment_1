// write the component code here
import React from 'react'

const usercard = () => {
    const profilephoto = "https://t4.ftcdn.net/jpg/00/64/67/64/360_F_64676483_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" ;
    const name = "fish" ;
    const mail = "fish24@gmail.com" ;
    const phonenumber = "9999999999" ;
    const address = "ocean, pacific" ;
  return (
    <div>
      <div>
        <img src={profilephoto} alt="profilephoto" />
        <h2>{name}</h2>
        <p>{mail}</p>
        <p>{phonenumber}</p>
        <p>{address}</p>
      </div>
    </div>
  )
}

export default usercard
