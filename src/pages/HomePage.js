import '../styles/HomePage.css'

function HomePage(){
    return(
        <>
            <div className="home-page">
                <header className="center">
                    <div className="logo-container">
                        <div className="logo"></div>
                    </div>
                    <nav>
                        <ul>
                            <li>Lorem</li>
                        </ul>
                    </nav>
                </header>
                <section className="homePage-container">
                    <div className="banner">
                        <div className="banner-cover"></div>
                    </div>
                    <div className="center">
                        <div className="text-container">
                            <h2>Lorem</h2>
                            <p>A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim</p>
                        </div>                        
                    </div>
                </section>
            </div> 
        </>
    )
}

export default HomePage