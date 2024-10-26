function ImageGalleryItem({ id, open, src, alt }) {
    return (
        <>
            <li className="gallery-item" id={id} >
                <img src={src} alt={alt} onClick={open} />
            </li>
        </>
    );
};

export default ImageGalleryItem;