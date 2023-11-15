import * as BaseAvatar from '@radix-ui/react-avatar';
import { ComponentPropsWithoutRef, forwardRef } from 'react';


export type DivProps = ComponentPropsWithoutRef<'div'>;
export type Props = {
    src: string;
    alt: string;
    fallback?: string;
    size?: 'small' | 'medium' | 'large'
} & DivProps;


const Avatar = forwardRef<HTMLDivElement, Props>(function Avatar(props, ref) {
    const {
        src,
        alt,
        fallback,
        size = 'small',
        ...avatarProps
    } = props;

    return (
      <BaseAvatar.Root ref={ref} {...avatarProps} className={`avatar-root ${size}`}>
        <BaseAvatar.Image
          className='avatar-image'
          src={src}
          alt={alt}
          width={32}
          height={32}
        />
        <BaseAvatar.Fallback delayMs={600} className='avatar-fallback'>
          {fallback ?? alt}
        </BaseAvatar.Fallback>
      </BaseAvatar.Root>
    );
});

export { Avatar };
