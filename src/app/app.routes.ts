import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/ContactUs/contactUs.component';
import { TattooGalleryComponent } from './components/tattooGallery/tattooGallery.component';
import { PiercingGalleryComponent } from './components/piercingGallery/piercingGallery.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [

    { title: "1tattooz | Home", path: '', component: HeaderComponent },
    { title: "1tattooz | Home", path: 'home', component: HeaderComponent },
    { title: "1tattooz | About", path: 'about', component: AboutComponent },
    { title: "1tattooz | ContactUs", path: 'contactUs', component: ContactUsComponent },
    { title: "1tattooz | Tattoo", path: 'tattoo', component: TattooGalleryComponent },
    { title: "1tattooz | Piercing", path: 'piercing', component: PiercingGalleryComponent },
    { title: "1tattooz | Not Found", path: '**', component: NotfoundComponent },
];
