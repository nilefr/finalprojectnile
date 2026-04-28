import { useState } from 'react';

// carousel component that displays images with navigation
export default function Carousel({ images, caption }) {
    // state to track the current image index
    const [currentIndex, setCurrentIndex] = useState(0);

    // function to go to the previous image
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // function to go to the next image
    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel-container">
            {/* Display the current image */}
            <div className="image-container">
                <img
                    src={images[currentIndex]}
                    alt={`${caption} ${currentIndex + 1}`}
                    className="carousel-image"
                />
            </div>

            {/* Show caption if provided */}
            {caption && <p className="caption">{caption}</p>}

            {/* Navigation buttons and counter */}
            <div className="navigation">
                <button onClick={goToPrevious}>Previous</button>
                <span>{currentIndex + 1} / {images.length}</span>
                <button onClick={goToNext}>Next</button>
            </div>
        </div>
    );
}