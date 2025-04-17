import axiosInstance from "./axiosInstance"

export const getUserByName = async (username) => {
    try {
        const response = await axiosInstance.get('/users', {
            params: { username }
        })
        // console.log(response.data.userByName)
        return response.data.userByName
    } catch (error) {
        console.error('Failed to fecth user:', error);

        // Convert generic Axios errors to more specific messages
        const errorMessage = error.response?.data?.message
            || error.message
            || 'Failed to fetch user';

        throw new Error(errorMessage);
    }
}

export const toggleFriend = async (friendId) => {
    try {
        const response = await axiosInstance.post(`/users/friends/${friendId}`)

        return response.data
    } catch (error) {
        console.error('Failed to fetch user:', error);

        // Convert generic Axios errors to more specific messages
        const errorMessage = error.response?.data?.message
            || error.message
            || 'Failed to fetch user';

        throw new Error(errorMessage);
    }
}

export const getFriends = async () => {
    try {
        const response = await axiosInstance.get(`/users/get-friends`)
        // console.log(response.data)
        return response.data
    } catch (error) {
        console.error('Failed to fecth user:', error);

        // Convert generic Axios errors to more specific messages
        const errorMessage = error.response?.data?.message
            || error.message
            || 'Failed to fetch user';

        throw new Error(errorMessage);
    }
}


export const updateProfile = async (formData, userId) => {
    try {

        const response = await axiosInstance.patch(`/users/${userId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        // console.log(response.data)

        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to update post');
    }
};

export const updatePassword = async (currentPassword, newPassword) => {
    try {

        const response = await axiosInstance.patch(`/users/update-password`, {
            currentPassword,
            newPassword
        });
        // console.log(response.data)

        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to update password');
    }
};

export const searchUsers = async (searchQuery) => {
    try {

        const response = await axiosInstance.get(`/users/search`, {
            params: {
                query: searchQuery
            }
        });

        // console.log(response.data)
        return response.data;

    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to update password');
    }
};

export const getRecommendedUsers = async (searchQuery) => {
    try {

        const response = await axiosInstance.get(`/users/recommended`);

        // console.log(response.data)
        return response.data;

    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to update password');
    }
};

export const getNotifications = async () => {
    try {

        const response = await axiosInstance.get('/notifications')

        // console.log(response.data)
        return response.data;

    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to get notifications');
    }
}

export const markNotificationRead = async (notificationId) => {
    try {

        const response = await axiosInstance.put(`/notifications/${notificationId}/read`)

        // console.log(response.data)
        return response.data;

    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to get notifications');
    }
}