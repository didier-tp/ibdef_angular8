import { Component, OnInit } from '@angular/core';
import { ProductService } from '../common/service/product.service';

@Component({
  selector: 'app-browse-products',
  templateUrl: './browse-products.component.html',
  styleUrls: ['./browse-products.component.scss']
})
export class BrowseProductsComponent implements OnInit {

  constructor(private productService : ProductService) { }
  categorie = "divers"; //selectionnée ("divers" par défaut)
  listeCategories : string[] = [ "divers" , "CD" , "DVD" , "livres"];

  onSelectCategory(cat :string){
    this.categorie = cat;
    console.log("categorie selectionnee:"+this.categorie);
  }

  ngOnInit() {
  }

}
