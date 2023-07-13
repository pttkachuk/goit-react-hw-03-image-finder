import axios from 'axios';
import PropTypes from 'prop-types';

const instance = axios.create({
    baseUrl: 'https://pixabay.com/api/',
});

const API_KEY = '37626526-981480af389493ca84731da49';

export const requestImg = async (searchQuery, page) => {
    const { data } = await instance.get(`?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return data;
};

requestImg.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
};