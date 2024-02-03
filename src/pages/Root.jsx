import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"

const Root = () => {

    useEffect(() => {
        document.title = "sneakers"
    }, [])

    return (
        <>
            <main>
            <div className="container">
                <Header />
            </div>
            
            <Outlet />
            </main>
        </>
    )

}
export default Root