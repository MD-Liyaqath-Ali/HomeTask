// https://www.codewars.com/kata/can-you-keep-a-secret
// For Problem Statement and Function call open the above link and proceed with --> Select JS as Language Then --> TRAIN

function createSecretHolder(secret) {
    return {
      getSecret : function(){
        return secret;
      },
      setSecret : function(setterSecret){
        secret=setterSecret;
      }
    }
}