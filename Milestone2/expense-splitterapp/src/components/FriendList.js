import React, { useState } from 'react';
import './FriendList.css';

function FriendList({ friends, setFriends }) {
  const [friendName, setFriendName] = useState('');

  const handleAddFriend = () => {
    if (friendName) {
      setFriends([...friends, { id: friends.length + 1, name: friendName }]);
      setFriendName('');
    }
  };

  return (
    <div className="friend-list">
      <h3>Friends List</h3>
      <input
        type="text"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
        placeholder="Enter friend name"
      />
      <button onClick={handleAddFriend}>Add Friend</button>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>{friend.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
