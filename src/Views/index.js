import React, { useEffect } from 'react'
import logo from '../Assets/img/landia.png';
import '../App.css';
const View = (props) => {
    const { seType } = props;
    useEffect(() => {
        document.body.classList.add("backBody");
        return () => {
            document.body.classList.remove("backBody");
        }
    }, [])
    return (
        <div class="container" style={{ height: "100vh" }}>
            <div class="row" style={{ textAlign: "center", height: "100%" }}>
                <div class="col-12">
                    <img src={logo} className={`imgt Enter`} />
                </div>
                <div class="col-sm">
                    <button className={`btn1 btn-success`} onClick={() => seType("website")} >Website 2D</button>
                    <button className={`btn1 btn-success`} onClick={() => seType("vr")} >Website VR</button>
                </div>

            </div>
        </div>
        // <main style={{ background: "#00000047" }}>
        //     <section>
        //         <div style={{ position: "absolute", zIndex: 9999, height: "100vh", width: "100vw" }} id="enter">
        //             <img src={logo} className={`imgt Enter`} />
        //             <button className={`btn1 `} onClick={() => console.log("click")} >Enter</button>
        //             <button className={`btn1 `} onClick={() => console.log("click")} >Website</button>
        //         </div>
        //     </section>
        // </main>
    )
}

export default View