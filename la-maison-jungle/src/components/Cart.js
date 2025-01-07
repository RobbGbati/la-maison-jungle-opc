import '../styles/Cart.css'
import { useState, useEffect } from 'react'

function Cart({cart, updateCart}) {
    const [isOpen, setIsOpen] = useState(true);
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    )

    // n'afficher l'alert que si le total de mon panier change
    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`;
    }, [total])

    function suprimer(index) {
        let tempCart = [...cart];
        tempCart.splice(index, 1);
        updateCart([...tempCart])
    }
    
    return isOpen ? (
    <div className="lmj-cart">
        <button onClick={() => setIsOpen(false)}>Fermer</button>
        {cart.length > 0 ? (
            <div>
                <h2>Panier</h2>
                {cart.map(({name, price, amount}, index) => (
                    <div key={`${name}-${index}`}>
                        {name} : {price}€ x {amount} <i onClick={() => suprimer(index)}>❌</i>
                    </div>
                ))}
                <p>Prix total {total} €</p>
                <button onClick={() => updateCart([])}>Vider le panier</button>
            </div>
        ) : (
            <div>Votre panier est vide</div>
        )}
    </div>
    ) : (
        <button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
    )
}

export default Cart