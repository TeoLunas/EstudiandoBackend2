const userList = [
    {
        id: '1',
        name: 'Peppa Pig',
        email:'peppa@corre.com',
        profile_picture: 'Sin imagen',
        registration_date: '01/01/2022'
    },
    {
        id: '2',
        name: 'Goerge',
        email: 'goerge@correo.com',
        profile_picture: 'Sin imagen',
        registration_date: '01/01/2022'
    },
    {
        id: '3',
        name: 'Mama Cerdita',
        email: 'mamacerdita@correo.com',
        profile_picture: 'Sin imagen',
        registration_date: '01/01/2022'
    },
    {
        id: '4',
        name: 'Papa Cerdito',
        email: 'papacerdito@correo.com',
        profile_picture: 'Sin imagen',
        registration_date: '01/01/2022'
    },
]

const getUsers = (req, res) => {
    res.json({data: userList})
};

const getUser = (req, res) => {
    const { id } = req.params;
    const userFilter = userList.filter((user) =>{
        return user.id === id;
    });

    res.json({
        user: userFilter
    })
};

module.exports = {
    getUsers,
    getUser
}