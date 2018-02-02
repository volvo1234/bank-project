import React from 'react';
import { Container, Text, Body, ListItem } from 'native-base';

const DetailsScreen = ({ navigation }) => {
    return (
        <Container>
            <ListItem>
                <Body>
                    <Text>Nick Name: {navigation.state.params.item.nickName}</Text>
                </Body>
            </ListItem>
            <ListItem>
                <Body>
                <Text>User Name: {navigation.state.params.item.detailInfo.userName}</Text>
                </Body>
            </ListItem>
            <ListItem>
                <Body>
                <Text>Customer Since: {navigation.state.params.item.customerSince}</Text>
                </Body>
            </ListItem>
            <ListItem>
                <Body>
                <Text>Age: {navigation.state.params.item.detailInfo.age}</Text>
                </Body>
            </ListItem>
            <ListItem>
                <Body>
                <Text>Amount: {navigation.state.params.item.detailInfo.amount}</Text>
                </Body>
            </ListItem>
            <ListItem>
                <Body>
                <Text>Account Type: {navigation.state.params.item.detailInfo.type}</Text>
                </Body>
            </ListItem>
        </Container>
    )
};

export default DetailsScreen;

