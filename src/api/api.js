import axios from 'axios'

const axiosInstance = axios.create({
    // baseURL:'https://ruby-snail-kit.cyclic.app/api'
    // baseURL:'https://prayosha-architect-backend.onrender.com/api'
    // baseURL:'http://localhost:3023/api'
    baseURL:'https://dark-rose-brown-bear-yoke.cyclic.app/api'
})

export const getCategories = async() => {
    const response = await axiosInstance.get('/category')
    // const response = await axiosInstance.get('/v1/category')
    // return response
    return response.data
}

export const getProjects = async() =>{
    const response = await axiosInstance.get('/project')
    // const response = await axiosInstance.get('/v1')

    return response.data
}

export const getCategoryProjects = async(id)=>{ 
    const response = await axiosInstance.get(`/project/type/${id}`)

    // const response = await axiosInstance.get(`/v1/type/${id}`)

    return response.data
}

export const getOneProject = async(id)=>{
    const response = await axiosInstance.get(`/project/${id}`)
    // const response = await axiosInstance.get(`/v1/project/${id}`)
    return response.data
}