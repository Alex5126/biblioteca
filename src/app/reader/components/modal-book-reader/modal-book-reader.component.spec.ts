import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBookReaderComponent } from './modal-book-reader.component';

describe('ModalBookReaderComponent', () => {
  let component: ModalBookReaderComponent;
  let fixture: ComponentFixture<ModalBookReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBookReaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBookReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
