import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiercingGalleryComponent } from './piercingGallery.component';

describe('PiercingGalleryComponent', () => {
  let component: PiercingGalleryComponent;
  let fixture: ComponentFixture<PiercingGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiercingGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PiercingGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
