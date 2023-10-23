import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { ThreeDots } from "react-loader-spinner";

export type ButtonProps = ComponentPropsWithoutRef<'button'>;
export type Props = {
    loading?: boolean;
    variant?: 'contained' | 'outlined' | 'text';
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
    size?: 'small' | 'medium' | 'large' | 'full' | 'inherit'
} & ButtonProps;


const Button = forwardRef<HTMLButtonElement, Props>(function Button(props, ref) {
    const { loading, variant = "contained", color = "primary", size = "medium", ...buttonProps } = props;

    return (
        <button ref={ref} {...buttonProps} className={`button ${variant} ${color} ${size}`}>
            {loading && (
                <div className="spinner">
                    <ThreeDots height={20} width={20} color={"#bbb"} />
                </div>
            )}
            <span className={`text${loading ? " loading" : ""}`}>
                {props.children}
            </span>
        </button>
    );
});

export { Button };
