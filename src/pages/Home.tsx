import styles from "./Home.module.css"
import Thumbnail from "../components/Thumbnail"

const projects = [
  { id: 1, title: 'Project One', image: 'https://placehold.co/600x400' },
  { id: 2, title: 'Project Two', image: 'https://placehold.co/600x400' },
  { id: 3, title: 'Project Three', image: 'https://placehold.co/600x400' },
  { id: 4, title: 'Project Four', image: 'https://placehold.co/600x400' },
]

function Home() {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h1 className="styles.name">Maria Sekyi</h1>
        <p className="styles.title">Creative Technologist</p>
        <p className="styles.bio">background and what drives my work, start thinking about tags</p>
        <p className="styles.bio">descriptions about general process and information about projects</p>
        <p className="styles.bio">descriptions about more about process and interests</p>
        <p>Sidebar content here</p>
      </aside>
      <main className={styles.content}>
          <div className={styles.grid}>
            {projects.map((project) => (
              <Thumbnail key={project.id} image={project.image} title={project.title} />
            ))}
        </div>
      </main>
    </div>
  )
}

export default Home