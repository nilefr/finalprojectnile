import { useState } from 'react';

export default function Carousel({ images, caption }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
            <div className="relative w-full aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                    src={images[currentIndex]}
                    alt={`${caption} ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                />
            </div>

            {caption && (
                <p className="mt-3 text-lg font-semibold text-gray-700">{caption}</p>
            )}

            <div className="flex gap-4 mt-6">
                <button
                    onClick={goToPrevious}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    Previous
                </button>
                <span className="flex items-center text-gray-600">
                    {currentIndex + 1} / {images.length}
                </span>
                <button
                    onClick={goToNext}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    Next
                </button>
            </div>
        </div>
    );
}