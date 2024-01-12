import '../css/styleItemCard.css'

const ItemCard = ({ onItemSelect }) => {

    const handelItemClick = (value) => {
        onItemSelect(value);
    }
    
    return (
    <div className="buttons">
        {[1, 2, 3, 4, 5].map((value) => (
            <div key={value}>
                <input 
                    type="radio" 
                    id={value} 
                    name="rating" 
                    value={value} 
                    onChange={() => handelItemClick(value)}
                    />
                <label htmlFor={value}>{value}</label>
            </div>
            ))}
        </div>
        )
    }
    
    export default ItemCard