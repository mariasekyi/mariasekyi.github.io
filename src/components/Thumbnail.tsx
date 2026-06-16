import styles from "./Thumbnail.module.css"

type ThumbnailProps = {
    image: string
    title: string
}

 function Thumbnail({image, title}: ThumbnailProps) {
    return (
        <div className={styles.thumbnail}>
            <img src={image} alt={title} className={styles.image} />
            <p className={styles.title}>{title}</p>
        </div>
    )
 }
 export default Thumbnail