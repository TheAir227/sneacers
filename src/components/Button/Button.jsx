import './Button.css'
export default function Button({children, href, padding, bradius}){
    const styles = {
        padding: "15px " + padding,
        borderRadius: bradius
    }
    return(
        
        <>
            <a href={href} style={styles} className="button">{children}</a>
        </>
    )
}