import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { setLang } from '../../redux/langSlice'
import { useSelector, useDispatch } from 'react-redux'


  const Container = styled.div`
        display: flex;
        justify-content: space-between;
        width : 100vw;
        height : 10vh;
        background: rgba(255, 255, 255, 0.27);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        align-items : center;
        color : #fefafa;
    `

    const Title = styled.h1`
        text-transform : uppercase;
        font-size : 1.5em;
        position : relative;
        left : 5vw
    `

    const Lang = styled.div`
        font-family : Lora;
        position : relative;
        right : 5vw;
        font-size : 1.2em;
        background-color : #233333;
        height : 30%;
        display : flex;
        align-items: center;
        justify-content: space-evenly;
        border-radius : 10px;
        width : 13%;
        cursor : pointer;
    `   

export default function Header(){
    const langFR = useRef()
    const langEN = useRef()
    const dispatch = useDispatch()
    
    const lang = useSelector((state) => state.lang.value)
    const [activeLang, setActiveLang] = useState(false)
    const changeLang = ()=>{
        activeLang === langFR.current ? setActiveLang(langEN.current) : setActiveLang(langFR.current)
    
    }
    useEffect(()=>{
        setActiveLang(langFR.current)
    },[])
    useEffect(()=>{
        if(activeLang === langFR.current){
            langFR.current.style.opacity = 1
            langEN.current.style.opacity = 0.4
            dispatch(setLang('fr'))
        }
        else if(activeLang === langEN.current){
            langEN.current.style.opacity = 1
            langFR.current.style.opacity = 0.4 
            dispatch(setLang('en'))
        }       
    },[activeLang])
    return(
        <Container>
            <Title>
                {lang === 'fr' ? 'Application météo' : 'Weather Application'}
            </Title>
            <Lang onClick={changeLang}>
                <span ref={langFR}>FR</span>
                <span>-</span>
                <span ref={langEN}>EN</span>
            </Lang>
        </Container>
    )
}