export class Popin {
  constructor() {
    console.log('Popin ok...');
    const listePopin = document.querySelectorAll('[popin]');

    for(const element of listePopin) {
      element.addEventListener('click', function() {
        console.log('click on button....' + this.value);
      });
    }
  }
}