import { useMemo } from 'react';
import { HeroCard } from './';
import { getHeroesByPublisher } from '../helpers';
import { axiosIntance } from '../../api/axiosInstance';
import { axiosResult } from '../../api/axiosResult';
import { heroes } from '../data/heroes';


export const HeroeList = ( { publisher } ) => {

    // const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]);

    // const productos = axiosResult();
    const productos = heroes;
    console.log(productos.toString());
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
                {
                    productos.map( ( producto ) => (
                        <HeroCard 
                            key={ producto.id }
                            { ...producto }
                        />
                    ))
                }    
        </div>
    );
}
