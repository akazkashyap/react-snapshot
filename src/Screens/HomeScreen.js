import React from 'react'
import { ContextProvider } from '../Context/Context'
import Crads from '../Components/Crads'
import NavBar from '../Components/NavBar'
import SearchBar from '../Components/SearchBar'
import PageButtons from '../Components/PageButtons'

const HomeScreen = () => {
    return (
        <ContextProvider>
            <div>
                <h1>SnapShot v4</h1>
                <SearchBar />
                <NavBar />
                <Crads />
                <PageButtons />
            </div>
        </ContextProvider>
    )
}

export default HomeScreen
