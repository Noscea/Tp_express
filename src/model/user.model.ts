export default class User {
  id!: number;
  [nom: string]:any;
  prenom?: string;
  date_de_naissance?: string;
  date_inscription!: Date;
  nationalite?: string;

  constructor(data?: any) {
    if (data) this.create(data);
  }

  create = (obj: any) => {
    const checkAttribut = ["nom", "prenom", "date_de_naissance", "nationalite"];

    this.date_inscription = new Date();
    this.date_de_naissance = "Non Renseigné";
    this.nationalite = "Non Renseigné";

    for (let key in obj) {
        // console.log(key);
        
      if (checkAttribut.includes(key)) {
        this[key] = obj[key];
      }
    }
  };
}
