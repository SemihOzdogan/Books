import React, { useEffect, useState, useRef } from 'react';
import { ActivityIndicator, Platform, View, Text, Button } from 'react-native';
import { getBooksList } from '../redux/actions';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp } from '@react-navigation/native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: false,
//   }),
// });

// async function sendPushNotification(expoPushToken: any) {
//   const message = {
//     to: expoPushToken,
//     sound: 'default',
//     title: 'Original Title',
//     body: 'And here is the body!',
//     data: { someData: 'goes here' },
//   };

//   await fetch('https://exp.host/--/api/v2/push/send', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Accept-encoding': 'gzip, deflate',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(message),
//   });
// }

// async function registerForPushNotificationsAsync() {
//   let token;
//   if (Device.isDevice) {
//     const { status: existingStatus } = await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== 'granted') {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     if (finalStatus !== 'granted') {
//       alert('Failed to get push token for push notification!');
//       return;
//     }
//     token = await Notifications.getExpoPushTokenAsync({
//       projectId: Constants.expoConfig.extra.eas.projectId,
//     });
//     console.log(token);
//   } else {
//     console.log('Must use physical device for Push Notifications');
//   }

//   if (Platform.OS === 'android') {
//     Notifications.setNotificationChannelAsync('default', {
//       name: 'default',
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: '#FF231F7C',
//     });
//   }

//   return token;
// }



interface GetBooksProps {
  getBooksList: () => void;
  books: {
    data: any[];
    loading: boolean;
  };
  navigation: NavigationProp<any>;
}

const GetBooks: React.FC<GetBooksProps> = (props) => {
  // const [expoPushToken, setExpoPushToken] = useState(''),
  //   [notification, setNotification] = useState(false),
  //   notificationListener = useRef(),
  //   responseListener = useRef();

  // useEffect(() => {
  //   registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

  //   notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
  //     setNotification(notification);
  //   });

  //   responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
  //     console.log(response);
  //   });

  //   return () => {
  //     Notifications.removeNotificationSubscription(notificationListener.current);
  //     Notifications.removeNotificationSubscription(responseListener.current);
  //   };
  // }, []);


  useEffect(() => {
    props.getBooksList();
    if (!props.books.loading && props.books.data.length !== 0) {
      props.navigation.navigate('Home');
    }
  }, [props.books.loading]);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {props.books.loading ? (
        <ActivityIndicator size="large" color="green" />
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};

const mapStateToProps = (state: any) => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getBooksList: () => dispatch(getBooksList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetBooks);