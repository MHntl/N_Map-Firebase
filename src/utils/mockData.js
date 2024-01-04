export const notes = [
  // {
  //   id: 1,
  //   title: 'Birinci Note',
  //   description: 'bu bur notu açıklamasıdır',
  //   date: '30.12.2023',
  //   region: {
  //     latitude: 41.013891,
  //     longitude: 28.962817,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   },
  // },
  // {
  //   id: 2,
  //   title: 'İkinci Note',
  //   description: 'bu ikinci notun açıklamasıdır',
  //   date: '30.12.2023',
  //   region: {
  //     latitude: 41.023811,
  //     longitude: 28.972817,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   },
  // },
  // {
  //   id: 3,
  //   title: 'Üçüncü Note',
  //   description: 'bu üçüncü notun açıklamasıdır',
  //   date: '30.12.2023',
  //   region: {
  //     latitude: 41.013821,
  //     longitude: 28.942317,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   },
  // },
  // {
  //   id: 4,
  //   title: 'Dördüncü Note',
  //   description: 'bu dördüncü notun açıklamasıdır',
  //   date: '30.12.2023',
  //   region: {
  //     latitude: 41.012891,
  //     longitude: 28.972815,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   },
  // },
  // {
  //   id: 5,
  //   title: 'Beşinci Note',
  //   description: 'bu beşinci notun açıklamasıdır',
  //   date: '30.12.2023',
  //   region: {
  //     latitude: 41.035491,
  //     longitude: 28.952827,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   },
  // },
];

export class coordinateClass {
  constructor(latitude, longitude) {
    (this.latitude = latitude), (this.longitude = longitude);
  }
}

[
  {
    _data: {
      date: '1/3/2024, 14:27:44',
      description: 'ParkAlaniTest2',
      region: [Object],
      title: 'Test2',
    },
    _exists: true,
    _metadata: {_metadata: [Array]},
    _ref: {
      _documentPath: [FirestorePath],
      _firestore: [FirebaseFirestoreModule],
    },
  },
  {
    _data: {
      date: '1/3/2024, 14:33:52',
      description: 'Test3Halic',
      region: [Object],
      title: 'Test3',
    },
    _exists: true,
    _metadata: {_metadata: [Array]},
    _ref: {
      _documentPath: [FirestorePath],
      _firestore: [FirebaseFirestoreModule],
    },
  },
];
