export default class User {
  id!: number;
  [nom: string]: any;
  prenom?: string;
  date_de_naissance?: string;
  date_inscription!: string;
  nationalite?: string;

  constructor(data: any, update = false) {
    if (update) {
      this.update(data);
    } else {
      this.create(data);
    }
  }

  create = (obj: any) => {
    const checkAttribut: string[] = [
      "nom",
      "prenom",
      "date_de_naissance",
      "nationalite",
    ];
    let countNecessity: number = 0;
    this.nom ="";
    this.prenom= "";
    this.date_inscription = new Date().toLocaleString();
    this.date_de_naissance = "Non Renseigné";
    this.nationalite = "Non Renseigné";

    for (let key in obj) {
      // console.log(key);

      if (checkAttribut.includes(key)) {
        if (key == "nom" || key == "prenom") countNecessity++;
        this[key] = obj[key];
      }
    }
    if (countNecessity != 2) throw "Element necessaires manquant";
  };

  update = (obj: any) => {
    const checkAttribut: string[] = [
      "nom",
      "prenom",
      "date_de_naissance",
      "date_inscription",
      "nationalite",
    ];


    for (let key in obj) {
      // console.log(key);

      if (checkAttribut.includes(key)) {
        this[key] = obj[key];
      }
    }
  };
}
