import React from 'react';
import { Container, Content, List, ListItem, Text, Icon, Right, Body } from 'native-base';
import data from '../config/data';

const Item = navigation => item => (
    <ListItem icon onPress={() => navigation.navigate('Details', {item})}>
        <Body>
        <Text>{item.nickName}</Text>
        </Body>
        <Right >
            <Icon name="arrow-forward" />
        </Right>
    </ListItem>
);

const SummaryScreen = ({ navigation }) => {
    return (
        <Container>
            <Content>
                <List dataArray={data} renderRow={Item(navigation)} />
            </Content>
        </Container>
    )
};

export default SummaryScreen;
