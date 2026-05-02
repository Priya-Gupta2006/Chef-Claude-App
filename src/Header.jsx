import hero from "./assets/hero.png"

export default function Header(){
    return( 
        <header>
            <img src={hero} alt="chef image" />
            <h1>Chef Claude</h1>
        </header>
        )
}