import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex justify-between items-center p-4 bg-(--grayTwo)">
        <div>
          <span className='bg-(--blackOne) rounded-xl p-3'>
            <i className="fa-solid fa-book-open text-white"></i>
          </span>
          <span className='ml-2 font-bold'>PeerLearn</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/">login</Link>
          <Link to="/register">
            <button className='cursor-pointer px-4 py-3 rounded-2xl bg-(--blackOne) text-sm text-white'>Sign Up</button>
          </Link>
        </div>
      </nav>
    
    </div>
  );
}

export default Dashboard;