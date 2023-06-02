const { Address } = require("../models");
const ADRESSBACKUP = [
  {
    _id: "64661789c9188868ee7ad802",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Djerba Midun",
    country: "Tunisia",
    location: {
      lat: "34.933333",
      lng: "9.2",
    },
    createdAt: {
      $date: "2023-05-18T12:18:17.317Z",
    },
    updatedAt: {
      $date: "2023-05-18T12:18:17.317Z",
    },
    __v: 0,
  },
  {
    _id: "646617a9c9188868ee7ad810",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Bi’r al Ḩufayy",
    country: "Tunisia",
    location: {
      lat: "34.933333",
      lng: "9.2",
    },
    createdAt: {
      $date: "2023-05-18T12:18:49.129Z",
    },
    updatedAt: {
      $date: "2023-05-18T12:18:49.129Z",
    },
    __v: 0,
  },
  {
    _id: "646617afc9188868ee7ad81e",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Al Wardānīn",
    country: "Tunisia",
    location: {
      lat: "35.70915",
      lng: "10.67397",
    },
    createdAt: {
      $date: "2023-05-18T12:18:55.612Z",
    },
    updatedAt: {
      $date: "2023-05-18T12:18:55.612Z",
    },
    __v: 0,
  },
  {
    _id: "646617b5c9188868ee7ad82c",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Majāz al Bāb",
    country: "Tunisia",
    location: {
      lat: "36.6484118",
      lng: "9.6146499",
    },
    createdAt: {
      $date: "2023-05-18T12:19:01.603Z",
    },
    updatedAt: {
      $date: "2023-05-18T12:19:01.603Z",
    },
    __v: 0,
  },
  {
    _id: "646617bcc9188868ee7ad83a",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Oued Lill",
    country: "Tunisia",
    location: {
      lat: "36.83408",
      lng: "10.04057",
    },
    createdAt: {
      $date: "2023-05-18T12:19:08.357Z",
    },
    updatedAt: {
      $date: "2023-05-18T12:19:08.357Z",
    },
    __v: 0,
  },
  {
    _id: "646617c4c9188868ee7ad848",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Carthage",
    country: "Tunisia",
    location: {
      lat: "36.8625853",
      lng: "10.3329494",
    },
    createdAt: {
      $date: "2023-05-18T12:19:16.352Z",
    },
    updatedAt: {
      $date: "2023-05-18T12:19:16.352Z",
    },
    __v: 0,
  },
  {
    _id: "646617cbc9188868ee7ad856",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Jilma",
    country: "Tunisia",
    location: {
      lat: "35.2686888",
      lng: "9.4283801",
    },
    createdAt: {
      $date: "2023-05-18T12:19:23.377Z",
    },
    updatedAt: {
      $date: "2023-05-18T12:19:23.377Z",
    },
    __v: 0,
  },
  {
    _id: "646617d1c9188868ee7ad864",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "El Fahs",
    country: "Tunisia",
    location: {
      lat: "36.3778012",
      lng: "9.9101915",
    },
    createdAt: {
      $date: "2023-05-18T12:19:29.683Z",
    },
    updatedAt: {
      $date: "2023-05-18T12:19:29.683Z",
    },
    __v: 0,
  },
  {
    _id: "646617dac9188868ee7ad872",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Al Marsá",
    country: "Tunisia",
    location: {
      lat: "36.8964803",
      lng: "10.310501",
    },
    createdAt: {
      $date: "2023-05-18T12:19:38.766Z",
    },
    updatedAt: {
      $date: "2023-05-18T12:19:38.766Z",
    },
    __v: 0,
  },
  {
    _id: "646617e7c9188868ee7ad880",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Banī Khallād",
    country: "Tunisia",
    location: {
      lat: "36.6478364",
      lng: "10.5915072",
    },
    createdAt: {
      $date: "2023-05-18T12:19:51.040Z",
    },
    updatedAt: {
      $date: "2023-05-18T12:19:51.040Z",
    },
    __v: 0,
  },
  {
    _id: "646617edc9188868ee7ad88e",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Zaghouan",
    country: "Tunisia",
    location: {
      lat: "36.4091188",
      lng: "10.1423172",
    },
    createdAt: {
      $date: "2023-05-18T12:19:57.102Z",
    },
    updatedAt: {
      $date: "2023-05-18T12:19:57.102Z",
    },
    __v: 0,
  },
  {
    _id: "6467d30f5812fffe076c1d52",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Djerba Midun",
    country: "Tunisia",
    location: {
      lat: 33.8215722,
      lng: 10.997658,
    },
    createdAt: {
      $date: "2023-05-19T19:50:39.683Z",
    },
    updatedAt: {
      $date: "2023-05-19T19:50:39.683Z",
    },
    __v: 0,
  },
  {
    _id: "6467d30f5812fffe076c1d54",
    place_id: "ChIJyQn4TbRK_RIR4hB09GQQuJc",
    city: "Tunisia Mall",
    country: "Tunis, Tunisia",
    location: {
      lat: 36.84799140000001,
      lng: 10.2788652,
    },
    createdAt: {
      $date: "2023-05-19T19:50:39.889Z",
    },
    updatedAt: {
      $date: "2023-05-19T19:50:39.889Z",
    },
    __v: 0,
  },
  {
    _id: "6467d364c2e2e9f87ccfb6d3",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Djerba Midun",
    country: "Tunisia",
    location: {
      lat: "33.8215722",
      lng: "10.997658",
    },
    createdAt: {
      $date: "2023-05-19T19:52:04.330Z",
    },
    updatedAt: {
      $date: "2023-05-19T19:52:04.330Z",
    },
    __v: 0,
  },
  {
    _id: "6467d364c2e2e9f87ccfb6d5",
    place_id: "ChIJyQn4TbRK_RIR4hB09GQQuJc",
    city: "Tunisia Mall",
    country: "Tunis, Tunisia",
    location: {
      lat: "36.84799140000001",
      lng: "10.2788652",
    },
    createdAt: {
      $date: "2023-05-19T19:52:04.592Z",
    },
    updatedAt: {
      $date: "2023-05-19T19:52:04.592Z",
    },
    __v: 0,
  },
  {
    _id: "6467d7f6c2e2e9f87ccfb732",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Djerba Midun",
    country: "Tunisia",
    location: {
      lat: "33.8215722",
      lng: "10.997658",
    },
    createdAt: {
      $date: "2023-05-19T20:11:34.314Z",
    },
    updatedAt: {
      $date: "2023-05-19T20:11:34.314Z",
    },
    __v: 0,
  },
  {
    _id: "6467d7f6c2e2e9f87ccfb734",
    place_id: "ChIJE18Qsk0e4xIRnsYJBqBhQ_Q",
    city: "Bizerte",
    country: "Tunisia",
    location: {
      lat: "37.2767579",
      lng: "9.8641609",
    },
    createdAt: {
      $date: "2023-05-19T20:11:34.510Z",
    },
    updatedAt: {
      $date: "2023-05-19T20:11:34.510Z",
    },
    __v: 0,
  },
  {
    _id: "6467d86a447cfcc1a8ebb2de",
    place_id: "ChIJlXkNy8ykqhMR6kAXViiSbT4",
    city: "Djerba - Houmt Souk",
    country: "Tunisia",
    location: {
      lat: "33.8276629",
      lng: "10.8677256",
    },
    createdAt: {
      $date: "2023-05-19T20:13:30.840Z",
    },
    updatedAt: {
      $date: "2023-05-19T20:13:30.840Z",
    },
    __v: 0,
  },
  {
    _id: "6467d86a447cfcc1a8ebb2e0",
    place_id: "ChIJQ_V-Xn8z_RIRdQJKcU6ScdY",
    city: "Tunis",
    country: "Tunisia",
    location: {
      lat: "36.8064948",
      lng: "10.1815316",
    },
    createdAt: {
      $date: "2023-05-19T20:13:30.915Z",
    },
    updatedAt: {
      $date: "2023-05-19T20:13:30.915Z",
    },
    __v: 0,
  },
  {
    _id: "6467d898447cfcc1a8ebb2ea",
    place_id: "ChIJlXkNy8ykqhMR6kAXViiSbT4",
    city: "Djerba - Houmt Souk",
    country: "Tunisia",
    location: {
      lat: "33.8276629",
      lng: "10.8677256",
    },
    createdAt: {
      $date: "2023-05-19T20:14:16.512Z",
    },
    updatedAt: {
      $date: "2023-05-19T20:14:16.512Z",
    },
    __v: 0,
  },
  {
    _id: "6467d898447cfcc1a8ebb2ec",
    place_id: "ChIJQ_V-Xn8z_RIRdQJKcU6ScdY",
    city: "Tunis",
    country: "Tunisia",
    location: {
      lat: "36.8064948",
      lng: "10.1815316",
    },
    createdAt: {
      $date: "2023-05-19T20:14:16.613Z",
    },
    updatedAt: {
      $date: "2023-05-19T20:14:16.613Z",
    },
    __v: 0,
  },
  {
    _id: "6467dd93a6101fb46d1397fc",
    place_id: "ChIJlXkNy8ykqhMR6kAXViiSbT4",
    city: "Djerba - Houmt Souk",
    country: "Tunisia",
    location: {
      lat: "33.8276629",
      lng: "10.8677256",
    },
    createdAt: {
      $date: "2023-05-19T20:35:31.925Z",
    },
    updatedAt: {
      $date: "2023-05-19T20:35:31.925Z",
    },
    __v: 0,
  },
  {
    _id: "6467dd94a6101fb46d1397fe",
    place_id: "ChIJQ_V-Xn8z_RIRdQJKcU6ScdY",
    city: "Tunis",
    country: "Tunisia",
    location: {
      lat: "36.8064948",
      lng: "10.1815316",
    },
    createdAt: {
      $date: "2023-05-19T20:35:32.093Z",
    },
    updatedAt: {
      $date: "2023-05-19T20:35:32.093Z",
    },
    __v: 0,
  },
  {
    _id: "6467df9ef125d053a94d251b",
    place_id: "ChIJp_jsb2fdARMR-leI3rgZF3o",
    city: "Fjara",
    country: "Dokhane, Tunisia",
    location: {
      lat: "35.00111920000001",
      lng: "10.7661225",
    },
    createdAt: {
      $date: "2023-05-19T20:44:14.770Z",
    },
    updatedAt: {
      $date: "2023-05-19T20:44:14.770Z",
    },
    __v: 0,
  },
  {
    _id: "6467df9ef125d053a94d251d",
    place_id: "ChIJQ_V-Xn8z_RIRdQJKcU6ScdY",
    city: "Tunis",
    country: "Tunisia",
    location: {
      lat: "36.8064948",
      lng: "10.1815316",
    },
    createdAt: {
      $date: "2023-05-19T20:44:14.960Z",
    },
    updatedAt: {
      $date: "2023-05-19T20:44:14.960Z",
    },
    __v: 0,
  },
  {
    _id: "6467e01cf125d053a94d255d",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Djerba Midun",
    country: "Tunisia",
    location: {
      lat: "33.8215722",
      lng: "10.997658",
    },
    createdAt: {
      $date: "2023-05-19T20:46:20.258Z",
    },
    updatedAt: {
      $date: "2023-05-19T20:46:20.258Z",
    },
    __v: 0,
  },
  {
    _id: "6467e01cf125d053a94d255f",
    place_id: "ChIJQ_V-Xn8z_RIRdQJKcU6ScdY",
    city: "Tunis",
    country: "Tunisia",
    location: {
      lat: "36.8064948",
      lng: "10.1815316",
    },
    createdAt: {
      $date: "2023-05-19T20:46:20.363Z",
    },
    updatedAt: {
      $date: "2023-05-19T20:46:20.363Z",
    },
    __v: 0,
  },
  {
    _id: "6468ab3089be25a7ed7dda9e",
    place_id: "ChIJlXkNy8ykqhMR6kAXViiSbT4",
    city: "Djerba - Houmt Souk",
    country: "Tunisia",
    location: {
      lat: "33.8276629",
      lng: "10.8677256",
    },
    createdAt: {
      $date: "2023-05-20T11:12:48.973Z",
    },
    updatedAt: {
      $date: "2023-05-20T11:12:48.973Z",
    },
    __v: 0,
  },
  {
    _id: "6468ab3189be25a7ed7ddaa0",
    place_id: "ChIJQ_V-Xn8z_RIRdQJKcU6ScdY",
    city: "Tunis",
    country: "Tunisia",
    location: {
      lat: "36.8064948",
      lng: "10.1815316",
    },
    createdAt: {
      $date: "2023-05-20T11:12:49.046Z",
    },
    updatedAt: {
      $date: "2023-05-20T11:12:49.046Z",
    },
    __v: 0,
  },
  {
    _id: "646b956af1e6891e439527f2",
    place_id: "ChIJlXkNy8ykqhMR6kAXViiSbT4",
    city: "Djerba - Houmt Souk",
    country: "Tunisia",
    location: {
      lat: "33.8276629",
      lng: "10.8677256",
    },
    createdAt: {
      $date: "2023-05-22T16:16:42.952Z",
    },
    updatedAt: {
      $date: "2023-05-22T16:16:42.952Z",
    },
    __v: 0,
  },
  {
    _id: "646b956bf1e6891e439527f4",
    place_id: "ChIJQ_V-Xn8z_RIRdQJKcU6ScdY",
    city: "Tunis",
    country: "Tunisia",
    location: {
      lat: "36.8064948",
      lng: "10.1815316",
    },
    createdAt: {
      $date: "2023-05-22T16:16:43.035Z",
    },
    updatedAt: {
      $date: "2023-05-22T16:16:43.035Z",
    },
    __v: 0,
  },
  {
    _id: "646b95b7af6c9e3c26073ad9",
    place_id: "ChIJlXkNy8ykqhMR6kAXViiSbT4",
    city: "Djerba - Houmt Souk",
    country: "Tunisia",
    location: {
      lat: "33.8276629",
      lng: "10.8677256",
    },
    createdAt: {
      $date: "2023-05-22T16:17:59.917Z",
    },
    updatedAt: {
      $date: "2023-05-22T16:17:59.917Z",
    },
    __v: 0,
  },
  {
    _id: "646b95b7af6c9e3c26073adb",
    place_id: "ChIJQ_V-Xn8z_RIRdQJKcU6ScdY",
    city: "Tunis",
    country: "Tunisia",
    location: {
      lat: "36.8064948",
      lng: "10.1815316",
    },
    createdAt: {
      $date: "2023-05-22T16:17:59.998Z",
    },
    updatedAt: {
      $date: "2023-05-22T16:17:59.998Z",
    },
    __v: 0,
  },
  {
    _id: "646b9dc1bb0d6f1e12bda955",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Banī Khallād",
    country: "Tunisia",
    location: {
      lat: "36.6478364",
      lng: "10.5915072",
    },
    createdAt: {
      $date: "2023-05-22T16:52:17.200Z",
    },
    updatedAt: {
      $date: "2023-05-22T16:52:17.200Z",
    },
    __v: 0,
  },
  {
    _id: "646b9dc1bb0d6f1e12bda957",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Mateur",
    country: "Tunisia",
    location: {
      lat: "37.0388867",
      lng: "9.6647636",
    },
    createdAt: {
      $date: "2023-05-22T16:52:17.398Z",
    },
    updatedAt: {
      $date: "2023-05-22T16:52:17.398Z",
    },
    __v: 0,
  },
  {
    _id: "646b9e58ed48492ab9c5140b",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Kairouan",
    country: "Tunisia",
    location: {
      lat: "35.6759137",
      lng: "10.0919243",
    },
    createdAt: {
      $date: "2023-05-22T16:54:48.462Z",
    },
    updatedAt: {
      $date: "2023-05-22T16:54:48.462Z",
    },
    __v: 0,
  },
  {
    _id: "646b9e58ed48492ab9c5140d",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Dar Chabanne",
    country: "Tunisia",
    location: {
      lat: "36.4626965",
      lng: "10.7492466",
    },
    createdAt: {
      $date: "2023-05-22T16:54:48.542Z",
    },
    updatedAt: {
      $date: "2023-05-22T16:54:48.542Z",
    },
    __v: 0,
  },
  {
    _id: "646bb11aed48492ab9c514b9",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Djerba Midun",
    country: "Tunisia",
    location: {
      lat: "33.8215722",
      lng: "10.997658",
    },
    createdAt: {
      $date: "2023-05-22T18:14:50.639Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:14:50.639Z",
    },
    __v: 0,
  },
  {
    _id: "646bb11aed48492ab9c514bb",
    place_id: "ChIJQ_V-Xn8z_RIRdQJKcU6ScdY",
    city: "Tunis",
    country: "Tunisia",
    location: {
      lat: "36.8064948",
      lng: "10.1815316",
    },
    createdAt: {
      $date: "2023-05-22T18:14:50.722Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:14:50.722Z",
    },
    __v: 0,
  },
  {
    _id: "646bb19ced48492ab9c514f8",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Djerba Midun",
    country: "Tunisia",
    location: {
      lat: "33.8215722",
      lng: "10.997658",
    },
    createdAt: {
      $date: "2023-05-22T18:17:00.832Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:17:00.832Z",
    },
    __v: 0,
  },
  {
    _id: "646bb19ced48492ab9c514fa",
    place_id: "ChIJQ_V-Xn8z_RIRdQJKcU6ScdY",
    city: "Tunis",
    country: "Tunisia",
    location: {
      lat: "36.8064948",
      lng: "10.1815316",
    },
    createdAt: {
      $date: "2023-05-22T18:17:00.913Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:17:00.913Z",
    },
    __v: 0,
  },
  {
    _id: "646bb2b6ed48492ab9c51537",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Djerba Midun",
    country: "Tunisia",
    location: {
      lat: "33.8215722",
      lng: "10.997658",
    },
    createdAt: {
      $date: "2023-05-22T18:21:42.253Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:21:42.253Z",
    },
    __v: 0,
  },
  {
    _id: "646bb2b6ed48492ab9c51539",
    place_id: "ChIJQ_V-Xn8z_RIRdQJKcU6ScdY",
    city: "Tunis",
    country: "Tunisia",
    location: {
      lat: "36.8064948",
      lng: "10.1815316",
    },
    createdAt: {
      $date: "2023-05-22T18:21:42.333Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:21:42.333Z",
    },
    __v: 0,
  },
  {
    _id: "646bb358ed48492ab9c51576",
    place_id: "ChIJlXkNy8ykqhMR6kAXViiSbT4",
    city: "Djerba - Houmt Souk",
    country: "Tunisia",
    location: {
      lat: "33.8276629",
      lng: "10.8677256",
    },
    createdAt: {
      $date: "2023-05-22T18:24:24.599Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:24:24.599Z",
    },
    __v: 0,
  },
  {
    _id: "646bb358ed48492ab9c51578",
    place_id: "ChIJQ_V-Xn8z_RIRdQJKcU6ScdY",
    city: "Tunis",
    country: "Tunisia",
    location: {
      lat: "36.8064948",
      lng: "10.1815316",
    },
    createdAt: {
      $date: "2023-05-22T18:24:24.680Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:24:24.680Z",
    },
    __v: 0,
  },
  {
    _id: "646bb3c5ed48492ab9c515a6",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Djerba Midun",
    country: "Tunisia",
    location: {
      lat: "33.8215722",
      lng: "10.997658",
    },
    createdAt: {
      $date: "2023-05-22T18:26:13.720Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:26:13.720Z",
    },
    __v: 0,
  },
  {
    _id: "646bb3c5ed48492ab9c515a8",
    place_id: "ChIJQ_V-Xn8z_RIRdQJKcU6ScdY",
    city: "Tunis",
    country: "Tunisia",
    location: {
      lat: "36.8064948",
      lng: "10.1815316",
    },
    createdAt: {
      $date: "2023-05-22T18:26:13.800Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:26:13.800Z",
    },
    __v: 0,
  },
  {
    _id: "646bb4dfed48492ab9c515dd",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Djerba Midun",
    country: "Tunisia",
    location: {
      lat: "33.8215722",
      lng: "10.997658",
    },
    createdAt: {
      $date: "2023-05-22T18:30:55.581Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:30:55.581Z",
    },
    __v: 0,
  },
  {
    _id: "646bb4dfed48492ab9c515df",
    place_id: "ChIJU0MCtf17VRIR4toGl0Hozsw",
    city: "Gj",
    country: "Ghannouch, Tunisia",
    location: {
      lat: "33.9337224",
      lng: "10.0616681",
    },
    createdAt: {
      $date: "2023-05-22T18:30:55.663Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:30:55.663Z",
    },
    __v: 0,
  },
  {
    _id: "646bb544ed48492ab9c5162b",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Djerba Midun",
    country: "Tunisia",
    location: {
      lat: "33.8215722",
      lng: "10.997658",
    },
    createdAt: {
      $date: "2023-05-22T18:32:36.534Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:32:36.534Z",
    },
    __v: 0,
  },
  {
    _id: "646bb544ed48492ab9c5162d",
    place_id: "ChIJl8FwB5IrABMRXc5smy-KypQ",
    city: "Tyna",
    country: "Tunisia",
    location: {
      lat: "34.6879749",
      lng: "10.707544",
    },
    createdAt: {
      $date: "2023-05-22T18:32:36.614Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:32:36.614Z",
    },
    __v: 0,
  },
  {
    _id: "646bb5eeed48492ab9c51673",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Djerba Midun",
    country: "Tunisia",
    location: {
      lat: "33.8215722",
      lng: "10.997658",
    },
    createdAt: {
      $date: "2023-05-22T18:35:26.855Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:35:26.855Z",
    },
    __v: 0,
  },
  {
    _id: "646bb5eeed48492ab9c51675",
    place_id: "ChIJQ_V-Xn8z_RIRdQJKcU6ScdY",
    city: "Tunis",
    country: "Tunisia",
    location: {
      lat: "36.8064948",
      lng: "10.1815316",
    },
    createdAt: {
      $date: "2023-05-22T18:35:26.936Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:35:26.936Z",
    },
    __v: 0,
  },
  {
    _id: "646bb6abed48492ab9c5169e",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Djerba Midun",
    country: "Tunisia",
    location: {
      lat: "33.8215722",
      lng: "10.997658",
    },
    createdAt: {
      $date: "2023-05-22T18:38:35.574Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:38:35.574Z",
    },
    __v: 0,
  },
  {
    _id: "646bb6abed48492ab9c516a0",
    place_id: "ChIJQ_V-Xn8z_RIRdQJKcU6ScdY",
    city: "Tunis",
    country: "Tunisia",
    location: {
      lat: "36.8064948",
      lng: "10.1815316",
    },
    createdAt: {
      $date: "2023-05-22T18:38:35.655Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:38:35.655Z",
    },
    __v: 0,
  },
  {
    _id: "646bb70eed48492ab9c516d3",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Djerba Midun",
    country: "Tunisia",
    location: {
      lat: "33.8215722",
      lng: "10.997658",
    },
    createdAt: {
      $date: "2023-05-22T18:40:14.788Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:40:14.788Z",
    },
    __v: 0,
  },
  {
    _id: "646bb70eed48492ab9c516d5",
    place_id: "ChIJQ_V-Xn8z_RIRdQJKcU6ScdY",
    city: "Tunis",
    country: "Tunisia",
    location: {
      lat: "36.8064948",
      lng: "10.1815316",
    },
    createdAt: {
      $date: "2023-05-22T18:40:14.870Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:40:14.870Z",
    },
    __v: 0,
  },
  {
    _id: "646bb780ed48492ab9c51708",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Djerba Midun",
    country: "Tunisia",
    location: {
      lat: "33.8215722",
      lng: "10.997658",
    },
    createdAt: {
      $date: "2023-05-22T18:42:08.431Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:42:08.431Z",
    },
    __v: 0,
  },
  {
    _id: "646bb780ed48492ab9c5170a",
    place_id: "ChIJhfSKQHq14hIR4QsnK6KZoOQ",
    city: "bonjour canada",
    country: "Rue de la Mecque, La Marsa, Tunisia",
    location: {
      lat: "36.8752005",
      lng: "10.30828",
    },
    createdAt: {
      $date: "2023-05-22T18:42:08.512Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:42:08.512Z",
    },
    __v: 0,
  },
  {
    _id: "646bb8daed48492ab9c5173d",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Djerba Midun",
    country: "Tunisia",
    location: {
      lat: "33.8215722",
      lng: "10.997658",
    },
    createdAt: {
      $date: "2023-05-22T18:47:54.475Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:47:54.475Z",
    },
    __v: 0,
  },
  {
    _id: "646bb8daed48492ab9c5173f",
    place_id: "ChIJQ_V-Xn8z_RIRdQJKcU6ScdY",
    city: "Tunis",
    country: "Tunisia",
    location: {
      lat: "36.8064948",
      lng: "10.1815316",
    },
    createdAt: {
      $date: "2023-05-22T18:47:54.555Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:47:54.555Z",
    },
    __v: 0,
  },
  {
    _id: "646bb940ed48492ab9c51772",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Djerba Midun",
    country: "Tunisia",
    location: {
      lat: "33.8215722",
      lng: "10.997658",
    },
    createdAt: {
      $date: "2023-05-22T18:49:36.032Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:49:36.032Z",
    },
    __v: 0,
  },
  {
    _id: "646bb940ed48492ab9c51774",
    place_id: "ChIJQ_V-Xn8z_RIRdQJKcU6ScdY",
    city: "Tunis",
    country: "Tunisia",
    location: {
      lat: "36.8064948",
      lng: "10.1815316",
    },
    createdAt: {
      $date: "2023-05-22T18:49:36.112Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:49:36.112Z",
    },
    __v: 0,
  },
  {
    _id: "646bb9f9ed48492ab9c517a7",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Djerba Midun",
    country: "Tunisia",
    location: {
      lat: "33.8215722",
      lng: "10.997658",
    },
    createdAt: {
      $date: "2023-05-22T18:52:41.358Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:52:41.358Z",
    },
    __v: 0,
  },
  {
    _id: "646bb9f9ed48492ab9c517a9",
    place_id: "ChIJQ_V-Xn8z_RIRdQJKcU6ScdY",
    city: "Tunis",
    country: "Tunisia",
    location: {
      lat: "36.8064948",
      lng: "10.1815316",
    },
    createdAt: {
      $date: "2023-05-22T18:52:41.439Z",
    },
    updatedAt: {
      $date: "2023-05-22T18:52:41.439Z",
    },
    __v: 0,
  },
  {
    _id: "646bbbf7ed48492ab9c517dc",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Djerba Midun",
    country: "Tunisia",
    location: {
      lat: "33.8215722",
      lng: "10.997658",
    },
    createdAt: {
      $date: "2023-05-22T19:01:11.620Z",
    },
    updatedAt: {
      $date: "2023-05-22T19:01:11.620Z",
    },
    __v: 0,
  },
  {
    _id: "646bbbf7ed48492ab9c517de",
    place_id: "ChIJQ_V-Xn8z_RIRdQJKcU6ScdY",
    city: "Tunis",
    country: "Tunisia",
    location: {
      lat: "36.8064948",
      lng: "10.1815316",
    },
    createdAt: {
      $date: "2023-05-22T19:01:11.701Z",
    },
    updatedAt: {
      $date: "2023-05-22T19:01:11.701Z",
    },
    __v: 0,
  },
  {
    _id: "646bbc47ed48492ab9c51807",
    place_id: "ChIJQfKfMN40_RIRuQr1sMwUvIw",
    city: "DHL EXPRESS TUNISIA",
    country: "Tunis, Tunisia",
    location: {
      lat: "36.836774",
      lng: "10.211659",
    },
    createdAt: {
      $date: "2023-05-22T19:02:31.046Z",
    },
    updatedAt: {
      $date: "2023-05-22T19:02:31.046Z",
    },
    __v: 0,
  },
  {
    _id: "646bbc47ed48492ab9c51809",
    place_id: "ChIJQ_V-Xn8z_RIRdQJKcU6ScdY",
    city: "Tunis",
    country: "Tunisia",
    location: {
      lat: "36.8064948",
      lng: "10.1815316",
    },
    createdAt: {
      $date: "2023-05-22T19:02:31.126Z",
    },
    updatedAt: {
      $date: "2023-05-22T19:02:31.126Z",
    },
    __v: 0,
  },
  {
    _id: "646e3ae085d269983aae8c8c",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Djerba Midun",
    country: "Tunisia",
    location: {
      lat: "33.8215722",
      lng: "10.997658",
    },
    createdAt: {
      $date: "2023-05-24T16:27:12.768Z",
    },
    updatedAt: {
      $date: "2023-05-24T16:27:12.768Z",
    },
    __v: 0,
  },
  {
    _id: "646e3ae085d269983aae8c8e",
    place_id: "ChIJQ_V-Xn8z_RIRdQJKcU6ScdY",
    city: "Tunis",
    country: "Tunisia",
    location: {
      lat: "36.8064948",
      lng: "10.1815316",
    },
    createdAt: {
      $date: "2023-05-24T16:27:12.851Z",
    },
    updatedAt: {
      $date: "2023-05-24T16:27:12.851Z",
    },
    __v: 0,
  },
  {
    _id: "647118f20a38946e0d3406fc",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Kairouan",
    country: "Tunisia",
    location: {
      lat: "35.6759137",
      lng: "10.0919243",
    },
    createdAt: {
      $date: "2023-05-26T20:39:14.453Z",
    },
    updatedAt: {
      $date: "2023-05-26T20:39:14.453Z",
    },
    __v: 0,
  },
  {
    _id: "647118f20a38946e0d3406fe",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Dar Chabanne",
    country: "Tunisia",
    location: {
      lat: "36.4626965",
      lng: "10.7492466",
    },
    createdAt: {
      $date: "2023-05-26T20:39:14.539Z",
    },
    updatedAt: {
      $date: "2023-05-26T20:39:14.539Z",
    },
    __v: 0,
  },
  {
    _id: "6471192a0a38946e0d340718",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Kairouan",
    country: "Tunisia",
    location: {
      lat: "35.6759137",
      lng: "10.0919243",
    },
    createdAt: {
      $date: "2023-05-26T20:40:10.216Z",
    },
    updatedAt: {
      $date: "2023-05-26T20:40:10.216Z",
    },
    __v: 0,
  },
  {
    _id: "6471192a0a38946e0d34071a",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Dar Chabanne",
    country: "Tunisia",
    location: {
      lat: "36.4626965",
      lng: "10.7492466",
    },
    createdAt: {
      $date: "2023-05-26T20:40:10.304Z",
    },
    updatedAt: {
      $date: "2023-05-26T20:40:10.304Z",
    },
    __v: 0,
  },
  {
    _id: "6471194546f09e4ca4381ad9",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Kairouan",
    country: "Tunisia",
    location: {
      lat: "35.6759137",
      lng: "10.0919243",
    },
    createdAt: {
      $date: "2023-05-26T20:40:37.649Z",
    },
    updatedAt: {
      $date: "2023-05-26T20:40:37.649Z",
    },
    __v: 0,
  },
  {
    _id: "6471194546f09e4ca4381adb",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Dar Chabanne",
    country: "Tunisia",
    location: {
      lat: "36.4626965",
      lng: "10.7492466",
    },
    createdAt: {
      $date: "2023-05-26T20:40:37.895Z",
    },
    updatedAt: {
      $date: "2023-05-26T20:40:37.895Z",
    },
    __v: 0,
  },
  {
    _id: "6471198a55f032b805731191",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Kairouan",
    country: "Tunisia",
    location: {
      lat: "35.6759137",
      lng: "10.0919243",
    },
    createdAt: {
      $date: "2023-05-26T20:41:46.109Z",
    },
    updatedAt: {
      $date: "2023-05-26T20:41:46.109Z",
    },
    __v: 0,
  },
  {
    _id: "6471198a55f032b805731193",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Dar Chabanne",
    country: "Tunisia",
    location: {
      lat: "36.4626965",
      lng: "10.7492466",
    },
    createdAt: {
      $date: "2023-05-26T20:41:46.199Z",
    },
    updatedAt: {
      $date: "2023-05-26T20:41:46.199Z",
    },
    __v: 0,
  },
  {
    _id: "647119fa2610b1bd5c6476e7",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Kairouan",
    country: "Tunisia",
    location: {
      lat: "35.6759137",
      lng: "10.0919243",
    },
    createdAt: {
      $date: "2023-05-26T20:43:38.982Z",
    },
    updatedAt: {
      $date: "2023-05-26T20:43:38.982Z",
    },
    __v: 0,
  },
  {
    _id: "647119fb2610b1bd5c6476e9",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Dar Chabanne",
    country: "Tunisia",
    location: {
      lat: "36.4626965",
      lng: "10.7492466",
    },
    createdAt: {
      $date: "2023-05-26T20:43:39.075Z",
    },
    updatedAt: {
      $date: "2023-05-26T20:43:39.075Z",
    },
    __v: 0,
  },
  {
    _id: "64711a442610b1bd5c647704",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Kairouan",
    country: "Tunisia",
    location: {
      lat: "35.6759137",
      lng: "10.0919243",
    },
    createdAt: {
      $date: "2023-05-26T20:44:52.099Z",
    },
    updatedAt: {
      $date: "2023-05-26T20:44:52.099Z",
    },
    __v: 0,
  },
  {
    _id: "64711a442610b1bd5c647706",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Dar Chabanne",
    country: "Tunisia",
    location: {
      lat: "36.4626965",
      lng: "10.7492466",
    },
    createdAt: {
      $date: "2023-05-26T20:44:52.181Z",
    },
    updatedAt: {
      $date: "2023-05-26T20:44:52.181Z",
    },
    __v: 0,
  },
  {
    _id: "6471276b2334ded639003249",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Kairouan",
    country: "Tunisia",
    location: {
      lat: "35.6759137",
      lng: "10.0919243",
    },
    createdAt: {
      $date: "2023-05-26T21:40:59.299Z",
    },
    updatedAt: {
      $date: "2023-05-26T21:40:59.299Z",
    },
    __v: 0,
  },
  {
    _id: "6471276b2334ded63900324b",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Dar Chabanne",
    country: "Tunisia",
    location: {
      lat: "36.4626965",
      lng: "10.7492466",
    },
    createdAt: {
      $date: "2023-05-26T21:40:59.383Z",
    },
    updatedAt: {
      $date: "2023-05-26T21:40:59.383Z",
    },
    __v: 0,
  },
  {
    _id: "64712fb7a371315bf75a8a31",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Kairouan",
    country: "Tunisia",
    location: {
      lat: "35.6759137",
      lng: "10.0919243",
    },
    createdAt: {
      $date: "2023-05-26T22:16:23.481Z",
    },
    updatedAt: {
      $date: "2023-05-26T22:16:23.481Z",
    },
    __v: 0,
  },
  {
    _id: "64712fb7a371315bf75a8a33",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Dar Chabanne",
    country: "Tunisia",
    location: {
      lat: "36.4626965",
      lng: "10.7492466",
    },
    createdAt: {
      $date: "2023-05-26T22:16:23.564Z",
    },
    updatedAt: {
      $date: "2023-05-26T22:16:23.564Z",
    },
    __v: 0,
  },
  {
    _id: "64712fed46f963cdc8e9b3dd",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Kairouan",
    country: "Tunisia",
    location: {
      lat: "35.6759137",
      lng: "10.0919243",
    },
    createdAt: {
      $date: "2023-05-26T22:17:17.142Z",
    },
    updatedAt: {
      $date: "2023-05-26T22:17:17.142Z",
    },
    __v: 0,
  },
  {
    _id: "64712fed46f963cdc8e9b3df",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Dar Chabanne",
    country: "Tunisia",
    location: {
      lat: "36.4626965",
      lng: "10.7492466",
    },
    createdAt: {
      $date: "2023-05-26T22:17:17.223Z",
    },
    updatedAt: {
      $date: "2023-05-26T22:17:17.223Z",
    },
    __v: 0,
  },
  {
    _id: "6473d7908739066e2166b5e1",
    place_id: "ChIJkZluBAm8qhMRZso5GjDVMGg",
    city: "Djerba",
    country: "Tunisia",
    location: {
      lat: "33.8075978",
      lng: "10.8451467",
    },
    createdAt: {
      $date: "2023-05-28T22:37:04.421Z",
    },
    updatedAt: {
      $date: "2023-05-28T22:37:04.421Z",
    },
    __v: 0,
  },
  {
    _id: "6473d7948739066e2166b5f6",
    place_id: "ChIJkZluBAm8qhMRZso5GjDVMGg",
    city: "Djerba",
    country: "Tunisia",
    location: {
      lat: "33.8075978",
      lng: "10.8451467",
    },
    createdAt: {
      $date: "2023-05-28T22:37:08.809Z",
    },
    updatedAt: {
      $date: "2023-05-28T22:37:08.809Z",
    },
    __v: 0,
  },
  {
    _id: "6473d84b8739066e2166b614",
    place_id: "ChIJr-3Ux-uXqhMRVNUv5qOWxeA",
    city: "Djerba Midun",
    country: "Tunisia",
    location: {
      lat: "33.8215722",
      lng: "10.997658",
    },
    createdAt: {
      $date: "2023-05-28T22:40:11.383Z",
    },
    updatedAt: {
      $date: "2023-05-28T22:40:11.383Z",
    },
    __v: 0,
  },
  {
    _id: "6473d84b8739066e2166b616",
    place_id: "ChIJ_e28SIxQ_RIRtnKGbFoGIg0",
    city: "Tunicotex Group",
    country: "Sulayman, Tunisia",
    location: {
      lat: "36.6796069",
      lng: "10.492359",
    },
    createdAt: {
      $date: "2023-05-28T22:40:11.465Z",
    },
    updatedAt: {
      $date: "2023-05-28T22:40:11.465Z",
    },
    __v: 0,
  },
];
const changeTypedocument = async () => {
  try {
    ADRESSBACKUP.map(async (obj) => {
      await new Address({
        _id: obj._id,
        place_id: obj.place_id,
        city: obj.city,
        country: obj.country,
        location: {
          lat: parseFloat(obj.location.lat),
          lng: parseFloat(obj.location.lng),
        },
      }).save();
    });
  } catch (err) {
    console.error(err);
  }
};
module.exports = changeTypedocument;
