import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemDeteilPage } from './item-deteil.page';

describe('ItemDeteilPage', () => {
  let component: ItemDeteilPage;
  let fixture: ComponentFixture<ItemDeteilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDeteilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
