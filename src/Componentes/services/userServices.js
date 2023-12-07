import axios from "axios";


const userAPI = axios.create({baseURL: 'http://localhost:8000/api'}) 


async function createUser(user)
{
    const res = await userAPI.post('/user', user)
        return res.data

}

async function getUser()
{
    const res = await userAPI.get('/users')
        return res.data

}

async function getUserById(userId)
{
    const res = await userAPI.get(`/user/${userId}`)
        return res.data

}

async function deleteUser(userId)
{
    const res = await userAPI.delete(`/user/${userId}`)
        return res.data

}


async function updateUser(userId, user)
{
    const res = await userAPI.put(`/user/${userId}`, user)
        return res.data

}


    export {createUser, getUser, getUserById, deleteUser, updateUser}