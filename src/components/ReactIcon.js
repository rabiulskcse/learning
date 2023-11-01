import React from 'react';
import '../App.css'
import { FaFacebookSquare ,FaGofore} from "react-icons/fa";

function ReactIcon() {
  return (
    <div>
        <span>
            <FaFacebookSquare className='icon' />
        </span>
        <span>
            <FaGofore className='icon' />
        </span>
    </div>
  )
}

export default ReactIcon