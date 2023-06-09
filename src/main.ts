import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormArray, FormControl, Form } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <form [formGroup]="form" (ngSubmit)="onSubmit()">
  <ng-container *ngFor="let control of form.controls['subCategories'].controls">
    <ng-container [formGroup]="control">
      <input type="text" formControlName="name">
      <div formArrayName="subCategories">
        <ng-container *ngFor="let subControl of control.controls['subCategories'].controls">
          <ng-container [formGroup]="subControl">
            <input type="text" formControlName="name">
          </ng-container>
        </ng-container>
      </div>
    </ng-container>
  </ng-container>
  <button type="submit">Submit</button>
</form>
  `,
})
export class App implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    let categoryData = {
      name: 'Main',
      subCategories: [
        { name: 'Sub1', subCategories: [] },
        {
          name: 'Sub2',
          subCategories: [{ name: 'SubSub1', subCategories: [] }],
        },
      ],
    };

    this.form = this.createFormGroup(categoryData);
  }

  createFormGroup(categoryData: any): FormGroup {
    let formGroup = new FormGroup({
      name: new FormControl(categoryData.name),
      subCategories: new FormArray([]),
    });

    for (let subCategory of categoryData.subCategories) {
      (formGroup.get('subCategories') as FormArray).push(
        this.createFormGroup(subCategory)
      );
    }

    return formGroup;
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}

bootstrapApplication(App);
