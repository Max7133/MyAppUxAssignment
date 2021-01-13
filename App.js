import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {AlignCenter, Italic, Menu, Settings} from 'react-native-feather';

const mediaArray = [
  {
    key: '0',
    title: 'Mr. Tinkles',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    thumbnails: {
      w160: 'http://placekitten.com/160/161',
    },
    filename: 'http://placekitten.com/2048/1920',
  },
  {
    key: '1',
    title: 'Tim',
    description:
      'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    thumbnails: {
      w160: 'http://placekitten.com/160/164',
    },
    filename: 'http://placekitten.com/2041/1922',
  },
  {
    key: '2',
    title: 'Bob',
    description:
      'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    thumbnails: {
      w160: 'http://placekitten.com/160/167',
    },
    filename: 'http://placekitten.com/2039/1920',
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="rgb(00,253,228)" barStyle="dark-content" />
      <View>
        <ImageBackground
          source={require('./assets/image4.jpeg')}
          style={styles.bgImage}
        ></ImageBackground>
        <Menu
          stroke="rgb(00,253,228)"
          width={32}
          height={32}
          style={styles.menu}
        />
        <Settings
          stroke="rgb(00,253,228)"
          width={32}
          height={32}
          style={styles.settings}
        />

        <Text style={styles.hello}>Cat Page</Text>
      </View>

      <View style={styles.infoArea}>
        <FlatList
          data={mediaArray}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.row}>
                <Image
                  style={styles.roundedImage}
                  source={{uri: item.thumbnails.w160}}
                />
                <View style={styles.textPar}>
                  <Text style={styles.titleHeader}>{item.title}</Text>
                  <Text style={styles.fontPar}>{item.description}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View style={styles.footerArea}>
        <Text style={styles.footerText}>Cat Page by Maksim Pasnitsenko</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(00,253,228)',
    flex: 1,
    height: '100%',
  },

  bgImage: {
    right: 1,
    height: 250,
    width: 360,
    margin: 1,
  },
  menu: {
    position: 'absolute',
    top: 10,
    left: 5,
  },
  settings: {
    position: 'absolute',
    top: 10,
    right: 6,
  },
  hello: {
    position: 'absolute',
    bottom: 20,
    right: 130,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    padding: 10,
    paddingLeft: 140,
    color: 'rgb(00,253,228)',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: 'navy',
    opacity: 0.5,
  },

  infoArea: {
    flex: 6,
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    padding: 7,
    margin: 1,
    backgroundColor: '#808080',
    borderWidth: 2,
    borderColor: 'black',
  },
  roundedImage: {
    marginTop: 45,
    flex: 2,
    width: 160,
    height: 160,
    borderRadius: 160 / 2,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'navy',
  },
  textPar: {
    flex: 2,
    padding: 10,
  },
  fontPar: {
    fontWeight: 'bold',
    fontSize: 12,
    fontStyle: 'italic',
  },
  footerArea: {
    height: 25,
    backgroundColor: 'navy',
  },
  titleHeader: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 15,
    color: 'navy',
    left: 0,
  },
  footerText: {
    marginTop: 2,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'rgb(00,253,228)',
  },
});
