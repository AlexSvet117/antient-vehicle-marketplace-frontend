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
 * @author dmytro-ch21
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
	images: [],
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
	title: "Super Clean Porshe can be yours",
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
	color: "White",
	condition: "Excellent",
	country: "Portugal",
	created_at: "Fri, 23 May 2025 01:22:22 GMT",
	description: "Super clean Porshe",
	id: 2,
	images: [],
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
	title: "Super Clean Porshe can be yours",
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
	color: "White",
	condition: "Excellent",
	country: "Portugal",
	created_at: "Fri, 23 May 2025 01:22:22 GMT",
	description: "Super clean Porshe",
	id: 3,
	images: [],
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
	title: "Super Clean Porshe can be yours",
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
	color: "White",
	condition: "Excellent",
	country: "Portugal",
	created_at: "Fri, 23 May 2025 01:22:22 GMT",
	description: "Super clean Porshe",
	id: 4,
	images: [],
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
	title: "Super Clean Porshe can be yours",
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
	color: "White",
	condition: "Excellent",
	country: "Portugal",
	created_at: "Fri, 23 May 2025 01:22:22 GMT",
	description: "Super clean Porshe",
	id: 5,
	images: [],
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
	title: "Super Clean Porshe can be yours",
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
	color: "White",
	condition: "Excellent",
	country: "Portugal",
	created_at: "Fri, 23 May 2025 01:22:22 GMT",
	description: "Super clean Porshe",
	id: 6,
	images: [],
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
	title: "Super Clean Porshe can be yours",
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
	color: "White",
	condition: "Excellent",
	country: "Portugal",
	created_at: "Fri, 23 May 2025 01:22:22 GMT",
	description: "Super clean Porshe",
	id: 7,
	images: [],
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
	title: "Super Clean Porshe can be yours",
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
	color: "White",
	condition: "Excellent",
	country: "Portugal",
	created_at: "Fri, 23 May 2025 01:22:22 GMT",
	description: "Super clean Porshe",
	id: 8,
	images: [],
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
	title: "Super Clean Porshe can be yours",
	transportation_cost: 5000,
	updated_at: "Fri, 23 May 2025 01:22:22 GMT",
	year: 1990,
	zip_code: 1500,
  tag: "Super clean"
},

  ]
  // you can add here more slices (properties in the object) - user, theme, etc...
});
