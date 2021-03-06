import React, { Component } from 'react'
import { theme, withGalio, GalioProvider, Input, Button } from 'galio-framework'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'



export class MapContainer extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        );
    }
}

export default MapContainer;