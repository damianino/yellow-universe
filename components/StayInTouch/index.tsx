"use client"

import {Button, Container, FormWrapper, Input, InputWrapper} from "@/components/StayInTouch/styled"
import React, {useRef, useState} from "react";

import "./style.css"

const StayInTouch = () => {
    const [email, setEmail] = useState("")
    const [buttonStatus, setButtonStatus] = useState({rotate: false, success: false})

    const timeoutID = useRef<NodeJS.Timeout>()

    const onSubmit = () => {
        setButtonStatus({
            rotate: false,
            success: true
        })
        timeoutID.current = setTimeout(() => {
            setButtonStatus({
                rotate: true,
                success: Math.random() > .5
            })
        }, 0)
    }

    return (
        <>
    <Container>
        <FormWrapper>
            <img src="/lets stay in touch.png"/>
            <InputWrapper>
                <Input placeholder="yellow@universe.com" type={"email"} value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                <Button rotate={buttonStatus.rotate} success={buttonStatus.success} onClick={onSubmit}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <defs>
                                <filter id="drop-shadow-yellow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#E3D641" floodOpacity="1"/>
                                </filter>
                                <filter id="drop-shadow-green" x="-50%" y="-50%" width="200%" height="200%">
                                    <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#E3D641" floodOpacity="1"/>
                                </filter>
                                <filter id="drop-shadow-red" x="-50%" y="-50%" width="200%" height="200%">
                                    <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#E3D641" floodOpacity="1"/>
                                </filter>
                            </defs>
                        </defs>
                        <mask id="mask0_74_162" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
                            <path d="M48 0H0V48H48V0Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_74_162)">
                            <path
                                d="M24 48C23.3052 25.2629 22.7371 24.6984 0 24C22.7371 23.3052 23.3017 22.7371 24 0C24.6948 22.7371 25.2629 23.3017 48 24C25.2629 24.6984 24.6984 25.2559 24 48Z"
                                fill={"#D9D9D9"}
                            />
                        </g>
                    </svg>
                </Button>
            </InputWrapper>
        </FormWrapper>
    </Container>
        </>
    )
}

export default StayInTouch;