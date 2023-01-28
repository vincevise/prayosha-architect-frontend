import axios from 'axios'

const axiosInstance = await axios.create({
    baseURL:'http://localhost:8000/api'
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