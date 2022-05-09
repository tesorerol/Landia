import React from 'react'
import logo from '../Assets/img/landia.png';
const View = () => {
    return (
        <>
            <span id="scrollProgress"></span>
            <main style={{ background: "#00000047" }}>
                <section>
                    <div style={{ position: "absolute", zIndex: 9999, height: "100vh", width: "100vw" }} id="enter">
                        <img src={logo} className={`imgt Enter`} />
                        <button className={`btn `} >Enter</button>
                    </div>
                </section>
                <section>
                    <h2>¿Que es Landia?</h2>
                    <p className='txt'>Asegura la transparencia de las inversiones dedicadas a la simbiosis de la cultura con la natura, q se realicen con Landia directamente, organizaciones y territorios que quieran formar parte del bloque económico landia enfocadas  a generar una economia q aprovecha los elementos de la conservacion ambiental con un enfoque de preservacion para generar rentabilidad y no a traves de la extracción</p>
                </section>

                <section>
                    <h2>Changing Objects Rotation</h2>
                    <p>The cubes rotation is now changing</p>
                </section>

                <section>
                    <h2>Changing Camera Position</h2>
                    <p>The camera position is now changing</p>
                </section>

                <section>
                    <h2>You are at the bottom</h2>
                    <p>The cube will now be auto rotating</p>
                    <p>
                        Now you can scroll back to the top to reverse the animation
                    </p>
                </section>
            </main>
        </>
    )
}

export default View