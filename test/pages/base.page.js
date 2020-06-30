class BasePage{
  
  //***** This Class is used to do all the Automation actions with(like click, setValue, getText etc.) with highlighting the control ***/   

    waitToLoad(timeInSec=2){
        browser.pause(timeInSec*1000)
    }
  
    highLightControl(element){
        browser.execute("arguments[0].style.border='2px solid blue'", element);
    }
     
    webClick(element){
         this.highLightControl(element);
         element.click(); 
    }

   webGetValue(element){
     this.webWaitForDisplayed(element)
     return element.getValue(); 
   }
   webSetValue(element,value){
        this.webWaitForDisplayed(element)
        element.setValue(value); 
    }

    webClearValue(element){
        this.webWaitForDisplayed(element)
        element.clearValue(); 
    }

    webAddValue(element,value){
        this.webWaitForDisplayed(element)
        element.addValue(value); 
    }

    webGetText(element){
        this.highLightControl(element);
       return  element.getText();
    }

/* ------------------ WaitForDisplayed command -------------- */

    webWaitForDisplayed(element,timeout=10000,reverse=false,timeoutMsg='waitForDisplayed false',interval=250){
        console.log(`*** In webWaitForDisplayed --> timeout : ${timeout} - reverse:${reverse}`)
        const isDisplayed = element.waitForDisplayed({timeout:timeout,reverse:reverse,timeoutMsg:timeoutMsg,interval:interval});
        console.log('****webWaitForDisplayed - isDisplayed :',isDisplayed)
        if(isDisplayed){
            this.highLightControl(element);
        }
         return isDisplayed;
    }
    
}
module.exports = new BasePage();