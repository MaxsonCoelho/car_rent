import React, { useState } from 'react';

import BackButton from '../../components/BackButon';
import Button from '../../components/Button';
import { Calendar, DayProps, MarkedDateProps, generateInterval } from '../../components/Calendar';

import ArrowSvg from '../../assets/img/arrow.svg';

import { getPathFromState, useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';

import { useTheme } from 'styled-components';
import { 
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer
} from './styles';
import { getPlatformDate } from '../../utils/getPlataformDate';

interface RentalPeriod {
    start: Number;
    startFormatted: string;
    end: Number;
    endFormatted: string;
}


export function Scheduling(){
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayPros);
    const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

    const navigation = useNavigation();
    const theme = useTheme();

    function handleSchedulingDetails() {
        navigation.navigate('SchedulingDetails');
    }

    function handleBack() {
        navigation.goBack();
    }

    function handleChangeDate(date: DayProps) {
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;
        if(start.timestamp > end.timestamp){
            start = end;
            end = start;
        }

        setLastSelectedDate(end);
        const interval = generateInterval(start, end);
        setMarkedDates(interval);
        
        //criando array com as chaves do objeto interval e pegando a primeira posição
        const firstDate = Object.keys(interval)[0];
        //criando array com as chaves e pegando a última posição
        const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

        //formatando o dia que estava bugando para um dia a menos no método getPlatformDate
        var formatedInitialNumber = format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy');
        formatedInitialNumber = Number(formatedInitialNumber.substring(0, 2)) + 1 + '/' + formatedInitialNumber.substring(3);
        var formatedFinalNumber = format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy');
        formatedFinalNumber = Number(formatedFinalNumber.substring(0, 2)) + 1 + '/' + formatedFinalNumber.substring(3);

        setRentalPeriod({
            start: start.timestamp,
            end: end.timestamp,
            startFormatted: formatedInitialNumber,
            endFormatted: formatedFinalNumber
        })
    }

    return (
        <Container>
            <Header>
                
                <BackButton 
                    onPress={handleBack}
                    color={theme.colors.shape}
                />

                <Title>
                    Escolha uma {'\n'} data de início{'\n'}
                    e fim do aluguel
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={!!rentalPeriod.startFormatted} >
                            {rentalPeriod.startFormatted}
                        </DateValue>
                    </DateInfo>

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={!!rentalPeriod.endFormatted}>
                            {rentalPeriod.endFormatted}
                        </DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>

            <Content>
                <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
            </Content>

            <Footer>
                <Button title='Confirmar' onPress={handleSchedulingDetails} />
            </Footer>
        </Container>
    );
}
