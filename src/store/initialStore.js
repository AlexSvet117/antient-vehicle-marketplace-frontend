/**
 * @file initialState.js
 * @description This file defines the initial state of the application store in a Flux architecture.
 * The initial state is an object that holds the default values for the application's state.
 * It is used by the store to initialize its state and can be referenced throughout the application
 * to reset or compare the current state.
 *
 * The initial state object for the Redux store.
 *
 * This object defines the default state of the application before any actions are dispatched.
 *
 * Usage:
 * - Import this initialState object into your store configuration.
 * - Use it to set up the default state for your reducers.
 *
 * What is a slice:
 * - A slice is a portion of the initial state that is managed by a specific reducer.
 * - Each slice typically corresponds to a specific feature or domain in your application.
 *
 * How to adjust for your needs:
 * - Add properties to this object to define the initial state for different slices of your application.
 * - Ensure that each property corresponds to a slice managed by a reducer.
 *
 * @example:
 * const initialState = {
 *   user: {
 *     isAuthenticated: false,
 *     details: null,
 *   },
 *   posts: {
 *     list: []
 *   },
 * };
 *
 */
export const initialState = () => ({
  // demo for todos - replace with your needed state
  todos: [
    {
      id: '1',
      title: 'This comes from your global store, delete it!',
      completed: false,
    },
  ],
  user: {
    isAuthenticated: false,
    userId: 1,
  },
  listings: [
    {
	address: "Avenida do Colegio 45",
	body_type: "coupe",
	city: "Lisboa",
	color: "White",
	condition: "Excellent",
	country: "Portugal",
	created_at: "Fri, 23 May 2025 01:22:22 GMT",
	description: "Super clean Porshe",
	id: 1,
	images: [
    {
      image_url: 
      'public/assets/images/1991_Porsche_964_Turbo_in_Summer_Yellow,_front_right.jpg',
    },
  ],
	inspection: "inspected",
	is_featured: "Yes",
	latitude: null,
	longitude: null,
	make: "Porshe",
	milage: 45000,
	model: "Carerra GT",
	owner_id: 2,
	price: 90000,
	state: null,
	status: "active",
	title: "!!!Super Clean Porshe can be yours!!!",
	transportation_cost: 5000,
	updated_at: "Fri, 23 May 2025 01:22:22 GMT",
	year: 1990,
	zip_code: 1500,
  tag: "Super clean"
},
{
    address: "Avenida do Colegio 45",
    body_type: "coupe",
    city: "Lisboa",
    color: "Guards Red",
    condition: "Excellent",
    country: "Portugal",
    created_at: "Fri, 23 May 2025 01:22:22 GMT",
    description: "Rare 1993 Porsche 964 Turbo S Leichtbau - one of only 86 produced. This lightweight masterpiece features the original 3.3L twin-turbo flat-6 producing 381hp. Complete service history, matching numbers, and original Recaro seats. Never exported to USA market.",
    id: 2,
    images: [
      {
        image_url: "public/assets/images/1993_Porsche_964_Turbo_S__Leichtbau__(cropped).jpg"
      }
    ],
    inspection: "inspected",
    is_featured: "Yes",
    latitude: null,
    longitude: null,
    make: "Porsche",
    milage: 28500,
    model: "964 Turbo S Leichtbau",
    owner_id: 2,
    price: 485000,
    state: null,
    status: "active",
    title: "Ultra-Rare 1993 Porsche 964 Turbo S Leichtbau",
    transportation_cost: 8500,
    updated_at: "Fri, 23 May 2025 01:22:22 GMT",
    year: 1993,
    zip_code: 1500,
    tag: "Ultra rare"
  },
  {
    address: "Rua das Flores 112",
    body_type: "coupe",
    city: "Porto",
    color: "Championship White",
    condition: "Mint",
    country: "Portugal",
    created_at: "Sat, 24 May 2025 09:15:33 GMT",
    description: "Pristine 1992 Honda NSX-R - Japan's answer to Ferrari. This Type R variant features weight reduction, stiffer suspension, and the legendary 3.0L VTEC V6. Original Recaro seats, titanium shift knob, and carbon fiber panels. JDM perfection never sold in America.",
    id: 3,
    images: [
      {
        image_url: "public/assets/images/1992_Honda_NSXR-1-1536.webp"
      }
    ],
    inspection: "inspected",
    is_featured: "Yes",
    latitude: null,
    longitude: null,
    make: "Honda",
    milage: 52000,
    model: "NSX-R",
    owner_id: 3,
    price: 195000,
    state: null,
    status: "active",
    title: "1992 Honda NSX-R - JDM Legend",
    transportation_cost: 7200,
    updated_at: "Sat, 24 May 2025 09:15:33 GMT",
    year: 1992,
    zip_code: 4000,
    tag: "JDM legend"
  },
  {
    address: "Autostraße 88",
    body_type: "sedan",
    city: "München",
    color: "Alpina Blue",
    condition: "Excellent",
    country: "Germany",
    created_at: "Sun, 25 May 2025 14:30:18 GMT",
    description: "Exceptional 1989 BMW E34 M5 - the original super sedan. Hand-built S38 3.6L inline-6 engine producing 315hp. This European-spec model features the rare dogleg 5-speed manual and sport differential. Extensive maintenance records and period-correct BBS wheels.",
    id: 4,
    images: [
      {
        image_url: "public/assets/images/DSC-4105.avif"
      }
    ],
    inspection: "inspected",
    is_featured: "No",
    latitude: null,
    longitude: null,
    make: "BMW",
    milage: 89000,
    model: "E34 M5",
    owner_id: 4,
    price: 78000,
    state: null,
    status: "active",
    title: "1989 BMW E34 M5 - Original Super Sedan",
    transportation_cost: 6800,
    updated_at: "Sun, 25 May 2025 14:30:18 GMT",
    year: 1989,
    zip_code: 80331,
    tag: "Super sedan"
  },
  {
    address: "Via Roma 27",
    body_type: "hatchback",
    city: "Milano",
    color: "Rosso Corsa",
    condition: "Very Good",
    country: "Italy",
    created_at: "Mon, 26 May 2025 11:45:12 GMT",
    description: "Iconic 1985 Lancia Delta S4 Stradale - homologation special for Group B rally. Twin-charged 1.8L engine with both turbo and supercharger producing 250hp. Only 200 road cars built. Complete with original Martini Racing livery and period accessories.",
    id: 5,
    images: [
      {
        image_url: "https://res.cloudinary.com/dwhnmmf3x/image/upload/1985_Lancia_Delta_S4_Stradale_Rosso_cropped_ghi789.jpg"
      }
    ],
    inspection: "inspected",
    is_featured: "Yes",
    latitude: null,
    longitude: null,
    make: "Lancia",
    milage: 31500,
    model: "Delta S4 Stradale",
    owner_id: 5,
    price: 425000,
    state: null,
    status: "active",
    title: "1985 Lancia Delta S4 Stradale - Group B Legend",
    transportation_cost: 9200,
    updated_at: "Mon, 26 May 2025 11:45:12 GMT",
    year: 1985,
    zip_code: 20121,
    tag: "Group B legend"
  },
  {
    address: "Sakura-dori 156",
    body_type: "coupe",
    city: "Tokyo",
    color: "Gun Metal Gray",
    condition: "Excellent",
    country: "Japan",
    created_at: "Tue, 27 May 2025 08:20:55 GMT",
    description: "Stunning 1994 Nissan Skyline GT-R V-Spec (R32) - Godzilla in its purest form. RB26DETT twin-turbo inline-6 with ATTESA E-TS AWD system. This V-Spec features the active rear LSD and upgraded brakes. Completely stock with original auction sheet.",
    id: 6,
    images: [
      {
        image_url: "https://res.cloudinary.com/dwhnmmf3x/image/upload/1994_Nissan_Skyline_GTR_R32_Gun_Metal_cropped_jkl012.jpg"
      }
    ],
    inspection: "inspected",
    is_featured: "Yes",
    latitude: null,
    longitude: null,
    make: "Nissan",
    milage: 67000,
    model: "Skyline GT-R V-Spec",
    owner_id: 6,
    price: 125000,
    state: null,
    status: "active",
    title: "1994 Nissan Skyline GT-R V-Spec R32 - Godzilla",
    transportation_cost: 12500,
    updated_at: "Tue, 27 May 2025 08:20:55 GMT",
    year: 1994,
    zip_code: 100,
    tag: "Godzilla"
  },
  {
    address: "Königsallee 203",
    body_type: "sedan",
    city: "Düsseldorf",
    color: "Smoke Silver",
    condition: "Excellent",
    country: "Germany",
    created_at: "Wed, 28 May 2025 16:10:40 GMT",
    description: "Immaculate 1991 Mercedes-Benz 500E - the Porsche-built super sedan. Hand-assembled at Porsche's Rossle-Bau facility with widened fenders and 5.0L V8 producing 326hp. One of the most exclusive sedans ever made, with only 10,479 produced worldwide.",
    id: 7,
    images: [
      {
        image_url: "https://res.cloudinary.com/dwhnmmf3x/image/upload/1991_Mercedes_500E_Smoke_Silver_cropped_mno345.jpg"
      }
    ],
    inspection: "inspected",
    is_featured: "No",
    latitude: null,
    longitude: null,
    make: "Mercedes-Benz",
    milage: 78500,
    model: "500E",
    owner_id: 7,
    price: 95000,
    state: null,
    status: "active",
    title: "1991 Mercedes-Benz 500E - Porsche Built",
    transportation_cost: 7500,
    updated_at: "Wed, 28 May 2025 16:10:40 GMT",
    year: 1991,
    zip_code: 40213,
    tag: "Porsche built"
  },
  {
    address: "Shibuya 2-15-1",
    body_type: "coupe",
    city: "Tokyo",
    color: "Super White II",
    condition: "Very Good",
    country: "Japan",
    created_at: "Thu, 29 May 2025 12:35:28 GMT",
    description: "Legendary 1993 Toyota Supra RZ (A80) - the ultimate JDM sports car. Twin-turbo 2JZ-GTE inline-6 producing 280hp (gentlemen's agreement). 6-speed Getrag manual, Torsen LSD, and the iconic mk4 styling. Completely original with service history.",
    id: 8,
    images: [
      {
        image_url: "https://res.cloudinary.com/dwhnmmf3x/image/upload/1993_Toyota_Supra_RZ_A80_Super_White_cropped_pqr678.jpg"
      }
    ],
    inspection: "inspected",
    is_featured: "Yes",
    latitude: null,
    longitude: null,
    make: "Toyota",
    milage: 95000,
    model: "Supra RZ",
    owner_id: 8,
    price: 145000,
    state: null,
    status: "active",
    title: "1993 Toyota Supra RZ (A80) - JDM Icon",
    transportation_cost: 11800,
    updated_at: "Thu, 29 May 2025 12:35:28 GMT",
    year: 1993,
    zip_code: 150,
    tag: "JDM icon"
  },
  {
    address: "Boulevard Saint-Germain 94",
    body_type: "hatchback",
    city: "Paris",
    color: "Tornado Red",
    condition: "Good",
    country: "France",
    created_at: "Fri, 30 May 2025 10:18:44 GMT",
    description: "Rare 1987 Peugeot 205 T16 - Group B homologation special. Mid-mounted turbocharged 1.8L engine producing 200hp in road trim. Only 200 street versions built for homologation. Features flared fenders, unique interior, and rally pedigree.",
    id: 9,
    images: [
      {
        image_url: "https://res.cloudinary.com/dwhnmmf3x/image/upload/1987_Peugeot_205_T16_Tornado_Red_cropped_stu901.jpg"
      }
    ],
    inspection: "inspected",
    is_featured: "No",
    latitude: null,
    longitude: null,
    make: "Peugeot",
    milage: 45800,
    model: "205 T16",
    owner_id: 9,
    price: 285000,
    state: null,
    status: "active",
    title: "1987 Peugeot 205 T16 - Group B Homologation",
    transportation_cost: 8800,
    updated_at: "Fri, 30 May 2025 10:18:44 GMT",
    year: 1987,
    zip_code: 75006,
    tag: "Group B special"
  },
  {
    address: "Ginza 4-6-16",
    body_type: "coupe",
    city: "Tokyo",
    color: "Brilliant Black",
    condition: "Excellent",
    country: "Japan",
    created_at: "Sat, 31 May 2025 15:42:17 GMT",
    description: "Pristine 1995 Mazda RX-7 Type RS (FD3S) - the ultimate rotary sports car. Twin-turbo 13B-REW rotary engine producing 280hp. Lightweight Type RS variant with stripped interior and enhanced aero. Sequential twin-turbo system and perfect 50/50 weight distribution.",
    id: 10,
    images: [
      {
        image_url: "https://res.cloudinary.com/dwhnmmf3x/image/upload/1995_Mazda_RX7_Type_RS_FD3S_Brilliant_Black_cropped_vwx234.jpg"
      }
    ],
    inspection: "inspected",
    is_featured: "Yes",
    latitude: null,
    longitude: null,
    make: "Mazda",
    milage: 38000,
    model: "RX-7 Type RS",
    owner_id: 10,
    price: 95000,
    state: null,
    status: "active",
    title: "1995 Mazda RX-7 Type RS - Rotary Perfection",
    transportation_cost: 10200,
    updated_at: "Sat, 31 May 2025 15:42:17 GMT",
    year: 1995,
    zip_code: 104,
    tag: "Rotary perfection"
  },
  {
    address: "Unter den Linden 77",
    body_type: "coupe",
    city: "Berlin",
    color: "Alpine White",
    condition: "Very Good",
    country: "Germany",
    created_at: "Sun, 1 Jun 2025 13:25:09 GMT",
    description: "Beautiful 1988 BMW E30 M3 Evolution II - the ultimate driving machine. S14 2.5L naturally aspirated inline-4 producing 238hp. This Evo II features enlarged front spoiler, adjustable rear wing, and sport suspension. Track-bred homologation special with racing DNA.",
    id: 11,
    images: [
      {
        image_url: "https://res.cloudinary.com/dwhnmmf3x/image/upload/1988_BMW_E30_M3_Evo_II_Alpine_White_cropped_yzab567.jpg"
      }
    ],
    inspection: "inspected",
    is_featured: "No",
    latitude: null,
    longitude: null,
    make: "BMW",
    milage: 72000,
    model: "E30 M3 Evolution II",
    owner_id: 11,
    price: 165000,
    state: null,
    status: "active",
    title: "1988 BMW E30 M3 Evolution II - Ultimate Driving Machine",
    transportation_cost: 8200,
    updated_at: "Sun, 1 Jun 2025 13:25:09 GMT",
    year: 1988,
    zip_code: 10117,
    tag: "Ultimate driving machine"
  }

  ]
  // you can add here more slices (properties in the object) - user, theme, etc...
});
