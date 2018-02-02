import React from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Right, Body, Button } from 'native-base';
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
            <Header />
            <Content>
                <List dataArray={data} renderRow={Item(navigation)} />
            </Content>
        </Container>
    )
};

export default SummaryScreen;
