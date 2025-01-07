const quantityLabel = {
    1: 'peu',
    2: 'modérément',
    3: 'beaucoup'
}

function CareScale({scaleValue, careType}) {
    const range = [1, 2, 3];
    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div onClick={(e) => handleClick(careType, scaleValue)}>
            {range.map(rangeElt => 
                scaleValue >= rangeElt ? <span key={rangeElt.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

function handleClick(careType, scaleValue) {
   const msg =  `Cette plante requiert ${quantityLabel[scaleValue]} ${
						careType === 'light' ? 'de lumière' : "d'arrosage"
    }`
    alert(`${msg}`)
}

export default CareScale
