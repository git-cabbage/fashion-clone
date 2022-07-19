import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'

function Layouts({ children }) {
    return (
        <div>
            <Header />
            <Container>{children}</Container>
            <Footer />
        </div>
    )
}

export default Layouts
