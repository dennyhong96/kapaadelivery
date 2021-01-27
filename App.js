//@flow
import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {WebView} from 'react-native-webview';

const BRAND_COLOR = '#f3bb10';
const BRAND_URL = 'https://www.kapaadelivery.com/';

const App = () => {
  const webviewRef = useRef(null);

  const goBack = () => webviewRef.current.goBack();
  const goForward = () => webviewRef.current.goForward();

  return (
    <View style={styles.body}>
      {/* HEADER */}
      <View style={styles.header} />

      {/* MAIN */}
      <WebView
        source={{uri: BRAND_URL}}
        ref={webviewRef}
        startInLoadingState={true}
        renderLoading={() => (
          <ActivityIndicator
            style={styles.loader}
            color={BRAND_COLOR}
            size="large"
          />
        )}
      />

      {/* FOOTER */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={goBack}>
          <Text style={styles.icon}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goForward}>
          <Text style={styles.icon}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

// STYLES
const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  loader: {
    paddingBottom: '100%',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: BRAND_COLOR,
  },
  icon: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: BRAND_COLOR,
  },
});
