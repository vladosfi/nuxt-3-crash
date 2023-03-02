export default defineEventHandler(async (event) => {
  //handle query params
    const { name } = getQuery(event);
    
    //handle post data
    const { age } = await readBody(event); 

    //api call with private key
    const { data } = await $fetch("https://api.currencyapi.com/v3/latest?apikey=FwaJbQqfDo3lUtHhEt9t4YtSgXtI1GkTaIttxWVm");

  return {
    message: `Hello, ${name}! You are ${age} years old. Currency data: ${JSON.stringify(data)}`,
  };
});
