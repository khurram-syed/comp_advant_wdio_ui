class PoliticianAddDataPage{

 get fullName(){return $('#fullName')}
 get country(){return $('#country')}
 get yob(){return $("[name='yob']")}
 get position(){return $('#position')}
 get sourceURLInfo(){return $('#url')}
 get riskLevel(){return $('#risk')}
 get submitBtn() {return $("//button[.='Save']")}
 get validFeedback(){return $(".valid-feedback")}
 get invalidFeedback(){return $(".invalid-feedback")}
 get sourceInfoURLLbl(){return $("label[for='url']")}
 get getDropdownOptions(){return $$("//select//option")}
 get yobLbl(){return $("label[for='yob']")}


/* --------Get Field Element-------- */
 
 getField(fieldName){
    switch(fieldName){
       case 'Full name':
              return this.fullName;
      case 'Country':
              return this.country;
      case 'Year of birth':
              return this.yob;
      case 'Position':
              return this.position;
      case 'Source info URL':
              return this.sourceURLInfo;
      case 'Risk level':
              return this.riskLevel;
      default:
            throw Error('No element found..!!')                                 
      }
  }

}
module.exports = new PoliticianAddDataPage();
