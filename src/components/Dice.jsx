import '../styles/index.css'

function Dice(props){
    const styles = {
        backgroundColor : props.held ? "#59E391" : "white"
    }
    
    return(
        <button onClick={props.hold} style={styles}>{props.value}</button>
    )
}

export default Dice;