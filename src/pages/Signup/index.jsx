import { useContext } from "react"
import { Button } from "../../components/buttons/styled"
import { Container } from "../../components/container"
import Header from "../../components/header"
import { useForm } from "../../hooks/useForm"
import * as s from "./styled"
import { useNavigate } from "react-router"
import { ContextGlobal } from "../../components/global/contextGlobal"
import { goToPost } from "../../routes/coordenatior"

function Signup() {
    const navigate = useNavigate()
    const [form, onChange, resetForm] = useForm({ name: "", email: "", password: "" })

    const context = useContext(ContextGlobal)

    const sendFormSignup = async (e) => {
        e.preventDefault()
        await context.SignupAPI(form)
        resetForm()
        goToPost(navigate)
    }

    return (
        <>
            <Header />
            <Container>
                <s.Section>
                    <s.Title>Olá, boas vindas ao <s.TypewriterText>LabEddit ;)</s.TypewriterText></s.Title>
                    <s.Form onSubmit={sendFormSignup}>
                        <s.Input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={onChange}
                            placeholder="Apelido"
                            required
                        />
                        <s.Input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={onChange}
                            placeholder="E-mail"
                            required
                        />
                        <s.Input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={onChange}
                            placeholder="Senha"
                            required
                        />
                        <s.SubTitle>Ao continuar, você concorda com o nosso <s.Link href="/">Contrato de usuário</s.Link> e nossa <s.Link href="/">Política de Privacidade</s.Link></s.SubTitle>
                        <s.Newsletter>
                            
                            <s.SubTitle><input type="checkbox" />Eu concordo em receber emails sobre coisas legais no Labeddit</s.SubTitle>
                        </s.Newsletter>
                        <Button>Cadastrar</Button>
                    </s.Form>
                </s.Section>
            </Container>
        </>
    )
}

export default Signup