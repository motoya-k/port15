import * as Switch from '@radix-ui/react-switch';
import { ComponentPropsWithoutRef, forwardRef } from 'react';


export type DivProps = ComponentPropsWithoutRef<'button'>;
export type Props = DivProps;


const Toggle = forwardRef<HTMLButtonElement, Props>(function Toggle(props, ref) {
    const {
        ...toggleProps
    } = props;

    return (
        // TODO: icon
        <Switch.Root className="switch-root" ref={ref} {...toggleProps}>
            <span style={{position: "fixed", left: 0}}>icon</span>
            <Switch.Thumb className="switch-thumb" />
        </Switch.Root>
    );
});

export { Toggle };
