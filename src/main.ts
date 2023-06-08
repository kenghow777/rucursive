import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: ``,
})
export class App implements OnInit {
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

    this.form = this.createFormgroup(categoryData)
  }
}

bootstrapApplication(App);
