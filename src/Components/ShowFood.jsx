
const ShowFood = ({ nutritionalValue, displayPhoto, setDisplayInfo, setDisplayPhoto }) => {

    const handleButton = () => {
        setDisplayInfo(false)
        setDisplayPhoto(null)
    }
    return (
        <div>
            {nutritionalValue.food_item && (
                <div>
                    <h1>Food: {nutritionalValue.food_item[1]}</h1>
                    <img src={displayPhoto} alt=""></img>
                    <div className="food_table">
                        {/* <strong>Per 100g:</strong> */}
                        <div><strong>Calories:</strong> {nutritionalValue.food_item[0].calories.per_item}</div>
                        <div><strong>Protein:</strong> {nutritionalValue.food_item[0].protein.per_item}</div>
                        <div><strong>Carbohydrates:</strong> {nutritionalValue.food_item[0].carbohydrates.per_item}</div>
                        <div><strong>Sugars:</strong> {nutritionalValue.food_item[0].sugars.per_item}</div>
                        <div><strong>Dietary Fiber:</strong> {nutritionalValue.food_item[0].dietary_fiber.per_item}</div>
                        <div><strong>Fat:</strong> {nutritionalValue.food_item[0].fat.per_item}</div>
                        {/* <div><strong>Vitamin C:</strong> {nutritionalValue.food_item.vitamin_c.per_item}</div>
                        <div><strong>Potassium:</strong> {nutritionalValue.food_item.potassium.per_item}</div> */}
                    </div>
                    <button className='buttons-style' style={{marginRight: '10px'}} onClick={handleButton}>Add to my day</button>
                    <button className='buttons-style' style={{marginLeft: '10px'}} onClick={handleButton}>Don't add</button>
                </div>
            )}

        </div>
    )
}

export default ShowFood;