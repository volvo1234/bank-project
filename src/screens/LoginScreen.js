import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

const LoginScreen = ({ navigation }) => {
    return (
        <Container>
            <Header />
            <Content>
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
                        <Button block onPress={() => navigation.navigate('Summary')} title="Go to Summary">
                            <Text>Login </Text>
                        </Button>
                    </Form>
                </Content>

            </Content>
        </Container>
    )
};

export default LoginScreen;

