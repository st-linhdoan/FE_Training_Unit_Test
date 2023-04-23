import React from 'react';

export const User = ({ user }) => {
  return (
    <div className="user">
      <div className="user-img">
        <img src={'https://bootdey.com/img/Content/avatar/avatar7.png'} alt=""/>
      </div>
      <div>
        <div className="">
          <p> {user?.name} </p>
        </div>
        <div className="">
          <button>Detail</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};
