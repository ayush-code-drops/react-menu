import styles from '../Button.module.css'
const styleForButton = (type) => {
    switch (type) {
        case 'golden':
            return {
                backgroundColor: "gold"
            }
        case 'green':
            return {
                backgroundColor:"green"
            }
            case 'sky':
                return {
                    backgroundColor:"lightblue"
            }
            case 'orange':
                return {
                    backgroundColor:"orange"
            }
            case 'error':
                return {
                    backgroundColor:"red"
            }
            case 'purple':
                return {
                    backgroundColor:"purple"
            }
            case 'pink':
                return {
                    backgroundColor:"pink"
            }
            case 'teal':
                return {
                    backgroundColor:"teal"
            }
        default:
            return {
                
            }
        
    }
}
function Buttoncom({title,type}) {
    const btnStyle=styleForButton(type)
    return (
        <button className={styles.button} style={btnStyle}>{title}</button>
    )
    }

    export default Buttoncom