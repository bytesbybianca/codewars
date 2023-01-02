// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Who's Online?
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5b6375f707a2664ada00002a
*/

/* INSTRUCTIONS

You have a group chat application, but who is online!?

You want to show your users which of their friends are online and available to chat!

Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

The input data has the following structure:

[{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]
The corresponding output should look as follows:

{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}
If for example, no users are online the output should look as follows:

{
  offline: ['Lucy'],
  away: ['Bob']
}
username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).

*/

// SOLUTION
const whosOnline = (friends) => {
  let result = {}

  for(const friend of friends) {
    if(friend.status === 'offline') {
      if(result['offline']) {
        result['offline'].push(friend.username)
      } else {
        result['offline'] = [friend.username]
      }
    } else if(friend.lastActivity <= 10) {
      if(result['online']) {
        result['online'].push(friend.username)
      } else {
        result['online'] = [friend.username]
      }
    } else if(friend.lastActivity > 10) {
      if(result['away']) {
        result['away'].push(friend.username)
      } else {
        result['away'] = [friend.username]
      }
    }
  }

  return result
}

// TEST CASES
let friends = [{
      username: 'David',
      status: 'online',
      lastActivity: 10
    },{
      username: 'Bianca',
      status: 'offline',
      lastActivity: 22
    }, {
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22
    }, {
      username: 'Bob',
      status: 'online',
      lastActivity: 104
    }]

console.log(whosOnline(friends), {
  online: ['David'],
  offline: ['Bianca', 'Lucy'],
  away: ['Bob']
})
  
friends = [{
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
  }, {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
  }]

console.log(whosOnline(friends), {
  offline: ['Lucy'],
  away: ['Bob']
})