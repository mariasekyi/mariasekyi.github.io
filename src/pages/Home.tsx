import styles from "./Home.module.css"

function Home() {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <p>Sidebar content here</p>
      </aside>
      <main className={styles.content}>
        <p>main content goes here </p>
      </main>
    </div>
  )
}

export default Home