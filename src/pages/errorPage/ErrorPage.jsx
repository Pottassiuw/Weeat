import React from 'react'

import styles from './ErrorPage.module.css'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <section id={styles.hero}>
            <div className={styles.container}>
                <h1>404 <span>not found!</span></h1>
                <h3>Não encontrou a página que queria?</h3>

                <Link to='/'><button className={styles.returnBtn}>Voltar</button></Link>
            </div>
        </section>
    )
}
export default ErrorPage
