export class Client{
    civilite: string="";
    nom: string="";
    prenom: string="";
    telephone: string="";
    email: string="";
    adresse: string="";
    ville: string="";
    code_postal: string="";
    login: string="";
    password: string="";
    password_conf:string="";
      
    isEmpty (){
      return (this.civilite.length===0)&&
      (this.nom.length===0)&&
      (this.prenom.length===0)&&
      (this.telephone.length===0)&&
      (this.email.length===0)&&
      (this.adresse.length===0)&&
      (this.ville.length===0)&&
      (this.code_postal.length===0)&&
      (this.login.length===0)&&
      (this.password.length===0)&&
      (this.password_conf.length===0) as boolean
    }
  }