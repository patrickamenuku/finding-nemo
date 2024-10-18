import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [
    NgClass,
    CommonModule
  ],
  templateUrl: './lightbox.component.html'
})
export class LightboxComponent {
  images: {url: string, thumbnail: string}[] = [
    {
      url: 'assets/images/image-product-1.jpg',
      thumbnail: 'assets/images/image-product-1-thumbnail.jpg'
    },
    {
      url: 'assets/images/image-product-2.jpg',
      thumbnail: 'assets/images/image-product-2-thumbnail.jpg'
    },
    {
      url: 'assets/images/image-product-3.jpg',
      thumbnail: 'assets/images/image-product-3-thumbnail.jpg'
    },
    {
      url: 'assets/images/image-product-4.jpg',
      thumbnail: 'assets/images/image-product-4-thumbnail.jpg'
    }
  ];
  displayedImg: string = this.images.at(0)!.url;
  fadeImage: boolean = false;
  isOpen: boolean = false;

  switchImage(image: {url: string, thumbnail: string}): void {
    this.displayedImg = image.url;
    this.fadeImage = !this.fadeImage;
  }

  nextImg(): void {
    const indx = this.images.findIndex(img => img.url === this.displayedImg);

    if (indx + 1 === this.images.length)
      this.displayedImg = this.images.at(0)!.url;
    else
      this.displayedImg = this.images.at(indx + 1)!.url;
      
    this.fadeImage = !this.fadeImage;
  }

  prevImg(): void {
    const indx = this.images.findIndex(img => img.url === this.displayedImg);

    if (indx - 1 < 0)
      this.displayedImg = this.images.at(this.images.length - 1)!.url;
    else
      this.displayedImg = this.images.at(indx - 1)!.url;
      
    this.fadeImage = !this.fadeImage;
  }

  toggleLightBox(insideLighbox: boolean = false): void {
    if(!insideLighbox) this.isOpen = !this.isOpen;
  }
}
