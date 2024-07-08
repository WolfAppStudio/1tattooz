import { Injectable } from '@angular/core';
import { ConfigItem } from './config-item';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configuration: ConfigItem[] = [
    {
      id: 1,
      name: "about",
      data: {
        title: "SUCCESS",
        description: "Why Choose 1tattooz?",
        detail: "1tattooz was built on a foundation of passion and professionalism. We stand out as a unique service oriented studio with intricate ties to the community it serves. Our artists have over 10 plus years of combined experience.",
        buttontext: "START CREATING TODAY",
        iconBlocks: [
          { id: 1, icon: "fa-child", title: "Consultation", description: "Your journey begins with a one-on-one consultation with our experienced artists. We’ll take the time to understand your vision, offering insights and suggestions to refine your design." },
          { id: 2, icon: "fa-paint-brush", title: "Art", description: "Once your vision is clear, our artists will craft a design that’s tailor-made for you. Whether it’s a small symbol or a full-sleeve masterpiece, every detail will be meticulously planned." },
          { id: 3, icon: "fa-spinner", title: "Execution", description: "With your design finalized, it’s time for the ink to meet your skin. Our artists work with precision, ensuring the process is as comfortable as possible." },
          { id: 4, icon: "fa-plus", title: "Aftercare", description: "Tattoo care doesn’t end with the needle; it’s an ongoing process. We’ll provide you with thorough aftercare instructions to ensure your tattoo heals beautifully." }
        ]
      }
    },
    {
      id: 3,
      name: "tattoo",
      data: {
        title: "Tattoo",
        description: "Tatto images",
        detail: "",
        galleryBlocks: [
          { id: 1, url: "../assets/images/Tatto/Tatto_1.jpg", name: "Tatto_1" },
          { id: 2, url: "../assets/images/Tatto/Tatto_2.jpg", name: "Tatto_2" },
          { id: 3, url: "../assets/images/Tatto/Tatto_3.jpg", name: "Tatto_3" },
          { id: 4, url: "../assets/images/Tatto/Tatto_4.jpg", name: "Tatto_4" },
          { id: 5, url: "../assets/images/Tatto/Tatto_5.jpg", name: "Tatto_5" },
          { id: 6, url: "../assets/images/Tatto/Tatto_6.jpg", name: "Tatto_6" },
          { id: 7, url: "../assets/images/Tatto/Tatto_7.jpg", name: "Tatto_7" },
          { id: 8, url: "../assets/images/Tatto/Tatto_8.jpg", name: "Tatto_8" },
          { id: 9, url: "../assets/images/Tatto/Tatto_9.jpg", name: "Tatto_9" },
          { id: 10, url: "../assets/images/Tatto/Tatto_10.jpg", name: "Tatto_10" },
          { id: 11, url: "../assets/images/Tatto/Tatto_11.jpg", name: "Tatto_11" },
          { id: 12, url: "../assets/images/Tatto/Tatto_12.jpg", name: "Tatto_12" },

        ]
      }
    },
    {
      id: 10,
      name: "piercing",
      data: {
        title: "Piercing",
        description: "Piercing images",
        detail: "",
        galleryBlocks: [
          { id: 1, url: "../assets/images/Piercing/Piercing_1.jpg", name: "Piercing_1" },
          { id: 2, url: "../assets/images/Piercing/Piercing_2.jpg", name: "Piercing_2" },
          { id: 3, url: "../assets/images/Piercing/Piercing_3.jpg", name: "Piercing_3" },
          { id: 4, url: "../assets/images/Piercing/Piercing_4.jpg", name: "Piercing_4" },
          { id: 5, url: "../assets/images/Piercing/Piercing_5.jpg", name: "Piercing_5" },
          { id: 6, url: "../assets/images/Piercing/Piercing_6.jpg", name: "Piercing_6" },
          { id: 7, url: "../assets/images/Piercing/Piercing_7.jpg", name: "Piercing_7" },
          { id: 8, url: "../assets/images/Piercing/Piercing_8.jpg", name: "Piercing_8" },
        ]
      }
    },
    {
      id: 4,
      name: "header",
      data: {
        title: "WHERE ART COMES ALIVE!!!",
        description: "BECOME. ATTRACT. CREATE. PERFECT.",
        url: "Namari is a free landing page template you can use for your projects. It is free to use for your\npersonal and commercial projects enjoy!",
        buttontext: "START CREATING TODAY",
        pricingBlocks: [
          {
            id: 1,
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            title: "TATTOO",
            subTitle: "Trust your vibes, energy never lies.",
            image: "../assets/images/banner-images/TATTOO.jpg",
            imageName: "TATTOO",
            buttonText: "Show Tattoos"
          },
          {
            id: 2,
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            title: "PIERCING",
            subTitle: "Just a touch of sparkle.",
            image: "../assets/images/banner-images/PIERCING.jpg",
            imageName: "PIERCING",
            buttonText: "Show Piercing"

          },  
        ]
      }
    },
    {
      id: 5,
      name: "contactUs",
      data: {
        title: "Whether you’re curious about features, a free trial, or even press—we’re ready to answer any and all questions.",
        description: "We’d love to hear from you",
        detail: ""
      }
    },
    {
      id: 7,
      name: "testimonials",
      data: {
        title: 'FEEDBACK',
        description: 'What our customers are saying',
        detail: '',
        feedbackBlock: [
          { name: 'abc abc', userimage: '../assets/images/user-images/user-1.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: '777' },
          { name: 'Roslyn Doe', userimage: '../assets/images/user-images/user-2.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'XYZ' },
          { name: 'Thomas Doe', userimage: '../assets/images/user-images/user-3.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'PQR' },
        ]
      }
    },
    {
      id: 8,
      name: "footer",
      data: {
        title: "Made with love by",
        url: "https://www.instagram.com/erbittuu",
        developer: "Utsav"
      }
    },
    {
      id: 9,
      name: "social",
      data: {
        title: "socialicons",
        socialBlock: [
          // {
          //   id: 1,
          //   title: "Facebook",
          //   target: "_blank",
          //   username: "",
          //   url: "https://www.facebook.com/",
          //   icon: "facebook",
          // },
          {
            id: 2,
            title: "Email",
            target: "_blank",
            username: "",
            url: "mailto:1tattooz@gmail.com",
            icon: "envelope",
          },
          {
            id: 3,
            title: "Instagram",
            target: "_blank",
            username: "admister",
            url: "http://www.instagram.com/",
            icon: "instagram",
          },
          {
            id: 4,
            title: "Whatsapp",
            target: "_blank",
            username: "+447466551559",
            url: "https://wa.me/",
            icon: "whatsapp",
          },
        ]
      }
    }
  ];

  constructor() { }

  getAllPages(): ConfigItem[] {
    return this.configuration;
  }

  getPageByName(pageName: string): ConfigItem | undefined {
    return this.configuration.find((configItem) => configItem.name === pageName);
  }
}
