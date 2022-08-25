import styling from "../Style/Navbar.module.css"


 export function ProductListing(){
    return (
        <div className={styling.navbar2} >
        <div id={styling.productpages}>
            <p>Arts</p>
            <p>Comics & Illustration</p>
            <p>Design & Tech</p>
            <p>Film</p>
            <p>Food & Craft</p>
            <p>Games</p>
            <p>Music</p>
            <p>Publishing</p>
        </div>
    </div>

    )
}
