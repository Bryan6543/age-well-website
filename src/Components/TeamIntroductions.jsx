import React from 'react'
import TeamJSON from '../assets/TeamDes.json'

const TeamIntroductions = () => {
  return (
    <div className="flex justify-evenly flex-col">
      {TeamJSON.team.map((member, index) => (
        <div key={index} className="border p-4 rounded-lg w-1/2">
          <h3>{member.name}</h3>
          <p>{member.studentid}</p>
          <p>{member.workedon}</p>
          <p>{member.about}</p>
        </div>
      ))}
    </div>
  )
}

export default TeamIntroductions
