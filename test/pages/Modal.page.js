class ModalPage{

 get modalBox(){return $('.modal-content')}
 get modalBody(){return $('.modal-body')}
 get backButton(){return $("//button[.='Back']")}
 


}
module.exports = new ModalPage();
