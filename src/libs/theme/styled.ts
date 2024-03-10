import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const ThemeStyled = createGlobalStyle`
    ${reset};

    @font-face {
        font-family: 'Inter';
        src: local('Inter-Regular'), url(@/assets/fonts/Inter-Regular.ttf) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Inter';
        src: local('Inter-Medium'), url(@/assets/fonts/Inter-Medium.ttf) format('truetype');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Inter';        
        src: local('Inter-SemiBold'), url(@/assets/fonts/Inter-SemiBold.ttf) format('truetype');
        font-weight: 600;
        font-style: normal;
    }
    
    body {
        font-family: 'Inter';
    }
`;
