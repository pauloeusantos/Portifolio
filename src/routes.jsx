import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/index'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Container from './components/Container/container'

function AppRoutes() {
    return (
        <>
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={ <Home /> }></Route>
        
                    
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
        </>
    )
}

export default AppRoutes
