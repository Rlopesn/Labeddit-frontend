import { Button } from "../../components/buttons/styled"
import { goToLogin } from "../../routes/coordenatior"
import * as s from "./styled"
import { useNavigate } from "react-router"

function NotFound() {
    const navigate = useNavigate()
    return (
        <s.Section>
            <s.Title>Oops!</s.Title>
            <s.TitleError>404 - Page Not Found</s.TitleError>
            <s.SubTitle>We can`t seem to find the page you`re lookking for</s.SubTitle>
            <Button onClick={() => goToLogin(navigate)}>Go To Login</Button>
        </s.Section>
    )
}
export default NotFound