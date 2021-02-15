export default async ({ store }) => {
  await store.dispatch('getFoodData');
}





/*

1. index.js >> actions >> API CALL (create env file with API KEY)
2. index.js >> mutations >> update state
3. create this file in plugins and register plugin in nuxt-config file!

up and running! :P

*/
