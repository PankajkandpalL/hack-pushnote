const axios = require("axios");

async function mailSender(userEmail, userName, resetPassword){
   try{
      var options = {
         method: 'POST',
         url: 'https://tense-gold-magpie.cyclic.app/resetPassword',
         headers: {
            'Content-Type': 'application/json'
         },
         data: {
           userEmail: userEmail,
           userName: userName,
           resetPassword: resetPassword
         }
       };
       const data = await axios.request(options);
       console.log(data)
       if(data){
         return true;
       }else{
         return false
       }
   }
   catch(e){
      console.error(e.message)
      return false;
   }
}

module.exports = {
    mailSender
}