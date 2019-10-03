import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/common/service/product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/common/data/product';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.scss']
})
export class ProdListComponent implements OnInit {

  categorie = "divers";
  tabProduits : Product[];

  constructor(private productService : ProductService,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    // path: 'prodList/:category'
    this._route.params.subscribe(
      (params: Params) => { this.categorie = params['category'];
                            this.fetchProducts(); }
    );
  }

  fetchProducts(){
    this.productService.getProductsByCategoryObservable(this.categorie)
    .subscribe(
      (tabProd) => { this.tabProduits = tabProd;}
    );
  }

}
