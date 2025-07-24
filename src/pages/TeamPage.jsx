import React from 'react'
import TeamMemberCard from '../components/TeamMemberCard';

const teamMembers = [
  {
    name: 'Michael Scott',
    title: 'Founder, CEO, & Regional Manager',
    image: 'https://i.imgur.com/example1.jpg', // Replace with actual image URLs
    bio: 'A visionary leader with a passion for people and paper. Michael pioneered our low-cost, high-service model. He enjoys improv comedy and managing his fantasy football team.',
    quote: 'Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.'
  },
  {
    name: 'Dwight K. Schrute',
    title: 'Assistant to the Regional Manager',
    image: 'https://i.imgur.com/example2.jpg',
    bio: 'Top salesman and leading authority on bears, beets, and Battlestar Galactica. Dwight ensures operational security and peak performance through constant vigilance and martial arts.',
    quote: 'Whenever I\'m about to do something, I think, "Would an idiot do that?" And if they would, I do not do that thing.'
  },
  {
    name: 'Pamela Beesly',
    title: 'Chief Morale Officer & Reception',
    image: 'https://i.imgur.com/example3.jpg',
    bio: 'The artistic soul of the company, Pam manages client relations and ensures the office aesthetic is second to none. Also, the only person who knows how the copier really works.',
    quote: 'I don\'t think it\'s many little girls\' dream to be a receptionist. I like to do what I do, but... I have a lot of dreams.'
  }
];

function TeamPage() {
  return (
    <div className="flex-grow bg-gray-100 p-8">
      <h1 className="text-5xl font-bold text-center mb-12 font-['Comic_Sans_MS',_cursive]">Meet the Dream Team</h1>
      <div className="flex flex-wrap justify-center gap-10">
        {teamMembers.map(member => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  )
}

export default TeamPage