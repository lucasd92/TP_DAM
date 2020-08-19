import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogEvPage } from './log-ev.page';

describe('LogEvPage', () => {
  let component: LogEvPage;
  let fixture: ComponentFixture<LogEvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogEvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogEvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
