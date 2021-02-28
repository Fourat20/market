import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiltrePage } from './filtre.page';

describe('FiltrePage', () => {
  let component: FiltrePage;
  let fixture: ComponentFixture<FiltrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiltrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
