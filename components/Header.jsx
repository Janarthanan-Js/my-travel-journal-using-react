export function Header(props){
    return (
        <header>
            <img src={props.img.src} width="50px" alt={props.img.alt}></img>
            <h1>{props.head}</h1>
        </header>
    )
}