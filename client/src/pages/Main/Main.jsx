import React from "react";
import "./Main.css";
import Search from "../../components/Search/Search";

const dummy = {
  meta: { code: 200, requestId: "5c03a5614434b953654c4085" },
  response: {
    venues: [
      {
        id: "4eb2e4c58b81091f3192b33f",
        name: "Forest Villa",
        contact: {},
        location: {
          lat: 47.746128906029696,
          lng: -122.34861894977354,
          labeledLatLngs: [
            {
              label: "display",
              lat: 47.746128906029696,
              lng: -122.34861894977354
            }
          ],
          distance: 113,
          cc: "US",
          city: "Shoreline",
          state: "WA",
          country: "United States",
          formattedAddress: ["Shoreline, WA", "United States"]
        },
        categories: [
          {
            id: "4d954b06a243a5684965b473",
            name: "Residential Building (Apartment / Condo)",
            pluralName: "Residential Buildings (Apartments / Condos)",
            shortName: "Residential",
            icon: {
              prefix:
                "https://ss3.4sqi.net/img/categories_v2/building/apartment_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "4c4f11e592b6a5933984f970",
        name: "City of Shoreline",
        contact: {},
        location: {
          lat: 47.75713004127423,
          lng: -122.34251383060716,
          distance: 1412,
          postalCode: "98177",
          cc: "US",
          state: "Washington",
          country: "United States",
          formattedAddress: ["WA 98177", "United States"]
        },
        categories: [
          {
            id: "50aa9e094b90af0d42d5de0d",
            name: "City",
            pluralName: "Cities",
            shortName: "City",
            icon: {
              prefix:
                "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/neighborhood_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "4beb0dad62c0c928ada3e1d4",
        name: "7-Eleven",
        contact: {},
        location: {
          address: "928 N 160th St",
          lat: 47.7452231634599,
          lng: -122.346878787566,
          labeledLatLngs: [
            { label: "display", lat: 47.7452231634599, lng: -122.346878787566 }
          ],
          distance: 207,
          postalCode: "98133",
          cc: "US",
          city: "Shoreline",
          state: "WA",
          country: "United States",
          formattedAddress: [
            "928 N 160th St",
            "Shoreline, WA 98133",
            "United States"
          ]
        },
        categories: [
          {
            id: "4d954b0ea243a5684a65b473",
            name: "Convenience Store",
            pluralName: "Convenience Stores",
            shortName: "Convenience Store",
            icon: {
              prefix:
                "https://ss3.4sqi.net/img/categories_v2/shops/conveniencestore_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: true,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "4eceba61b8f7971d68af0107",
        name: "Parkwood Plaza",
        contact: {},
        location: {
          address: "Hwy 99 Aurora",
          lat: 47.74458736117476,
          lng: -122.3508491954658,
          labeledLatLngs: [
            {
              label: "display",
              lat: 47.74458736117476,
              lng: -122.3508491954658
            }
          ],
          distance: 126,
          postalCode: "98133",
          cc: "US",
          city: "Shoreline",
          state: "WA",
          country: "United States",
          formattedAddress: [
            "Hwy 99 Aurora",
            "Shoreline, WA 98133",
            "United States"
          ]
        },
        categories: [
          {
            id: "4bf58dd8d48988d1fd941735",
            name: "Shopping Mall",
            pluralName: "Shopping Malls",
            shortName: "Mall",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/shops/mall_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "49eea6b3f964a52076681fe3",
        name: "Central Market",
        contact: {},
        location: {
          address: "15505 Westminster Way N",
          crossStreet: "at N 155th St.",
          lat: 47.74268100859298,
          lng: -122.34945384963763,
          labeledLatLngs: [
            {
              label: "display",
              lat: 47.74268100859298,
              lng: -122.34945384963763
            }
          ],
          distance: 300,
          postalCode: "98133",
          cc: "US",
          city: "Shoreline",
          state: "WA",
          country: "United States",
          formattedAddress: [
            "15505 Westminster Way N (at N 155th St.)",
            "Shoreline, WA 98133",
            "United States"
          ]
        },
        categories: [
          {
            id: "4bf58dd8d48988d118951735",
            name: "Grocery Store",
            pluralName: "Grocery Stores",
            shortName: "Grocery Store",
            icon: {
              prefix:
                "https://ss3.4sqi.net/img/categories_v2/shops/food_grocery_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "4fdcc781e4b0b4dd29076e83",
        name: "Shoreline Farmer's Market",
        contact: {},
        location: {
          address: "15711 Aurora Ave N",
          lat: 47.75709684953482,
          lng: -122.34335706607443,
          labeledLatLngs: [
            {
              label: "display",
              lat: 47.75709684953482,
              lng: -122.34335706607443
            }
          ],
          distance: 1386,
          postalCode: "98133",
          cc: "US",
          city: "Shoreline",
          state: "WA",
          country: "United States",
          formattedAddress: [
            "15711 Aurora Ave N",
            "Shoreline, WA 98133",
            "United States"
          ]
        },
        categories: [
          {
            id: "4bf58dd8d48988d1fa941735",
            name: "Farmers Market",
            pluralName: "Farmers Markets",
            shortName: "Farmer's Market",
            icon: {
              prefix:
                "https://ss3.4sqi.net/img/categories_v2/shops/food_farmersmarket_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "4e700c82c65b340cde3fc104",
        name: "Yum Yum Thai",
        contact: {},
        location: {
          address: "900 N 160th St",
          lat: 47.74520896540084,
          lng: -122.34779074274395,
          labeledLatLngs: [
            {
              label: "display",
              lat: 47.74520896540084,
              lng: -122.34779074274395
            }
          ],
          distance: 139,
          postalCode: "98133",
          cc: "US",
          city: "Shoreline",
          state: "WA",
          country: "United States",
          formattedAddress: [
            "900 N 160th St",
            "Shoreline, WA 98133",
            "United States"
          ]
        },
        categories: [
          {
            id: "4bf58dd8d48988d149941735",
            name: "Thai Restaurant",
            pluralName: "Thai Restaurants",
            shortName: "Thai",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/food/thai_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "4d668883e07aa35df5eca98f",
        name: "SCC Shuttle @Sears",
        contact: {},
        location: {
          lat: 47.74531921362667,
          lng: -122.35007758811646,
          labeledLatLngs: [
            {
              label: "display",
              lat: 47.74531921362667,
              lng: -122.35007758811646
            }
          ],
          distance: 33,
          cc: "US",
          state: "Washington",
          country: "United States",
          formattedAddress: ["Washington", "United States"]
        },
        categories: [
          {
            id: "4bf58dd8d48988d1a8941735",
            name: "General College & University",
            pluralName: "General Colleges & Universities",
            shortName: "Education",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/education/other_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "5afca56a79f6c7002cbb30a2",
        name: "Washington State Department Of Licensing",
        contact: {},
        location: {
          lat: 47.744693,
          lng: -122.34762,
          labeledLatLngs: [
            { label: "display", lat: 47.744693, lng: -122.34762 }
          ],
          distance: 168,
          postalCode: "98133",
          cc: "US",
          city: "Shoreline",
          state: "WA",
          country: "United States",
          formattedAddress: ["Shoreline, WA 98133", "United States"]
        },
        categories: [
          {
            id: "4bf58dd8d48988d126941735",
            name: "Government Building",
            pluralName: "Government Buildings",
            shortName: "Government",
            icon: {
              prefix:
                "https://ss3.4sqi.net/img/categories_v2/building/government_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "559a58eb498eb31323ec343d",
        name: "5E Home",
        contact: {},
        location: {
          lat: 47.7485377,
          lng: -122.3492268,
          labeledLatLngs: [
            { label: "display", lat: 47.7485377, lng: -122.3492268 }
          ],
          distance: 353,
          postalCode: "98133",
          cc: "US",
          city: "Shoreline",
          state: "WA",
          country: "United States",
          formattedAddress: ["Shoreline, WA 98133", "United States"]
        },
        categories: [],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "4afb2f82f964a520e21b22e3",
        name: "Marshalls",
        contact: {},
        location: {
          address: "15801 Westminster Way N",
          crossStreet: "off Aurora",
          lat: 47.744591,
          lng: -122.348143,
          labeledLatLngs: [
            { label: "display", lat: 47.744591, lng: -122.348143 }
          ],
          distance: 141,
          postalCode: "98133",
          cc: "US",
          city: "Shoreline",
          state: "WA",
          country: "United States",
          formattedAddress: [
            "15801 Westminster Way N (off Aurora)",
            "Shoreline, WA 98133",
            "United States"
          ]
        },
        categories: [
          {
            id: "4bf58dd8d48988d1f6941735",
            name: "Department Store",
            pluralName: "Department Stores",
            shortName: "Department Store",
            icon: {
              prefix:
                "https://ss3.4sqi.net/img/categories_v2/shops/departmentstore_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: true,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "4c9e31f154c8a1cd31308b4b",
        name: "Sears Driving School",
        contact: {},
        location: {
          lat: 47.744088,
          lng: -122.347342,
          labeledLatLngs: [
            { label: "display", lat: 47.744088, lng: -122.347342 }
          ],
          distance: 223,
          postalCode: "98133",
          cc: "US",
          city: "Seattle",
          state: "WA",
          country: "United States",
          formattedAddress: ["Seattle, WA 98133", "United States"]
        },
        categories: [
          {
            id: "52e81612bcbc57f1066b7a42",
            name: "Driving School",
            pluralName: "Driving Schools",
            shortName: "Driving School",
            icon: {
              prefix:
                "https://ss3.4sqi.net/img/categories_v2/shops/automotive_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "4f4683ebe4b0f37b08c93160",
        name: "sears lot",
        contact: {},
        location: {
          lat: 47.74399898532886,
          lng: -122.35050006776899,
          labeledLatLngs: [
            {
              label: "display",
              lat: 47.74399898532886,
              lng: -122.35050006776899
            }
          ],
          distance: 166,
          postalCode: "98133",
          cc: "US",
          city: "Seattle",
          state: "WA",
          country: "United States",
          formattedAddress: ["Seattle, WA 98133", "United States"]
        },
        categories: [],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "4ba2e7bdf964a520942138e3",
        name: "Shay's Restaurant",
        contact: {},
        location: {
          address: "15744 Aurora Ave N",
          lat: 47.744862,
          lng: -122.345141,
          labeledLatLngs: [
            { label: "display", lat: 47.744862, lng: -122.345141 }
          ],
          distance: 341,
          postalCode: "98133",
          cc: "US",
          city: "Shoreline",
          state: "WA",
          country: "United States",
          formattedAddress: [
            "15744 Aurora Ave N",
            "Shoreline, WA 98133",
            "United States"
          ]
        },
        categories: [
          {
            id: "4bf58dd8d48988d14e941735",
            name: "American Restaurant",
            pluralName: "American Restaurants",
            shortName: "American",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/food/default_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "4da72245fa8ca9942856b8b1",
        name: "Department of Transportation",
        contact: {},
        location: {
          address: "15600 Dayton Ave N",
          crossStreet: "at 160th St",
          lat: 47.744088482914805,
          lng: -122.35213955557627,
          labeledLatLngs: [
            {
              label: "display",
              lat: 47.744088482914805,
              lng: -122.35213955557627
            }
          ],
          distance: 236,
          cc: "US",
          city: "Shoreline",
          state: "WA",
          country: "United States",
          formattedAddress: [
            "15600 Dayton Ave N (at 160th St)",
            "Shoreline, WA",
            "United States"
          ]
        },
        categories: [
          {
            id: "4bf58dd8d48988d126941735",
            name: "Government Building",
            pluralName: "Government Buildings",
            shortName: "Government",
            icon: {
              prefix:
                "https://ss3.4sqi.net/img/categories_v2/building/government_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "50a2f746e4b0b6bebd0b1e3a",
        name: "Hwy 99 Southbound",
        contact: {},
        location: {
          lat: 47.74541240530186,
          lng: -122.34567572445641,
          labeledLatLngs: [
            {
              label: "display",
              lat: 47.74541240530186,
              lng: -122.34567572445641
            }
          ],
          distance: 296,
          postalCode: "98101",
          cc: "US",
          city: "Seattle",
          state: "WA",
          country: "United States",
          formattedAddress: ["Seattle, WA 98101", "United States"]
        },
        categories: [
          {
            id: "4f2a23984b9023bd5841ed2c",
            name: "Moving Target",
            pluralName: "Moving Targets",
            shortName: "Moving Target",
            icon: {
              prefix:
                "https://ss3.4sqi.net/img/categories_v2/travel/movingtarget_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "4b85a54cf964a520a66a31e3",
        name: "Kitchen Central",
        contact: {},
        location: {
          crossStreet: "Westminster Way N",
          lat: 47.742849084952105,
          lng: -122.3492930574457,
          labeledLatLngs: [
            {
              label: "display",
              lat: 47.742849084952105,
              lng: -122.3492930574457
            }
          ],
          distance: 282,
          cc: "US",
          city: "Shoreline",
          state: "WA",
          country: "United States",
          formattedAddress: ["Shoreline, WA", "United States"]
        },
        categories: [],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "5276db7a498ea7e44ebcd42b",
        name: "Seattle Children's Bargain Boutique",
        contact: {},
        location: {
          lat: 47.744642,
          lng: -122.347094,
          labeledLatLngs: [
            { label: "display", lat: 47.744642, lng: -122.347094 }
          ],
          distance: 207,
          cc: "US",
          city: "Shoreline",
          state: "WA",
          country: "United States",
          formattedAddress: ["Shoreline, WA", "United States"]
        },
        categories: [
          {
            id: "4bf58dd8d48988d116951735",
            name: "Antique Shop",
            pluralName: "Antique Shops",
            shortName: "Antiques",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/shops/antique_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "4ee23978aa1f1c23b736e3ab",
        name: "Baristas Coffee",
        contact: {},
        location: {
          address: "16053 Aurora Ave N",
          lat: 47.746673583984375,
          lng: -122.34585571289062,
          labeledLatLngs: [
            {
              label: "display",
              lat: 47.746673583984375,
              lng: -122.34585571289062
            }
          ],
          distance: 317,
          postalCode: "98133",
          cc: "US",
          city: "Shoreline",
          state: "WA",
          country: "United States",
          formattedAddress: [
            "16053 Aurora Ave N",
            "Shoreline, WA 98133",
            "United States"
          ]
        },
        categories: [
          {
            id: "4bf58dd8d48988d1e0931735",
            name: "Coffee Shop",
            pluralName: "Coffee Shops",
            shortName: "Coffee Shop",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "4dc5f020d4c0ad9c0f961035",
        name: "Nature's Pet Market",
        contact: {},
        location: {
          address: "15407 Westminster Way N # 5A-1",
          lat: 47.7421373117124,
          lng: -122.35046953070545,
          labeledLatLngs: [
            {
              label: "display",
              lat: 47.7421373117124,
              lng: -122.35046953070545
            }
          ],
          distance: 365,
          postalCode: "98133",
          cc: "US",
          city: "Shoreline",
          state: "WA",
          country: "United States",
          formattedAddress: [
            "15407 Westminster Way N # 5A-1",
            "Shoreline, WA 98133",
            "United States"
          ]
        },
        categories: [
          {
            id: "4bf58dd8d48988d100951735",
            name: "Pet Store",
            pluralName: "Pet Stores",
            shortName: "Pet Store",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/shops/pet_store_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "4aec9ecdf964a52088c921e3",
        name: "Children's Hospital Thrift Store",
        contact: {},
        location: {
          address: "160th",
          crossStreet: "Aurora",
          lat: 47.74458424555787,
          lng: -122.34703344468973,
          labeledLatLngs: [
            {
              label: "display",
              lat: 47.74458424555787,
              lng: -122.34703344468973
            }
          ],
          distance: 213,
          cc: "US",
          city: "Shoreline",
          state: "WA",
          country: "United States",
          formattedAddress: ["160th (Aurora)", "Shoreline, WA", "United States"]
        },
        categories: [
          {
            id: "4bf58dd8d48988d101951735",
            name: "Thrift / Vintage Store",
            pluralName: "Thrift / Vintage Stores",
            shortName: "Thrift / Vintage",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/shops/default_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "4f6a64b7e4b01cb02d886a0e",
        name: "Foodcourt - Central Market",
        contact: {},
        location: {
          address: "15505 Westminster Way N",
          crossStreet: "Central Market",
          lat: 47.74248244096475,
          lng: -122.35012556276858,
          labeledLatLngs: [
            {
              label: "display",
              lat: 47.74248244096475,
              lng: -122.35012556276858
            }
          ],
          distance: 324,
          postalCode: "98133",
          cc: "US",
          city: "Shoreline",
          state: "WA",
          country: "United States",
          formattedAddress: [
            "15505 Westminster Way N (Central Market)",
            "Shoreline, WA 98133",
            "United States"
          ]
        },
        categories: [
          {
            id: "4bf58dd8d48988d120951735",
            name: "Food Court",
            pluralName: "Food Courts",
            shortName: "Food Court",
            icon: {
              prefix:
                "https://ss3.4sqi.net/img/categories_v2/shops/food_foodcourt_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "4e789625ae60e5ae00526370",
        name: "Interurban Trail Light Bridge",
        contact: {},
        location: {
          lat: 47.74342664819345,
          lng: -122.34525946540319,
          labeledLatLngs: [
            {
              label: "display",
              lat: 47.74342664819345,
              lng: -122.34525946540319
            }
          ],
          distance: 392,
          cc: "US",
          state: "Washington",
          country: "United States",
          formattedAddress: ["Washington", "United States"]
        },
        categories: [
          {
            id: "4bf58dd8d48988d1df941735",
            name: "Bridge",
            pluralName: "Bridges",
            shortName: "Bridge",
            icon: {
              prefix:
                "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/bridge_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "4f735f23e4b0905385708bb7",
        name: "Pier One",
        contact: {},
        location: {
          lat: 47.744049891126025,
          lng: -122.34623260597004,
          labeledLatLngs: [
            {
              label: "display",
              lat: 47.744049891126025,
              lng: -122.34623260597004
            }
          ],
          distance: 294,
          postalCode: "98034",
          cc: "US",
          city: "Kirkland",
          state: "WA",
          country: "United States",
          formattedAddress: ["Kirkland, WA 98034", "United States"]
        },
        categories: [],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "4baa2629f964a520724e3ae3",
        name: "Interurban Biking/Running Trail",
        contact: {},
        location: {
          lat: 47.743363712659935,
          lng: -122.34503746032715,
          labeledLatLngs: [
            {
              label: "display",
              lat: 47.743363712659935,
              lng: -122.34503746032715
            }
          ],
          distance: 410,
          cc: "US",
          city: "Shoreline",
          state: "WA",
          country: "United States",
          formattedAddress: ["Shoreline, WA", "United States"]
        },
        categories: [
          {
            id: "4bf58dd8d48988d159941735",
            name: "Trail",
            pluralName: "Trails",
            shortName: "Trail",
            icon: {
              prefix:
                "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/hikingtrail_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "4daaa655fa8cc764973a292a",
        name: "Turtle And Nils Pub",
        contact: {},
        location: {
          address: "16347 Linden Ave N",
          lat: 47.74826683333333,
          lng: -122.34857101666667,
          labeledLatLngs: [
            {
              label: "display",
              lat: 47.74826683333333,
              lng: -122.34857101666667
            }
          ],
          distance: 331,
          postalCode: "98133",
          cc: "US",
          city: "Shoreline",
          state: "WA",
          country: "United States",
          formattedAddress: [
            "16347 Linden Ave N",
            "Shoreline, WA 98133",
            "United States"
          ]
        },
        categories: [
          {
            id: "4d4b7105d754a06376d81259",
            name: "Nightlife Spot",
            pluralName: "Nightlife Spots",
            shortName: "Nightlife",
            icon: {
              prefix:
                "https://ss3.4sqi.net/img/categories_v2/nightlife/default_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "4b5b3c0df964a52021ed28e3",
        name: "Hopelink Shoreline",
        contact: {},
        location: {
          address: "15809 Westminster Way N",
          lat: 47.744706,
          lng: -122.347493,
          labeledLatLngs: [
            { label: "display", lat: 47.744706, lng: -122.347493 }
          ],
          distance: 176,
          postalCode: "98133",
          cc: "US",
          city: "Shoreline",
          state: "WA",
          country: "United States",
          formattedAddress: [
            "15809 Westminster Way N",
            "Shoreline, WA 98133",
            "United States"
          ]
        },
        categories: [
          {
            id: "4bf58dd8d48988d130941735",
            name: "Building",
            pluralName: "Buildings",
            shortName: "Building",
            icon: {
              prefix:
                "https://ss3.4sqi.net/img/categories_v2/building/default_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "50b7ef75e4b0a773c9eca9c2",
        name: "Value Pet Clinic",
        contact: {},
        location: {
          lat: 47.74453611598388,
          lng: -122.34614334335392,
          labeledLatLngs: [
            {
              label: "display",
              lat: 47.74453611598388,
              lng: -122.34614334335392
            }
          ],
          distance: 277,
          postalCode: "98133",
          cc: "US",
          city: "Seattle",
          state: "WA",
          country: "United States",
          formattedAddress: ["Seattle, WA 98133", "United States"]
        },
        categories: [
          {
            id: "4d954af4a243a5684765b473",
            name: "Veterinarian",
            pluralName: "Veterinarians",
            shortName: "Veterinarians",
            icon: {
              prefix:
                "https://ss3.4sqi.net/img/categories_v2/building/medical_veterinarian_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "4d76631641526ea82423548a",
        name: "WSDOT Dayton",
        contact: {},
        location: {
          address: "15700 Dayton Ave N",
          lat: 47.743241226553025,
          lng: -122.3514609209489,
          labeledLatLngs: [
            {
              label: "display",
              lat: 47.743241226553025,
              lng: -122.3514609209489
            }
          ],
          distance: 274,
          postalCode: "98133",
          cc: "US",
          city: "Shoreline",
          state: "WA",
          country: "United States",
          formattedAddress: [
            "15700 Dayton Ave N",
            "Shoreline, WA 98133",
            "United States"
          ]
        },
        categories: [
          {
            id: "4bf58dd8d48988d126941735",
            name: "Government Building",
            pluralName: "Government Buildings",
            shortName: "Government",
            icon: {
              prefix:
                "https://ss3.4sqi.net/img/categories_v2/building/government_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      },
      {
        id: "4dc0c22622713750ba6e111f",
        name: "Tropical Tan",
        contact: {},
        location: {
          address: "15507 Westminster Way N #D",
          lat: 47.74291015,
          lng: -122.34905841666667,
          labeledLatLngs: [
            { label: "display", lat: 47.74291015, lng: -122.34905841666667 }
          ],
          distance: 277,
          postalCode: "98133",
          cc: "US",
          city: "Shoreline",
          state: "WA",
          country: "United States",
          formattedAddress: [
            "15507 Westminster Way N #D",
            "Shoreline, WA 98133",
            "United States"
          ]
        },
        categories: [
          {
            id: "4d1cf8421a97d635ce361c31",
            name: "Tanning Salon",
            pluralName: "Tanning Salons",
            shortName: "Tanning Salon",
            icon: {
              prefix:
                "https://ss3.4sqi.net/img/categories_v2/shops/tanning_salon_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        verified: false,
        stats: { tipCount: 0, usersCount: 0, checkinsCount: 0, visitsCount: 0 },
        beenHere: {
          count: 0,
          lastCheckinExpiredAt: 0,
          marked: false,
          unconfirmedCount: 0
        },
        hereNow: { count: 0, summary: "Nobody here", groups: [] },
        referralId: "v-1543742817",
        venueChains: [],
        hasPerk: false
      }
    ],
    confident: false
  }
};

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      places: []
    };
  }

  componentDidMount() {
    /*
    const context = this;

    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      fetch(
        `https://api.foursquare.com/v2/venues/search?ll=${lat},${lon}&client_id=${
          process.env.REACT_APP_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&v=20180323`
      )
        .then(response => response.json())
        .then(place => context.setState({ places: place.response.venues }));
    });
  }
  */
    this.setState({ places: dummy.response.venues });
  }

  render() {
    return (
      <div className="Main">
        <Search />
        <h5>See whats nearby:</h5>
        {this.state.places.map((place, idx) => {
          const imgSrc =
            place.categories.length > 0 && place.categories[0].icon;
          return (
            <div key={idx} className="Place btn transparent card">
              <span className="left">{place.name}</span>
              {imgSrc && (
                <img
                  src={`${imgSrc.prefix}bg_32${imgSrc.suffix}`}
                  alt="icon"
                  className="right"
                />
              )}
            </div>
          );
        })}
        {console.log(this.state.places)}
      </div>
    );
  }
}

export default Main;
