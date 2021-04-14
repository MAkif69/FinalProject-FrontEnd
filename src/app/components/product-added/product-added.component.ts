import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"

@Component({
  selector: 'app-product-added',
  templateUrl: './product-added.component.html',
  styleUrls: ['./product-added.component.css']
})
export class ProductAddedComponent implements OnInit {

  productAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(){
      this.productAddForm=this.formBuilder.group({
        productName:["",Validators.required],
        unitPrice:["",Validators.required],
        unitsInStock:["",Validators.required],
        categoryId:["",Validators.required]
      })
  }

}
