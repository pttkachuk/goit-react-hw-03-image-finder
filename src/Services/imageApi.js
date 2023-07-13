
import PropTypes from 'prop-types';
import axios from 'axios';

export default function requestImg(searchQuery, page) {
    const response = axios.get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=37626526-981480af389493ca84731da49&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response;
}

requestImg.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
};

