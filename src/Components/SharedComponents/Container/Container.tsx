import React from "react";

interface ContainerProps {
    className: string;
    children: React.ReactNode;
}

const Container = (props: ContainerProps): JSX.Element => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

export default Container
