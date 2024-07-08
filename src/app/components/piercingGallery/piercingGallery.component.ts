import { Component, inject } from '@angular/core';
import { ConfigItem } from '../../services/config-item';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-gallery1',
  standalone: true,
  imports: [],
  templateUrl: './piercingGallery.component.html',
  styleUrl: './piercingGallery.component.css'
})
export class PiercingGalleryComponent {
  gallery!: ConfigItem | undefined;
  configService: ConfigService = inject(ConfigService);

  constructor()  {
    this.gallery = this.configService.getPageByName("piercing");
  }
  
}
