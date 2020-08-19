import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogSensorPage } from './log-sensor.page';

describe('LogSensorPage', () => {
  let component: LogSensorPage;
  let fixture: ComponentFixture<LogSensorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogSensorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogSensorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
