import { Injectable } from "@angular/core";

@Injectable()
export class CommonFnService {
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getImpactOnPest(pestId:number, popln:number,  resourceId:number){
    if(pestId===1){
      if(resourceId===1){
        return popln - popln*0.2
      }else if(resourceId===2){
        return popln - popln*0.1
      }else if(resourceId===3){
        return popln - popln*0
      }else if(resourceId===4){
        return popln - popln*0.3
      }else if(resourceId===5){
        return popln - popln*0
      }else if(resourceId===6){
        return popln - popln*0.2
      }

    }else if(pestId===2){
       if(resourceId===1){
        return popln - popln*0.1
      }else if(resourceId===2){
        return popln - popln*0
      }else if(resourceId===3){
        return popln - popln*0
      }else if(resourceId===4){
        return popln - popln*0.3
      }else if(resourceId===5){
        return popln - popln*0.2
      }else if(resourceId===6){
        return popln - popln*0.1
      }

    }else if(pestId===1){
       if(resourceId===1){
        return popln - popln*0
      }else if(resourceId===2){
        return popln - popln*0.2
      }else if(resourceId===3){
        return popln - popln*0.3
      }else if(resourceId===4){
        return popln - popln*0
      }else if(resourceId===5){
        return popln - popln*0
      }else if(resourceId===6){
        return popln - popln*0
      }
    }else if(pestId===4){
     if(resourceId===1){
        return popln - popln*0.1
      }else if(resourceId===2){
        return popln - popln*0.4
      }else if(resourceId===3){
        return popln - popln*0
      }else if(resourceId===4){
        return popln - popln*0.5
      }else if(resourceId===5){
        return popln - popln*0.2
      }else if(resourceId===6){
        return popln - popln*0
      }
    }
  }
}
