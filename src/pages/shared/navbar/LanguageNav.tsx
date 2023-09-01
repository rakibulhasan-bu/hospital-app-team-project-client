import React, { useState } from 'react';
import { BiGlobe } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';

const LanguageNav: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const { i18n } = useTranslation();

    const handleLanguageChangeBangla = () => {
        setSelectedLanguage('bn')
        i18n.changeLanguage('bn')
        setOpen(false)
    };

    const handleLanguageChangeEnglish = () => {
        setSelectedLanguage('en')
        i18n.changeLanguage('en')
        setOpen(false)
    };

    return (
        <nav className="relative group">
            <div onClick={() => setOpen(prev => (!prev))} className={`flex items-center select-none border px-2 py-0.5 rounded-full  text-secondary cursor-pointer ${open ? "bg-secondary text-white" : ""}`}>
                <BiGlobe className="mr-2" />
                {selectedLanguage === 'en' ? 'EN' : 'BN'}
            </div>
            {open &&
                <div className="absolute top-8 -left-2 bg-white rounded-lg border shadow-md">
                    <button onClick={handleLanguageChangeEnglish} className=" px-4 py-2 text-gray-800 hover:text-primary hover:bg-blue-50 rounded-t-lg w-full">
                        English
                    </button>
                    <button onClick={handleLanguageChangeBangla} className=" px-4 py-2 text-gray-800 hover:text-primary hover:bg-blue-50 rounded-b-lg w-full">
                        বাংলা
                    </button>
                </div>
            }
        </nav>
    );
};

export default LanguageNav;
