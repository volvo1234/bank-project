import React from 'react';
import { Container, Text, Body, ListItem } from 'native-base';

const DetailsScreen = ({ navigation }) => {
    const {nickName, customerSince, detailInfo: { userName, age, amount, type }} = navigation.state.params.item;

    return (
        <Container>
            <ListItem>
                <Body>
                <Text>Nick Name: {nickName}</Text>
                </Body>
            </ListItem>
            <ListItem>
                <Body>
                <Text>User Name: {userName}</Text>
                </Body>
            </ListItem>
            <ListItem>
                <Body>
                <Text>Customer Since: {customerSince}</Text>
                </Body>
            </ListItem>
            <ListItem>
                <Body>
                <Text>Age: {age}</Text>
                </Body>
            </ListItem>
            <ListItem>
                <Body>
                <Text>Amount: {amount}</Text>
                </Body>
            </ListItem>
            <ListItem>
                <Body>
                <Text>Account Type: {type}</Text>
                </Body>
            </ListItem>
        </Container>
    )
};

export default DetailsScreen;

