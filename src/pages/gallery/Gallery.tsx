import React, { useState } from 'react';
import GalleryImage from './GalleryImage';

const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState('TAB1');

    const images = [
        "https://picsum.photos/400/300",
        "https://picsum.photos/210/350",
        "https://picsum.photos/200/310",
        "https://picsum.photos/230/330",
        "https://picsum.photos/240/340",
        "https://picsum.photos/250/350",
        "https://picsum.photos/260/360",
        "https://picsum.photos/270/370",
        "https://picsum.photos/280/380",
    ];

    return (
        <div className="container mx-auto p-6">
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold">Gallery Section</h1>
                <p className="text-gray-600">Browse through our collection</p>
            </div>

            <div className="flex justify-center gap-4 mb-6">
                {['TAB1', 'TAB2', 'TAB3', 'TAB4', 'TAB5'].map(tab => (
                    <button
                        key={tab}
                        className={`bttn common-btn py-2 px-4 ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200'} hover:bg-gray-300 focus:outline-none`}
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
