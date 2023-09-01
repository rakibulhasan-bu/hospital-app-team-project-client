import React, { useState } from 'react';
import { BiGlobe } from 'react-icons/bi';

const LanguageNav: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language);
    };
    console.log('selectedLanguage :>> ', selectedLanguage);
    return (
        <nav className="bg-blue-500 relative group">
            <div className="flex items-center text-white cursor-pointer">
                <BiGlobe className="mr-2" /> {/* Global Icon */}
                {selectedLanguage === 'en' ? 'EN' : 'BN'}
            </div>
            <div className="absolute top-6 right-0 bg-white rounded-lg shadow-md hidden group-hover:block">
                <ul>
                    <li>
                        <button onClick={() => handleLanguageChange('en')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full">
                            EN
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleLanguageChange('bn')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full">
                            BN
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default LanguageNav;
