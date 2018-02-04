import React from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';


const LoginScreen = ({ navigation }) => {

    const handlePress = navigation => title => () => {
        const { setParams } = navigation;
        setParams({ title });
        navigation.navigate('Summary');
    };

    return (
        <Container>
            <Content>
                <Form>
                    <Item stackedLabel>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                    <Item stackedLabel last>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                    <Button block onPress={handlePress(navigation)('Logout')}>
                        <Text>Login </Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    )
};

export default LoginScreen;

