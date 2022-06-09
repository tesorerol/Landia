import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import Perezoso from '../assets/perezoso.png'
import Jaguar from '../assets/jaguar.jpeg'
import gsap from 'gsap'
import { useFrame } from '@react-three/fiber'
import Web3 from 'web3';
import Swal from 'sweetalert2'
import { Abit, Adress } from '../assets/contract'
import { AdresA, AbitA } from '../assets/aquwa'
import ERC20 from '../assets/erc20.json';
function Collections() {
    const jaguar = useRef();
    const perezoso = useRef();
    const JG = new THREE.TextureLoader().load(Jaguar);
    const PZ = new THREE.TextureLoader().load(Perezoso);
    const clock = new THREE.Clock();
    const [animation, setAnimation] = useState(false);
    const [Wallet, setWallet] = useState(false);
    const [Aprobe, setAprobe] = useState(true)
    const [Cost, setCost] = useState(0)
    const [Amount, setAmount] = useState(1)
    useFrame(() => {
        if (animation) {
            const time = clock.getElapsedTime();
            jaguar.current.position.y = Math.cos(time) * 0.4;
            perezoso.current.position.y = Math.cos(time) * 0.6;
        }
    }, [])

    useEffect(() => {
        CostActual();
        document.getElementsByClassName("init")[0].classList.remove("ended");
        gsap.to(jaguar.current.position, {
            duration: 3,
            ease: "power3.inOut",
            y: 0,
            onComplete: () => {
                // e.target.parentNode.classList.remove("ended")
            }
        })

        gsap.to(perezoso.current.position, {
            duration: 3,
            ease: "power3.inOut",
            y: 0,
            onComplete: () => {
                document.getElementById("collection").classList.add("ended");
                setAnimation(true);
            }
        })
        if (Wallet) {
            let web3 = new Web3(window.ethereum)
            let tokenAprove = new web3.eth.Contract(ERC20, '0x2d38b32A9332c5e3349e34a8c4b305645D0A7a62');
            tokenAprove.methods.allowance(Wallet, Adress,).call().then(r => {
                if (r > 0) {
                    setAprobe(false);
                }
            });
        } else {
            ConnectWallet();
        }
    }, [Wallet])

    async function ConnectWallet() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            setWallet(accounts[0])
        } else {
            alert("No se encontro ninguna extension de wallet");
        }
    }

    async function MintNft(type) {
        if (Aprobe) {
            AproveToken(type);
        } else {
            let url = type == 'Jaguar' ? 'https://landiaworld.s3.sa-east-1.amazonaws.com/1.json' : 'https://landiaworld.s3.sa-east-1.amazonaws.com/2.json'
            Swal.fire({
                title: "Espere",
                html: "Esperando respuesta de la blockchain",
                timerProgressBar: true,
                allowOutsideClick: false,
                allowEnterKey: false,
                allowEscapeKey: false,
                showCancelButton: false,
                didOpen: () => {
                    Swal.showLoading()
                },
            })
            let web3 = new Web3(window.ethereum)
            let TempWeb3 = new web3.eth.Contract(Abit, Adress);
            TempWeb3.methods.Buyntf('0x2d38b32A9332c5e3349e34a8c4b305645D0A7a62', Amount, url).send({ from: Wallet }).then(r => {
                Swal.fire({
                    icon: 'success',
                    title: 'Hecho',
                    footer: `<a style="margin-right:15px;" class="btn btn-primary" href="${`https://mumbai.polygonscan.com/tx/${r.transactionHash}`}" target="__blank">ver Transaccion</a>`
                })
                //GetBalance(Provider, Wallet).then(r => setBalance(r));
            }).catch(r => console.log(r));
        }
    }

    const CostActual = () => {
        let web3 = new Web3("https://matic-mumbai.chainstacklabs.com");
        let tokenAprove = new web3.eth.Contract(Abit, Adress);
        tokenAprove.methods.getPhaseCost().call().then(r => {
            setCost(r)
        });
    }

    const AproveToken = (type) => {
        let web3 = new Web3(window.ethereum)
        Swal.fire({
            title: "Espere",
            html: "Aprobando tokens",
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEnterKey: false,
            allowEscapeKey: false,
            showCancelButton: false,
            didOpen: () => {
                Swal.showLoading()
            },
        })
        let tokenAprove = new web3.eth.Contract(ERC20, '0x2d38b32A9332c5e3349e34a8c4b305645D0A7a62');
        tokenAprove.methods.approve(Adress, "999999999000000000000000000").send({ from: Wallet }).then(r => {
            if (r.status === true) {
                setAprobe(false)
                Swal.fire({
                    icon: "success",
                    title: "Tokens Aprovados",
                    showConfirmButton: true
                })
                if (type) {
                    MintNft(type);
                }
            }
        });
    }

    return (
        <>

            <mesh ref={jaguar} position={[-10, -30, 0]} scale={5} onClick={() => MintNft('Jaguar')}>
                <planeBufferGeometry attach="geometry" args={[3, 3]} />
                <meshBasicMaterial attach="material" map={JG} />
            </mesh>

            <mesh ref={perezoso} position={[10, -30, 0]} scale={5} onClick={() => MintNft('Perezoso')}>
                <planeBufferGeometry attach="geometry" args={[3, 3]} />
                <meshBasicMaterial attach="material" map={PZ} />
            </mesh>
        </>
    )
}

export default Collections;