import { FC } from 'react';
import { BadgeComponent } from '@/components/badge/component';
import { PayoutStatusEnum } from '@/libs/api/resource/payout/status.enum';
import { payoutStatusLabel } from '../label';
import { PayoutStatusBadgeComponentPropsInterface } from './component-props.interface';

export const PayoutStatusBadgeComponent: FC<PayoutStatusBadgeComponentPropsInterface> = ({
	value,
}) => {
	return (
		<BadgeComponent $variant={value === PayoutStatusEnum.Completed ? 'positive' : 'neutral'}>
			{payoutStatusLabel(value)}
		</BadgeComponent>
	);
};
