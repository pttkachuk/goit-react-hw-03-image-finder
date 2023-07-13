import requestImg from 'Services/imageApi';
import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './Search Bar/SearchBar';
import ImageGallery from './Image Gallery/ImageGallery';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import style from './App.module.css'
export default class App extends Component {

  state = {
    searchData: '',
    images: [],
    largeImage: '',
    isLoading: false,
    page: 1,
    showModal: false,
    error: '',
    isVisible: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevPage = prevState.page;
    const prevSearchData = prevState.searchData;
    const { searchData, page } = this.state;

    if (prevPage !== page || prevSearchData !== searchData) {
      try {
        this.setState({ isLoading: true });
        const response = requestImg(searchData, page);
        response.then(data => {
          data.data.hits.length === 0
            ? toast.error('Ooops')
            : this.setState(prevState => ({
                images: [...prevState.images, ...data.data.hits],
                isVisible: page < Math.ceil(data.data.totalHits / 12),
              }));
          this.setState({ isLoading: false });
        });
      } catch (error) {
        this.setState({ error, isLoading: false });
      } finally {
      }
    }
  };
  
    onSubmit = searchData => {
    if (searchData.trim() === '') {
      return toast.error('Enter the meaning for search');
    } else if (searchData === this.state.searchData) {
      return;
    }
    this.setState({
      searchData: searchData,
      page: 1,
      images: [],
    });
  };

   nextPage = page => {
     this.setState(({ page }) => ({
      isVisible: false,
      page: page + 1,
    }));
  };

  openModal = index => {
    this.setState(({ images }) => ({
      showModal: true,
      largeImage: images[index].largeImageURL,
    }));
  };
  
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { toggleModal, openModal, nextPage, onSubmit } = this;
     const { images, isLoading, largeImage, showModal, isVisible} = this.state;
    return (
      <div className={style.App}>
        <SearchBar onSubmit={onSubmit} />
        {images.length !== 0 && (
          <ImageGallery images={images} openModal={openModal} />
        )}
        {showModal && (
          <Modal toggleModal={toggleModal} largeImage={largeImage} />
        )}
        {isLoading && (<Loader />)}
        <ToastContainer autoClose={2500} />
        {isVisible && <Button nextPage={nextPage} onLoad={isLoading} />}
      </div>
    )
  }
}

