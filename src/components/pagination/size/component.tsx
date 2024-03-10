import { FC } from 'react';
import { useLocalizationResources } from '@/libs/localization/resources.hook';
import { SelectComponent } from '@/components/select/component';
import { PaginationSizeComponentPropsInterface } from './component-props.interface';

const defaultOptions = [10, 25, 50];

export const PaginationSizeComponent: FC<PaginationSizeComponentPropsInterface> = ({
	options = defaultOptions,
	...props
}) => {
	const { t } = useLocalizationResources();
	return <SelectComponent label={t('pagination.size.label')} options={options} {...props} />;
};
