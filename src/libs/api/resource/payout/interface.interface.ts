import { PayoutStatusEnum } from './status.enum';

type DateISO = string;

export interface PayoutInterface {
	dateAndTime: DateISO;
	status: PayoutStatusEnum;
	value: string;
	username: string;
}
