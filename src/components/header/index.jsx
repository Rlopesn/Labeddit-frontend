import { useContext } from "react"
import { goToLogin, goToPost } from "../../routes/coordenatior"
import * as s from "./styled"
import { useNavigate } from "react-router"
import { ContextGlobal } from "../global/contextGlobal"
import { ReactComponent as Logo } from '../../assets/img/logo.svg'
import { ReactComponent as Close } from '../../assets/img/close.svg'

function Header() {
    const navigate = useNavigate()
    const context = useContext(ContextGlobal)

    const reset = ()=>{
        context.deleteToken()
        goToLogin(navigate)
    }

    const logo = (
        <Logo onClick={()=> goToPost(navigate)}/> 
    )

    const close = (
        <Close onClick={()=> goToPost(navigate)}/>
    )

    const linkSignup = (
        <s.Title onClick={()=>goToLogin(navigate)}>Entrar</s.Title>
    )

    const linkLogout = (
        <s.Title onClick={reset}>Logout</s.Title>
    )

    return (
        <s.Section>
                
                {window.location.href.includes("signup") && (
                    <>
                    <s.headerSection></s.headerSection>
                    <s.headerSection>{logo}</s.headerSection>
                    <s.headerSection>{linkSignup}</s.headerSection>        
                    </>
                )}
                {window.location.href.includes("post") && (
                    <>
                    <s.headerSection></s.headerSection>
                    <s.headerSection>{logo}</s.headerSection>
                    <s.headerSection>{linkLogout}</s.headerSection>   
                    </>
                )}
                {window.location.href.includes("comments") && (
                    <>
                    <s.headerSection>{close}</s.headerSection>
                    <s.headerSection>{logo}</s.headerSection>
                    <s.headerSection>{linkLogout}</s.headerSection>   
                    </>
                )}
        </s.Section>
    )
}

export default Header