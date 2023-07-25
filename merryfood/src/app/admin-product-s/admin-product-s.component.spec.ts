import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductSComponent } from './admin-product-s.component';

describe('AdminProductSComponent', () => {
  let component: AdminProductSComponent;
  let fixture: ComponentFixture<AdminProductSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProductSComponent]
    });
    fixture = TestBed.createComponent(AdminProductSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
