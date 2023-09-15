import React, { useState } from 'react';
import { BiGlobe } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';

const LanguageNav: React.FC = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState<boolean>(false);
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || 'en');


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
            <Dropdown showArrow>
                <DropdownTrigger onClick={() => setOpen(prev => (!prev))}>
                    <div className={`flex items-center select-none border px-2 py-0.5 rounded-full text-lg text-secondary cursor-pointer ${open ? "bg-secondary text-white" : ""}`}>
                        <BiGlobe className="mr-2" />
                        {selectedLanguage === 'en' ? 'EN' : 'BN'}
                    </div>
                </DropdownTrigger>
                <DropdownMenu aria-label="language change" variant="faded">
                    <DropdownItem onClick={handleLanguageChangeEnglish}>
                        <div className='flex items-center gap-4'>
                            <img className='w-8 h-8' src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1694710120/lifecare/Icons-Land-Vista-Flags-English-Language-Flag-1.256_pvzrb7.png" alt="" />  <p>English</p>
                        </div>
                    </DropdownItem>
                    <DropdownItem onClick={handleLanguageChangeBangla}>
                        <div className='flex items-center gap-4'>
                            <img className='w-8 h-8' src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1694710120/lifecare/Twitter-Twemoji-Flags-Bangladesh-Flag.512_bntw12.png" alt="" /> বাংলা
                        </div>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </nav>
    );
};

export default LanguageNav;
