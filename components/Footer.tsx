import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='w-full mb-[100px] md:mb-5' id="contact">
            <div className="flex flex-col items-center">
                <h1 className='heading lg:max-w-[45vw]'>
                    Prêt à propulser <span className='text-purple'>votre</span> présence en ligne vers de nouveaux sommets
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>
                    Contactez-moi dès aujourd&apos;hui pour discuter de la manière dont je peux vous aider à atteindre vos objectifs.
                </p>
                <a href="mailto:marcott@semanumerique.com">
                    <MagicButton
                        title="Prenons contact"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2024 - Marcott
                </p>
                <div className="flex items-center md:gap-3 gap-6" >
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300" >
                            <Image
                                src={profile.img}
                                alt={profile.id} width={20} height={20}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer