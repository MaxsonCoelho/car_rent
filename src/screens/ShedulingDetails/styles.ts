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

    margin-top: 5px
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

export const Accessories = styled.View`
    width: 100%;

    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    margin-top: 5px;
`;

export const Footer = styled.View`
    width: 100%;
    backgrond-color: ${({ theme }) => theme.colors.background_secondary};

    padding: 24px 24px ${getBottomSpace() + 24}px;
`;

export const RentalPeriod = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.line};
    
    margin-top: 10px;
    padding-bottom: 16px;
`;

export const CalendarIcon = styled.View`
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.colors.main};

    justify-content: center;
    align-items: center;
`;

export const DateInfo = styled.View``;

export const DateTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_Medium};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;

    text-transform: uppercase;
`;

export const DateValue = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_Medium};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(15)}px;
`;

export const RentalPrice = styled.View`
    width: 100%;
    margin-top: 16px;
`;

export const RentalPriceLabel = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_Medium};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;

    text-transform: uppercase;
`;

export const RentalPriceDetails = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const RentalPriceQuota = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_Medium};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(15)}px;
`;

export const RentalPriceTotal = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_Medium};
    color: ${({ theme }) => theme.colors.success};
    font-size: ${RFValue(24)}px;
`;












