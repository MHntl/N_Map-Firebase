[
  {
    date: '1/3/2024, 16:47:25',
    description: 'Test',
    id: 'HqrTTj5nSeCOuLJlIdto',
    region: {latitude: 41.015816445687754, longitude: 28.98412361741066},
    title: 'Yeni',
  },
];

<View style={styles.mainContainer}>
  <MapView
    style={styles.map}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0,
      longitudeDelta: 0.0,
    }}>
    {this.state.markers.map(marker => (
      <MapView.Marker
        coordinate={marker.coordinate}
        title={marker.title}
        description={marker.description}>
        <MapView.Callout tooltip style={styles.customView}>
          <TouchableHighlight
            onPress={() => this.markerClick()}
            underlayColor="#dddddd">
            <View style={styles.calloutText}>
              <Text>
                {marker.title}
                {'\n'}
                {marker.description}
              </Text>
            </View>
          </TouchableHighlight>
        </MapView.Callout>
      </MapView.Marker>
    ))}
  </MapView>
</View>;
