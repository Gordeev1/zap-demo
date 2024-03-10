import { FC } from 'react';
import { TypographyComponent } from '@/components/typography/component';
import { LayoutPageComponentPropsInterface } from './component-props.interface';
import { LayoutPageStyled } from './styled';

export const LayoutPageComponent: FC<LayoutPageComponentPropsInterface> = ({ title, children }) => {
	return (
		<LayoutPageStyled.Container>
			<TypographyComponent as='h1' $size='xl' $weight='bold' $color='font-main'>
				{title}
			</TypographyComponent>
			<LayoutPageStyled.Content>{children}</LayoutPageStyled.Content>
		</LayoutPageStyled.Container>
	);
};
