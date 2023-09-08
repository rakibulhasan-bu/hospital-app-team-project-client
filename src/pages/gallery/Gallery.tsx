import React, { useState } from 'react';
import GalleryImage from './GalleryImage';

const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState('TAB1');

    // Sample images for demonstration
    const images = [
        'path_to_image1.jpg',
        'path_to_image2.jpg',
        'path_to_image3.jpg',
        // ... add more image paths
    ];

    return (
        <div className="container mx-auto p-6">
            <div className="flex gap-4 mb-6">
                {['TAB1', 'TAB2', 'TAB3', 'TAB4', 'TAB5'].map(tab => (
                    <button
                        key={tab}
                        className={`py-2 px-4 ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200'} hover:bg-gray-300 focus:outline-none`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="tab-content">
                {activeTab === 'TAB1' && <GalleryImage images={images} />}
                {activeTab === 'TAB2' && <div>Content for Tab 2</div>}
                {activeTab === 'TAB3' && <div>Content for Tab 3</div>}
                {activeTab === 'TAB4' && <div>Content for Tab 4</div>}
                {activeTab === 'TAB5' && <div>Content for Tab 5</div>}
            </div>
        </div>
    );
};

export default Tabs;
