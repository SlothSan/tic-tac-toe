import Container from "../SharedComponents/Container/Container";
import './StartScreen.css';
import Logo from "../SharedComponents/Logo/Logo";
import LogoSrc from '../../../public/logo.svg'

const StartScreen = (): JSX.Element => {
    return (
        <Container className={"start-game-container"}>
            <Logo className={"logo"} src={'../../../public/logo.svg'}/>
        </Container>
    )
}

export default StartScreen
