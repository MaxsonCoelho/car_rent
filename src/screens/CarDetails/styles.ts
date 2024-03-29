import { RFValue } from 'react-native-responsive-fontsize';

import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const CarImages = styled.View`
    margin-top: ${getStatusBarHeight() + 12}px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    margin-top: ${getStatusBarHeight() + 5}px;
    margin-left: 24px;
`;

export const Content = styled.ScrollView.attrs({
    contentContainerStyle:{
        padding: 24,
        alignItems: 'center',
    },
    showsVerticalScrollIndicator: false
})``;

export const Details = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-top: 38px
`;

export const Description = styled.View`
    
`;

export const Brand = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_Medium};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(12)}px;
`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_Medium};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(25)}px;
`;

export const Rent = styled.View`
    
`;

export const Period = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_Medium};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(12)}px;
`;

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_Medium};
    color: ${({ theme }) => theme.colors.main};
    font-size: ${RFValue(25)}px;
`;

export const About = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_Medium};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(15)}px;
    text-align: justify;

    margin-top: 23px;
    line-height: ${RFValue(25)}px;
`;

export const Acessories = styled.View`
    width: 100%;

    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    margin-top: 23px;
`;

export const Footer = styled.View`
    width: 100%;
    backgrond-color: ${({ theme }) => theme.colors.background_secondary};

    padding: 24px 24px ${getBottomSpace() + 24}px;
`;

