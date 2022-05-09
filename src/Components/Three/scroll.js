
import { useFrame } from '@react-three/fiber';
import React, { useEffect } from 'react'

const Scroll = (props) => {
    const { cube, camera, orb } = props;
    useFrame(() => {
        // console.log(orb.current)
    }, [])

    const animationScripts = []
    let scrollPercent = 0;

    useEffect(() => {
        animationScripts.push({
            start: 0,
            end: 40,
            func: () => {
                camera.current.lookAt(cube.current.position)
                camera.current.position.set(0, 1, 2)
                cube.current.position.z = lerp(-10, 0, scalePercent(0, 40))
                //console.log(cube.current.position.z)
            },
        })

        //add an animation that rotates the cube between 40-60 percent of scroll
        animationScripts.push({
            start: 40,
            end: 60,
            func: () => {
                camera.current.lookAt(cube.current.position)
                camera.current.position.set(0, 1, 2)
                cube.current.rotation.z = lerp(0, Math.PI, scalePercent(40, 60))
                //console.log(cube.current.rotation.z)
            },
        })

        //add an animation that moves the camera between 60-80 percent of scroll
        animationScripts.push({
            start: 60,
            end: 80,
            func: () => {
                camera.current.position.x = lerp(0, 5, scalePercent(60, 80))
                camera.current.position.y = lerp(1, 5, scalePercent(60, 80))
                camera.current.lookAt(cube.current.position)
                //console.log(camera.current.position.x + " " + camera.current.position.y)
            },
        })

        //add an animation that auto rotates the cube from 80 percent of scroll
        animationScripts.push({
            start: 80,
            end: 101,
            func: () => {
                //auto rotate
                cube.current.rotation.x += 0.01
                cube.current.rotation.y += 0.01
            },
        })
    }, [])

    window.onscroll = function () {
        scrollPercent =
            ((document.documentElement.scrollTop || document.body.scrollTop) /
                ((document.documentElement.scrollHeight ||
                    document.body.scrollHeight) -
                    document.documentElement.clientHeight)) *
            100
            ; (document.getElementById('scrollProgress')).innerText =
                'Scroll Progress : ' + scrollPercent.toFixed(2)

        playScrollAnimations(scrollPercent);

    }


    function lerp(x, y, a) {
        return (1 - a) * x + a * y
    }

    // Used to fit the lerps to start and end at specific scrolling percentages
    function scalePercent(start, end) {
        return (scrollPercent - start) / (end - start)
    }



    //add an animation that flashes the cube through 100 percent of scroll
    animationScripts.push({
        start: 0,
        end: 101,
        func: () => {
            // let g = material.color.g
            // g -= 0.05
            // if (g <= 0) {
            //     g = 1.0
            // }
            // material.color.g = g
        },
    })

    //add an animation that moves the cube through first 40 percent of scroll


    function playScrollAnimations() {
        animationScripts.forEach((a) => {
            if (scrollPercent >= a.start && scrollPercent < a.end) {
                a.func()
            }
        })
    }

    return null
}

export default Scroll
