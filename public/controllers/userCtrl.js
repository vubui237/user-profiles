const users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  },
  {
    name: 'kit',
    password: 'kat',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports ={
    users: users,
    login: function(req,res,next) {
        const userFound = users.filter((x) => req.body.name === x.name && req.body.password === x.password)
        req.session.currentUser = userFound[0];
        if(req.session.currentUser) {
            res.send({userFound: true})
            return;
        } 
        res.send({userFound: false})
    }
}



