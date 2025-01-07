import '../styles/Categories.css'

function Categories({setActiveCategory, categories, activeCategory}) {

    return (
        <div className="lmj-categories">
            <select
                value={activeCategory}
                className='lmj-categories-select'
                onChange={(e) => setActiveCategory(e.target.value)}>
                    <option value=''>---</option>
                    {categories.map(cat => (
                        <option value={cat} key={cat}>{cat}</option>

                    ))}
            </select>
            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    )

}

export default Categories