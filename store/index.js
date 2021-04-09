export const state = () => ({
    user:{},
    messages:[],
    users:[]
   });
   
   export const mutations = {
     setUser(state, user){
       state.user.name = user
       state.users.push(user)
       console.log(state.users)
     },
     
     clearData(state){
       state.user = {},
       state.messages = [],
       state.users = []
     },
   };