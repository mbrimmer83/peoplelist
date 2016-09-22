function getData() {
  var people = [
    {
      "id": 0,
      "isActive": false,
      "balance": "$2,976.27",
      "age": 18,
      "eyeColor": "green",
      "firstName": "Ursula",
      "lastName": "Mayo",
      "gender": "female",
      "company": "MAXEMIA",
      "email": "ursulamayo@maxemia.com",
      "phone": "+1 (875) 400-2485",
      "address": "624 Trucklemans Lane, Odessa, New Jersey, 3660",
      "friends": [
        {
          "id": 0,
          "name": "Tessa Haynes"
        },
        {
          "id": 1,
          "name": "Ginger Garrett"
        },
        {
          "id": 2,
          "name": "Bridgette Moses"
        }
      ],
      "favoriteFruit": "apple"
    },
    {
      "id": 1,
      "isActive": true,
      "balance": "$3,501.73",
      "age": 53,
      "eyeColor": "blue",
      "firstName": "Marquez",
      "lastName": "Hodges",
      "gender": "male",
      "company": "ZYTRAX",
      "email": "marquezhodges@zytrax.com",
      "phone": "+1 (998) 531-3405",
      "address": "601 Hyman Court, Gardiner, Idaho, 861",
      "friends": [
        {
          "id": 0,
          "name": "Klein Wells"
        },
        {
          "id": 1,
          "name": "Randall French"
        },
        {
          "id": 2,
          "name": "Garrison Warren"
        }
      ],
      "favoriteFruit": "banana"
    },
    {
      "id": 2,
      "isActive": false,
      "balance": "$2,582.92",
      "age": 25,
      "eyeColor": "brown",
      "firstName": "Ball",
      "lastName": "Spence",
      "gender": "male",
      "company": "TUBALUM",
      "email": "ballspence@tubalum.com",
      "phone": "+1 (818) 451-3945",
      "address": "714 Bay Street, Caroleen, Puerto Rico, 6322",
      "friends": [
        {
          "id": 0,
          "name": "Holman Vang"
        },
        {
          "id": 1,
          "name": "Mccarty Aguirre"
        },
        {
          "id": 2,
          "name": "Haynes Mack"
        }
      ],
      "favoriteFruit": "apple"
    },
    {
      "id": 3,
      "isActive": true,
      "balance": "$1,644.88",
      "age": 20,
      "eyeColor": "brown",
      "firstName": "Kayla",
      "lastName": "Fry",
      "gender": "female",
      "company": "ZILPHUR",
      "email": "kaylafry@zilphur.com",
      "phone": "+1 (845) 598-2356",
      "address": "211 Coffey Street, Heil, Missouri, 8913",
      "friends": [
        {
          "id": 0,
          "name": "Monica Osborne"
        },
        {
          "id": 1,
          "name": "Puckett Beach"
        },
        {
          "id": 2,
          "name": "Mallory Franklin"
        }
      ],
      "favoriteFruit": "banana"
    },
    {
      "id": 4,
      "isActive": true,
      "balance": "$1,926.00",
      "age": 24,
      "eyeColor": "brown",
      "firstName": "Barnett",
      "lastName": "Nguyen",
      "gender": "male",
      "company": "COWTOWN",
      "email": "barnettnguyen@cowtown.com",
      "phone": "+1 (847) 436-3709",
      "address": "705 Fair Street, Chloride, Washington, 8610",
      "friends": [
        {
          "id": 0,
          "name": "Graves Schroeder"
        },
        {
          "id": 1,
          "name": "Heather Fisher"
        },
        {
          "id": 2,
          "name": "Robin Bird"
        }
      ],
      "favoriteFruit": "strawberry"
    },
    {
      "id": 5,
      "isActive": true,
      "balance": "$1,677.97",
      "age": 29,
      "eyeColor": "brown",
      "firstName": "Elisabeth",
      "lastName": "Stephenson",
      "gender": "female",
      "company": "HARMONEY",
      "email": "elisabethstephenson@harmoney.com",
      "phone": "+1 (849) 512-2801",
      "address": "207 Glenwood Road, Leming, Indiana, 3365",
      "friends": [
        {
          "id": 0,
          "name": "Mills Jarvis"
        },
        {
          "id": 1,
          "name": "Liza Ferrell"
        },
        {
          "id": 2,
          "name": "Marci Gilbert"
        }
      ],
      "favoriteFruit": "banana"
    },
    {
      "id": 6,
      "isActive": true,
      "balance": "$1,981.25",
      "age": 48,
      "eyeColor": "green",
      "firstName": "Day",
      "lastName": "Sellers",
      "gender": "male",
      "company": "FIBRODYNE",
      "email": "daysellers@fibrodyne.com",
      "phone": "+1 (867) 422-3970",
      "address": "693 Charles Place, Joppa, Northern Mariana Islands, 9183",
      "friends": [
        {
          "id": 0,
          "name": "Cynthia Wong"
        },
        {
          "id": 1,
          "name": "Angelique Savage"
        },
        {
          "id": 2,
          "name": "Gardner Watson"
        }
      ],
      "favoriteFruit": "apple"
    },
    {
      "id": 7,
      "isActive": true,
      "balance": "$2,139.80",
      "age": 32,
      "eyeColor": "blue",
      "firstName": "Toni",
      "lastName": "Walker",
      "gender": "female",
      "company": "ACCUFARM",
      "email": "toniwalker@accufarm.com",
      "phone": "+1 (815) 516-3177",
      "address": "170 National Drive, Forestburg, Nebraska, 4449",
      "friends": [
        {
          "id": 0,
          "name": "Dolly Chapman"
        },
        {
          "id": 1,
          "name": "Erickson Ratliff"
        },
        {
          "id": 2,
          "name": "Rios Moon"
        }
      ],
      "favoriteFruit": "banana"
    },
    {
      "id": 8,
      "isActive": true,
      "balance": "$2,930.04",
      "age": 17,
      "eyeColor": "brown",
      "firstName": "Pearl",
      "lastName": "Edwards",
      "gender": "female",
      "company": "YURTURE",
      "email": "pearledwards@yurture.com",
      "phone": "+1 (826) 509-2042",
      "address": "643 Cass Place, Fairhaven, Marshall Islands, 5578",
      "friends": [
        {
          "id": 0,
          "name": "Chelsea Espinoza"
        },
        {
          "id": 1,
          "name": "Melanie Maynard"
        },
        {
          "id": 2,
          "name": "Petersen Nielsen"
        }
      ],
      "favoriteFruit": "strawberry"
    },
    {
      "id": 9,
      "isActive": true,
      "balance": "$1,627.69",
      "age": 37,
      "eyeColor": "green",
      "firstName": "Tamera",
      "lastName": "Nichols",
      "gender": "female",
      "company": "QUIZKA",
      "email": "tameranichols@quizka.com",
      "phone": "+1 (993) 470-2918",
      "address": "644 Furman Avenue, Gardners, Virginia, 8780",
      "friends": [
        {
          "id": 0,
          "name": "Carpenter Shepherd"
        },
        {
          "id": 1,
          "name": "Newton Dickerson"
        },
        {
          "id": 2,
          "name": "Sabrina Ford"
        }
      ],
      "favoriteFruit": "apple"
    },
    {
      "id": 10,
      "isActive": false,
      "balance": "$1,503.36",
      "age": 44,
      "eyeColor": "green",
      "firstName": "Meredith",
      "lastName": "Whitfield",
      "gender": "female",
      "company": "RUGSTARS",
      "email": "meredithwhitfield@rugstars.com",
      "phone": "+1 (830) 464-2047",
      "address": "400 Veterans Avenue, Bancroft, New York, 976",
      "friends": [
        {
          "id": 0,
          "name": "Minnie Skinner"
        },
        {
          "id": 1,
          "name": "Gretchen Meadows"
        },
        {
          "id": 2,
          "name": "Wendi Fitzgerald"
        }
      ],
      "favoriteFruit": "banana"
    },
    {
      "id": 11,
      "isActive": false,
      "balance": "$3,734.34",
      "age": 32,
      "eyeColor": "blue",
      "firstName": "Hickman",
      "lastName": "Fowler",
      "gender": "male",
      "company": "XYLAR",
      "email": "hickmanfowler@xylar.com",
      "phone": "+1 (933) 494-3268",
      "address": "489 Scholes Street, Elfrida, Colorado, 9135",
      "friends": [
        {
          "id": 0,
          "name": "Bobbi Bush"
        },
        {
          "id": 1,
          "name": "Kim Davis"
        },
        {
          "id": 2,
          "name": "Murray Ortiz"
        }
      ],
      "favoriteFruit": "apple"
    },
    {
      "id": 12,
      "isActive": false,
      "balance": "$2,564.54",
      "age": 41,
      "eyeColor": "blue",
      "firstName": "Vang",
      "lastName": "Foreman",
      "gender": "male",
      "company": "KONNECT",
      "email": "vangforeman@konnect.com",
      "phone": "+1 (836) 414-2576",
      "address": "582 Pooles Lane, Lynn, Maine, 1181",
      "friends": [
        {
          "id": 0,
          "name": "Chrystal Cash"
        },
        {
          "id": 1,
          "name": "Kirsten Williamson"
        },
        {
          "id": 2,
          "name": "Cooke Compton"
        }
      ],
      "favoriteFruit": "banana"
    },
    {
      "id": 13,
      "isActive": false,
      "balance": "$1,143.12",
      "age": 31,
      "eyeColor": "blue",
      "firstName": "Alexandria",
      "lastName": "Knowles",
      "gender": "female",
      "company": "KENGEN",
      "email": "alexandriaknowles@kengen.com",
      "phone": "+1 (816) 591-3926",
      "address": "803 Pershing Loop, Lowgap, West Virginia, 1977",
      "friends": [
        {
          "id": 0,
          "name": "Howell Hurst"
        },
        {
          "id": 1,
          "name": "Carey Harris"
        },
        {
          "id": 2,
          "name": "Alma Sandoval"
        }
      ],
      "favoriteFruit": "strawberry"
    },
    {
      "id": 14,
      "isActive": false,
      "balance": "$3,217.47",
      "age": 43,
      "eyeColor": "blue",
      "firstName": "Adkins",
      "lastName": "Johns",
      "gender": "male",
      "company": "ROTODYNE",
      "email": "adkinsjohns@rotodyne.com",
      "phone": "+1 (927) 567-3048",
      "address": "524 Jewel Street, Breinigsville, Tennessee, 3587",
      "friends": [
        {
          "id": 0,
          "name": "Maureen Jennings"
        },
        {
          "id": 1,
          "name": "Castro Garrison"
        },
        {
          "id": 2,
          "name": "Marks Harvey"
        }
      ],
      "favoriteFruit": "banana"
    },
    {
      "id": 15,
      "isActive": false,
      "balance": "$2,431.43",
      "age": 39,
      "eyeColor": "brown",
      "firstName": "Conner",
      "lastName": "Mcconnell",
      "gender": "male",
      "company": "CONFRENZY",
      "email": "connermcconnell@confrenzy.com",
      "phone": "+1 (874) 550-3586",
      "address": "815 Greene Avenue, Orick, Ohio, 8470",
      "friends": [
        {
          "id": 0,
          "name": "Melissa Mcclure"
        },
        {
          "id": 1,
          "name": "Ashley Johnston"
        },
        {
          "id": 2,
          "name": "Acevedo Strickland"
        }
      ],
      "favoriteFruit": "banana"
    },
    {
      "id": 16,
      "isActive": true,
      "balance": "$1,126.52",
      "age": 41,
      "eyeColor": "green",
      "firstName": "Rhoda",
      "lastName": "Roberts",
      "gender": "female",
      "company": "NIXELT",
      "email": "rhodaroberts@nixelt.com",
      "phone": "+1 (960) 431-3089",
      "address": "551 Ridgewood Avenue, Tryon, South Dakota, 2025",
      "friends": [
        {
          "id": 0,
          "name": "Jeanine Brooks"
        },
        {
          "id": 1,
          "name": "Tamika Randall"
        },
        {
          "id": 2,
          "name": "Nadine Higgins"
        }
      ],
      "favoriteFruit": "strawberry"
    },
    {
      "id": 17,
      "isActive": true,
      "balance": "$1,595.84",
      "age": 26,
      "eyeColor": "green",
      "firstName": "Danielle",
      "lastName": "Raymond",
      "gender": "female",
      "company": "EWAVES",
      "email": "danielleraymond@ewaves.com",
      "phone": "+1 (991) 576-3500",
      "address": "987 Strickland Avenue, Windsor, South Carolina, 3432",
      "friends": [
        {
          "id": 0,
          "name": "Greer Gates"
        },
        {
          "id": 1,
          "name": "Judith Bradford"
        },
        {
          "id": 2,
          "name": "Gabriela Clay"
        }
      ],
      "favoriteFruit": "strawberry"
    },
    {
      "id": 18,
      "isActive": false,
      "balance": "$3,418.19",
      "age": 37,
      "eyeColor": "blue",
      "firstName": "Price",
      "lastName": "Grant",
      "gender": "male",
      "company": "CYCLONICA",
      "email": "pricegrant@cyclonica.com",
      "phone": "+1 (995) 419-2598",
      "address": "353 Green Street, Lavalette, Michigan, 1836",
      "friends": [
        {
          "id": 0,
          "name": "Hooper Moody"
        },
        {
          "id": 1,
          "name": "Candace Lawrence"
        },
        {
          "id": 2,
          "name": "Frazier Silva"
        }
      ],
      "favoriteFruit": "strawberry"
    },
    {
      "id": 19,
      "isActive": true,
      "balance": "$1,252.66",
      "age": 46,
      "eyeColor": "brown",
      "firstName": "Nixon",
      "lastName": "Patterson",
      "gender": "male",
      "company": "VIRVA",
      "email": "nixonpatterson@virva.com",
      "phone": "+1 (868) 449-3625",
      "address": "228 Arlington Place, Saddlebrooke, Wisconsin, 6922",
      "friends": [
        {
          "id": 0,
          "name": "Alfreda Mckenzie"
        },
        {
          "id": 1,
          "name": "Rosales Miller"
        },
        {
          "id": 2,
          "name": "Workman Christian"
        }
      ],
      "favoriteFruit": "strawberry"
    }
  ];
  return people;
}
