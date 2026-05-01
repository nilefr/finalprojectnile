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
        <div className="flex flex-col items-center gap-4 max-w-[420px] w-full mx-auto my-4">
            {/* Display the current image */}
            <div className="w-full h-[280px] overflow-hidden rounded-[18px] bg-slate-50 flex items-center justify-center">
                <img
                    src={images[currentIndex]}
                    alt={`${caption} ${currentIndex + 1}`}
                    className="w-full h-full object-cover block"
                />
            </div>

            {/* Show caption if provided */}
            {caption && (
                <p className="m-0 text-center text-slate-700 text-sm max-w-[380px]">
                    {caption}
                </p>
            )}

            {/* Navigation buttons and counter */}
            <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                    className="rounded-full px-4 py-3 bg-blue-600 text-white font-semibold transition duration-200 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
                    onClick={goToPrevious}
                    aria-label="Previous image"
                >
                    Previous
                </button>
                <span className="text-slate-500 text-sm">{currentIndex + 1} / {images.length}</span>
                <button
                    className="rounded-full px-4 py-3 bg-blue-600 text-white font-semibold transition duration-200 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
                    onClick={goToNext}
                    aria-label="Next image"
                >
                    Next
                </button>
            </div>
        </div>
    );
}