import React from 'react'

function TeamMemberCard( {member} ) {
    return(
    <div className="bg-white border-2 border-black rounded-lg shadow-lg overflow-hidden w-80">
      <img src={member.image} alt={member.name} className="w-full h-56 object-cover object-center" />
      <div className="p-6">
        <h3 className="font-['Comic_Sans_MS',_cursive] text-2xl font-bold text-blue-600">{member.name}</h3>
        <p className="text-sm font-semibold text-gray-500 mb-2">{member.title}</p>
        <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
        <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-600">
          "{member.quote}"
        </blockquote>
      </div>
    </div>
    )



};


export default TeamMemberCard