import React from 'react';

const ChatBar = () => {

    const connectUsers=[
        {userid:"1xys",username:'abcd'},
        {userid:"123s",username:'abc dad'},
        {userid:"13js",username:'abcd dasud'},
    ]


  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>

      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
          {
            connectUsers.map((user)=>{
                <p key={user.userid}>{user.username}</p> 
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ChatBar;