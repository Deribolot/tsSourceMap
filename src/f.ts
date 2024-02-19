

let cache:{[key:string]:any} = {};

// here, we're creating an anonymous function that loads up our HTML fragments
// then it adds them to our cache object
const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>{
  return requireContext
    .keys()
    .forEach((key) => (cache[key] = requireContext(key)));
    
}
// next, we call our importAll() function to load the files
// notice how this is where we call the require.context() function
// it uses our file path, whether to load subdirectories and what file type to get
importAll(require.context('../components', true, /.ts$/));

// finally, we can loop over our cache's keys and add the HTML to our output element
Object.keys(cache).forEach(
  (key) => {
    console.log(key, cache[key]?.default)
  }
);

// сделать папку типа pages, которая динимачески грузит страницы,
// каждая страница+ее компонент -- это отдельный бандл

// ignorePlugin
// contextReplacementFile


