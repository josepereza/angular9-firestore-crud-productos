import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import { Product } from 'src/app/models/product';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product={} as Product;
  enviar:boolean=true;
  constructor(private ps:ProductService) { }

  ngOnInit(): void {
  
  }
addProduct(){
  this.ps.addProduct(this.product);
  this.product={};
}
actualizar(){
  this.ps.updateProduct(this.product);
  this.product={};
  this.enviar=true;
}
}