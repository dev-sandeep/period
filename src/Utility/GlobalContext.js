let context = '';
const GlobalContext = (contextInstance)=>{
    if(!context){
        context = contextInstance;
        console.log("setting global context");
    }
    console.log("returning global context");
    return context;
}
export default GlobalContext;