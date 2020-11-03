import firebase from 'firebase/app';
import 'firebase/messaging';

const schoolBusVAPID = "BGWHgRsHK0QLdkStHWdhDUa0qZxZTc7efX8hYoWXl6ZfigxWI3zqyiYBs-Q8CR-gKsIQXuQ14t8qhWl3xN8N45s";

export function messagingToken() {
    const messaging = firebase.messaging();
    messaging.usePublicVapidKey(schoolBusVAPID);
    return messaging
  }