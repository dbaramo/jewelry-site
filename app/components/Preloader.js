import Component from "classes/Component"
import each from 'lodash/each'

export default class Preloader extends Component {
  constructor () {
    super({
      element: '.preloader',
      elements: {
        title: '.preloader__text',
        number: '.preloader__number',
        images: document.querySelectorAll('img')
      }
    })

    this.length = 0

    console.log(this.element, this.elements)
    this.createLoader()
  }

  createLoader () {
    each(this.elements.images, element => {
      const image = new Image()

      image.onload = _ => this.onAssestLoaded(image)
      image.src = element.getAttribute('data-src')
    })
  }

  onAssestLoaded (image) {
    this.length+= 1
    console.log(Math.round(this.length / this.elements.images.length * 100))
  }
}