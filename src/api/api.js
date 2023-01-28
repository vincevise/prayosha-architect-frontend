import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:'https://ruby-snail-kit.cyclic.app/api'
})

export const getCategories = async() => {
    const response = await axiosInstance.get('/category')
    // return response
    return response.data
}

export const getProjects = async() =>{
    const response = await axiosInstance.get('/project')
    return response.data
}

export const getCategoryProjects = async(id)=>{
     
         const response = await axiosInstance.get(`/project/type/${id}`)
        return response.data
   
}

export const getOneProject = async(id)=>{
    const response = await axiosInstance.get(`/project/${id}`)
    return response.data
}