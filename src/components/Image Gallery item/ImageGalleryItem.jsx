import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({ webformatURL, index, openModal }) => {
    return (
        <li className={style.ImageGalleryItem}>
            <img
                className={style.ImageGalleryItemImage}
                src={webformatURL}
                onClick={() => openModal(index)}
                alt="" />
        </li>
    )
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  index: PropTypes.number,
  openModal: PropTypes.func,
};