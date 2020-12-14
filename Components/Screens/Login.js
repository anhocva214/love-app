import React, { useState } from 'react';
import { theme, withGalio, GalioProvider, Input, Button } from 'galio-framework'
import { StyleSheet, View, ScrollView } from 'react-native'


const Login = ({ navigation }) => {

    const [_username, set_username] = useState("");

    const checkUser = () => {
        if (_username.length >= 4) {
            navigation.navigate('MapScreen');
        }
    }

    return (
        <GalioProvider >
            <View style={Styles.Container}>
                <View style={Styles.FormLogin}>
                    <Input onChangeText={(value) => set_username(value)} placeholder="Enter username" color={theme.COLORS.INFO} style={{ borderColor: theme.COLORS.INFO }} placeholderTextColor={theme.COLORS.INFO} />
                    <Button onPress={() => checkUser()} color="info">GO</Button>
                </View>
            </View>
        </GalioProvider>
    )
}

const styles = theme => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.COLORS.FACEBOOK
    }
});

const Styles = StyleSheet.create({
    Container: {
        backgroundColor: '#0CAFFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    FormLogin: {
        width: 300,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default withGalio(Login, styles);