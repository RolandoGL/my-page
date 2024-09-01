import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent implements AfterViewInit {
  @ViewChild('image') imageRef!: ElementRef<HTMLImageElement>;
  public activeIndex: number = 0;
  public imagesArry: string[] = [
    'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
    'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
    'https://media.es.wired.com/photos/6501e7429fa9000811a95fe8/16:9/w_2560%2Cc_limit/Adobe%2520Firefly.jpeg',
    'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
    'https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg',
  ];
  ngAfterViewInit() {
    this.onChangeImage();
  }

  async onChangeImage() {
    if( this.imagesArry.length === 0 ) return
    if( this.imagesArry.length === 1 ) return

    while (true) {
      for (const item of this.imagesArry) {
        const result = await this.setNewImage(item);
        this.activeIndex++;
        this.imageRef.nativeElement.src = result;
      }
      this.activeIndex = 0;
    }
  }

  public setNewImage(image: string) {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        this.imageRef.nativeElement.classList.remove('animate__fadeInLeft');
        setTimeout( () => this.imageRef.nativeElement.classList.add('animate__fadeInLeft'), 1 );
        resolve(image);
      }, 5000);
    });
  }
}
