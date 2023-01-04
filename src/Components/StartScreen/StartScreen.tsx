import Container from "../SharedComponents/Container/Container";
import './StartScreen.css';
import Logo from "../SharedComponents/Logo/Logo";

const StartScreen = (): JSX.Element => {
    return (
        <Container className={"start-game-container"}>
            <Logo className={"logo"} src={'../../../public/logo.svg'}/>
            <Container className={"start-game-selection-container"}>
                <p className={"selection-text"}>PICK PLAYER 1'S MARK</p>
                <Container className={"selection-container"}>
                    <Container className={}>
                        
                    </Container>
                    <Container className={}>

                    </Container>
                </Container>
                <p className={"selection-text-reminder"}>REMEMBER : X GOES FIRST</p>
            </Container>
        </Container>
    )
}

export default StartScreen
