import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditUserReaderComponent } from './modal-edit-user-reader.component';

describe('ModalEditUserReaderComponent', () => {
  let component: ModalEditUserReaderComponent;
  let fixture: ComponentFixture<ModalEditUserReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditUserReaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditUserReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
