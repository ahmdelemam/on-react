import React, {useState, useEffect} from 'react';

export default function Dealer({ dealer }) {
  const [bgColor, setColor] = useState(``)

  function highLight(e) {
    let allParents = document.querySelectorAll('.media');
    for(let i = 0; i < allParents.length; i++) {
      allParents[i].classList.remove('bg-dark');
    }

    let parent = e.target.closest('.media')
    parent.classList.add('bg-dark')
  }

  useEffect(() => {
    setColor('#'+Math.random().toString(16).substr(-6))
  }, [])

  return (
    <div className="media text-muted pt-3" onClick={highLight}>
       <div className="mr-2 rounded" style={{backgroundColor: bgColor, minWidth: '32px', height: '32px'}}></div>
        <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <strong className="d-block text-gray-dark">{dealer.name}</strong>
          <i className="d-block text-gray-dark">{dealer.country}, {dealer.state}, {dealer.city}, {dealer.street}</i>
          <i className="d-block text-gray-dark">{dealer.phone}</i>
          <i className="d-block text-gray-dark">{dealer.latitude}, {dealer.longitude}</i>
        </p>
    </div>
  )
}