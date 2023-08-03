export class Popin {
  constructor() {
    console.log('Popin init ok...');

    document.querySelector('#popin-close').addEventListener('click', function() {
      document.querySelector('#popin').classList.add('display-none');
    });

    const listePopin = document.querySelectorAll('[popin]');

    for(const element of listePopin) {
      element.addEventListener('click', function() {
        document.querySelector('#popin-content').innerHTML = this.nextSibling.innerHTML;

        document.querySelector('#popin').classList.remove('display-none');
      });
    }
  }
}