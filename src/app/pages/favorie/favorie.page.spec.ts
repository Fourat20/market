import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavoriePage } from './favorie.page';

describe('FavoriePage', () => {
  let component: FavoriePage;
  let fixture: ComponentFixture<FavoriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
