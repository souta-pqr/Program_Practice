import type { NextPage } from "next"
import styles from "../styles/Home.module.css"
import styled, { createGlobalStyle } from "styled-components"

const H1 = styled.h1`
    color: red;
`
const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                ...
                <H1>Welcome to <a href="https://nextjs.org"></a></H1>
            </main>
        </div>
    )
}

export default Home