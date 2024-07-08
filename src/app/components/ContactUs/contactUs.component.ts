import { Component, inject } from '@angular/core';
import { ConfigItem } from '../../services/config-item';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-contactUs',
  standalone: true,
  imports: [],
  templateUrl: './contactUS.component.html',
  styleUrl: './contactUs.component.css'
})
export class ContactUsComponent {
  pricing!: ConfigItem | undefined;
  configService: ConfigService = inject(ConfigService);

  constructor()  {
    this.pricing = this.configService.getPageByName("contactUs");
  }
}
