import Profile from "./assets/my_images.jpg"

function Card(){

    return(
        <div className="card">
            <img src={Profile} alt="My image"></img>
            <h2>Sam</h2>
            <p>I Love play and listen music</p>
        </div>

    );
}
export default Card;