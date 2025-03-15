// FriendService.js
export const FriendService = {
    addFriend: (friends, name) => {
      const newFriend = { id: friends.length + 1, name };
      return [...friends, newFriend];
    },
    removeFriend: (friends, id) => {
      return friends.filter(friend => friend.id !== id);
    },
    getAllFriends: (friends) => {
      return friends;
    }
  };
  export default FriendService;