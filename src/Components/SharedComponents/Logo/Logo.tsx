interface LogoProps {
    className: string;
    src: string;
}

const Logo = (props: LogoProps): JSX.Element => {
    return (
        <img className={props.className} src={props.src} alt={"tic tac toe logo"}/>
    )
}

export default Logo;
