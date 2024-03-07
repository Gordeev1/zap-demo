import { FC } from 'react';
import { LayoutPageComponentPropsInterface } from './component-props.interface';

export const LayoutPageComponent: FC<LayoutPageComponentPropsInterface> = ({ title, children }) => {
	return (
		<div>
			<h1>{title}</h1>
			<div>{children}</div>
		</div>
	);
};
