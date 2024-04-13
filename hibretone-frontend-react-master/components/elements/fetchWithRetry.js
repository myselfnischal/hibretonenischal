import axios from 'axios';

const axiosFetchWithRetry = async ({url, reqOptions, timeout = 3000, retryCount = 2, retryInterval = 1000}) => {
    const axiosInstance = axios.create({
        ...reqOptions, timeout,
    });

    let lastError;

    for (let i = 0; i < retryCount; i++) {
        try {
            const response = await axiosInstance(url);
            return response.data;
        } catch (error) {
            lastError = error;
            await new Promise(resolve => setTimeout(resolve, retryInterval));
        }
    }

    throw lastError;
}

export default axiosFetchWithRetry;