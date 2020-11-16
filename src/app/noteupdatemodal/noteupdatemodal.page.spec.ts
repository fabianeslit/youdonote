import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoteupdatemodalPage } from './noteupdatemodal.page';

describe('NoteupdatemodalPage', () => {
  let component: NoteupdatemodalPage;
  let fixture: ComponentFixture<NoteupdatemodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteupdatemodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoteupdatemodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
