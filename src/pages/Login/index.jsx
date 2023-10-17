import * as s from "./styled"
import { Button } from "../../components/buttons/styled"
import { Container } from "../../components/container"
import { Line } from "../../components/line/styled"
import { useNavigate } from "react-router"
import { goToPost, goToSignup } from "../../routes/coordenatior"
import { useForm } from "../../hooks/useForm"
import { useContext } from "react"
import { ContextGlobal } from "../../components/global/contextGlobal"
import { ReactComponent as PrimaryLogo } from '../../assets/img/logo-full.svg'

function Login() {
    const navigate = useNavigate()
    const [form, onChange, resetForm] = useForm({ email: "", password: "" })

    const context = useContext(ContextGlobal)

    const sendFormLogin = async (e) => {
        e.preventDefault()
        await context.LoginAPI(form)
        resetForm()
        goToPost(navigate)
    }


    return (
        <Container>
            <s.Section>
                <s.Banner>
                    <PrimaryLogo />
                    <s.Title>O projeto de rede social da Labenu</s.Title>
                </s.Banner>
                <s.Form onSubmit={sendFormLogin}>
                    <s.Input
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        required
                    />

                    <s.Input
                        type= "password"
                        placeholder="Senha"
                        name="password"
                        value={form.password}
                        onChange={onChange}
                        minLength={5}
                        required
                    />
                    <Button>Continuar</Button>
                </s.Form>
                <s.SectionLogin>
                    <Line />
                    <s.ButtonAccount onClick={() => goToSignup(navigate)}>Crie uma conta</s.ButtonAccount>
                </s.SectionLogin>
            </s.Section>
        </Container>
    )
}

export default Login