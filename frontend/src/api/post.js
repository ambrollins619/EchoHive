import axiosInstance from './axiosInstance'
import { useSelector } from 'react-redux'

export const getLatestPosts = async (isGlobal, page, user) => {

    try {
        let apiCallUrl = '/posts?'

        if (isGlobal) {
            apiCallUrl += `isGlobal=true&page=${page}`
        } else {
            if (!user?.collegeId) {
                throw new Error('User college information not available');
            }
            apiCallUrl += `collegeId=${user.collegeId.toString()}&page=${page}`
        }
        const response = await axiosInstance.get(apiCallUrl)
        // console.log(response.data);
        return response.data
    } catch (error) {
        console.error('Failed to fetch posts:', error);

        // Convert generic Axios errors to more specific messages
        const errorMessage = error.response?.data?.message
            || error.message
            || 'Failed to fetch posts';

        throw new Error(errorMessage);
    }
}

export const getTrendingPosts = async (isGlobal, page, user) => {
    try {

        let apiCallUrl = '/posts/trending?'

        if (isGlobal) {
            apiCallUrl += `isGlobal=true&page=${page}`
        } else {
            if (!user?.collegeId) {
                throw new Error('User college information not available');
            }
            apiCallUrl += `collegeId=${user.collegeId.toString()}&page=${page}`
        }
        const response = await axiosInstance.get(apiCallUrl)
        // console.log(response.data);
        return response.data
    } catch (error) {
        console.error('Failed to fetch posts:', error);

        // Convert generic Axios errors to more specific messages
        const errorMessage = error.response?.data?.message
            || error.message
            || 'Failed to fetch posts';

        throw new Error(errorMessage);
    }
}

export const votePost = async (postId, isUpvote) => {
    try {
        const response = await axiosInstance.put(`/posts/${postId}/vote`, { isUpvote })
        return response.data
    } catch (error) {
        console.error('Failed to vote post:', error);

        // Convert generic Axios errors to more specific messages
        const errorMessage = error.response?.data?.message
            || error.message
            || 'Failed to vote post';

        throw new Error(errorMessage);
    }
}

export const getPost = async (postId) => {
    try {
        const response = await axiosInstance.get(`/posts/${postId}`)
        // console.log(response.data);

        return response.data
    } catch (error) {
        console.error('Failed to vote post:', error);

        // Convert generic Axios errors to more specific messages
        const errorMessage = error.response?.data?.message
            || error.message
            || 'Failed to vote post';

        throw new Error(errorMessage);
    }
}

export const createPost = async (formData) => {
    try {
        const response = await axiosInstance.post(`/posts`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(response.data);

        return response.data
    } catch (error) {
        console.error('Failed to create post:', error);

        // Convert generic Axios errors to more specific messages
        const errorMessage = error.response?.data?.message
            || error.message
            || 'Failed to create post';

        throw new Error(errorMessage);
    }
}

export const deletePost = async (postId) => {
    try {
        const response = await axiosInstance.delete(`/posts/${postId}`)
        console.log(response.data);

        return response.data
    } catch (error) {
        console.error('Failed to create post:', error);

        // Convert generic Axios errors to more specific messages
        const errorMessage = error.response?.data?.message
            || error.message
            || 'Failed to create post';

        throw new Error(errorMessage);
    }
}

export const updatePost = async (formData,postId) => {
    try {
        
        const response = await axiosInstance.put(`/posts/${postId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(response.data)
        
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to update post');
    }
}; 