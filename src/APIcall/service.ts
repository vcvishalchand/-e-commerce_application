import axios from 'axios';


const apiUrl = 'http://localhost:8000/api/users';


const getProductData = async () => {
  try {
    const response = await axios.get(apiUrl, {
      params: {},
    });

    return response?.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error; // You might want to handle this error in your component
  }
};

export default getProductData;
