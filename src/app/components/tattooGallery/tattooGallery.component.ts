import { Component, inject } from '@angular/core';
import { ConfigItem } from '../../services/config-item';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './tattooGallery.component.html',
  styleUrl: './tattooGallery.component.css'
})
export class TattooGalleryComponent {
  gallery!: ConfigItem | undefined;
  configService: ConfigService = inject(ConfigService);

  constructor()  {
    this.gallery = this.configService.getPageByName("tattoo");
  }
}
