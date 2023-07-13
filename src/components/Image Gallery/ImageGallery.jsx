import ImageGalleryItem from "components/Image Gallery item/ImageGalleryItem";
import PropTypes from 'prop-types';
import style from './ImageGallery.module.css'

const ImageGallery = ({ images, openModal }) => {
    return (
        <ul className={style.ImageGallery}>
            {images.map(({ id, webformatURL }, index) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    index={index}
                    openModal={openModal}
                />
            ))}
        </ul>
    )
};

export default ImageGallery;

ImageGallery.propTypes = {
    openModal: PropTypes.func,
};