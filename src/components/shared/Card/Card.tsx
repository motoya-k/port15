import { ComponentPropsWithoutRef, forwardRef } from 'react';

export type DivProps = ComponentPropsWithoutRef<'div'>;
export type Props = DivProps;


const Card = forwardRef<HTMLDivElement, Props>(function Card(props, ref) {
    const {
        children,
        ...cardProps
    } = props;

    return (
        <div ref={ref} {...cardProps} className={`card`}>
            {children}
        </div>
    );
});

export { Card };
