import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'
import { plantList } from '../data/plantList'
import Categories from './Categories'
import { useState } from 'react';


function ShoppingList({cart, updateCart}) {
    const [activeCategory, setActiveCategory] = useState('');

    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    function addToCart(name, price) {
        const currentPLantAdded = cart.find((plant) => plant.name === name)
        if (currentPLantAdded) {
            const cartFilteredCurrentPLant = cart.filter(
                plant => plant.name !== name
            )
            updateCart([...cartFilteredCurrentPLant,
                {name, price, amount: currentPLantAdded.amount + 1}
            ])
        } else {
            updateCart([...cart, {name, price, amount: 1}])
        }
    }

    return (
        <div className='lmj-shopping-list'>
            <Categories categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            
            <ul className="lmj-plant-list">
                { plantList.map( (plant) => 
                !activeCategory || activeCategory === plant.category ? (
                    <div key={plant.id}>
                        <PlantItem
                            id={plant.id}
                            cover={plant.cover}
                            name={plant.name}
                            water={plant.water}
                            light={plant.light}
                        />
                        <button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
                    </div>
                ) : null
            )}
            </ul>
        </div>
    )
}

export default ShoppingList
