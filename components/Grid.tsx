import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  return (
    <section id="about">
        <BentoGrid>
            {
                [
                    {title: 'Title', description: 'Desc1', id:1},
                    {title: 'Title', description: 'Desc1', id:1},
                    {title: 'Title', description: 'Desc1', id:1},
                    {title: 'Title', description: 'Desc1', id:1},
                ].map((item) => (
                    <BentoGridItem 
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    />
                ))
            }
        </BentoGrid>
    </section>
  )  
}

export default Grid