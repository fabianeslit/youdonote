import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotemodalPage } from './notemodal.page';

describe('NotemodalPage', () => {
  let component: NotemodalPage;
  let fixture: ComponentFixture<NotemodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotemodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotemodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
