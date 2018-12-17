class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }

  speak(){
    console.log(this.sound);
  }


  get activity() {
    const today = new Date();
    const hours = today.getHours();

    if (hours > 8 && hours < 20) {
      return ('playing');
    } else {
      return 'sleeping';
    }
  }

  get owner(){
    return this._owner;
  }

  set owner(owner) {
    this._owner = owner;
    console.log(`setter called : ${owner}`);
  }
}
const Anatheme = new Pet('cat', '1.5', 'MaineCoon', 'Meow');
const Sos = new Pet('cat', '1', "Black and White", 'Rouuu');
const Neela = new Pet('cat', '2', 'Sauvage cat', 'Pchiiit');


Anatheme.speak();
Sos.speak();
Neela.speak();

console.log(Anatheme.activity);


Anatheme.owner = 'Lylie';
console.log(Anatheme.owner);
