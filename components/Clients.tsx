import React from 'react'
import { InfiniteMovingCards } from './ui/InfinitteMovingCards'
import { testimonials } from '@/data'

function Clients() {
    return (
        <div className='py-20' id="projects">
            <h1 className="heading">
                Témoignages de clients{' '}
                <span className='text-purple'> satisfaits
                </span>
            </h1>
            <div className='flex flex-col items-center'>
                <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction='right'
                        speed='slow'
                    />
                </div>
            </div>
        </div>
    )
}

export default Clients