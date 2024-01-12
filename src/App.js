import { useState } from "react"
import './css/styleCard.css'
import Card from "./components/Card"
import Thanks from "./components/Thanks";


function App () {
    const [thanksvisible, setThanksVisible] = useState(false);
    const [selectedRating, setSelectedRating] = useState(null);

    const handleClick = (value) => {
        if (value === 'submit'){
            setThanksVisible(true);
        } else {
            setSelectedRating(value)
        }
    }


    return (
        <div className="center">
            {!thanksvisible ? (
                <Card handleClick={handleClick} />
            ) : (
                <Thanks selectedRating={selectedRating}/>
            )}
        </div>
    )
}

export default App