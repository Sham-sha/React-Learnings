import Profile from "./assets/my_images.jpg"

function Card(){

    return(
        <div className="card">
            <img src={Profile} alt="My image"></img>
            <h2>Sam</h2>
            <p>I am a React developer</p>
        </div>
    );
}
export default Card;