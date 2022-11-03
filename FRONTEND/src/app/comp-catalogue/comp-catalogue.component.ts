import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CatalogueService } from '../catalogue.service';
import { Catalogue } from '../core/Catalogue';

@Component({
  selector: 'app-comp-catalogue',
  templateUrl: './comp-catalogue.component.html',
  styleUrls: ['./comp-catalogue.component.css']
})
export class CompCatalogueComponent implements OnInit {

  search = new FormControl('');

  constructor(private catalogueService: CatalogueService) { }

  @Input() filtre: string = '';
  tabProduits: Array<Catalogue> = [];
  sub: Subscription = new Subscription;

  ngOnInit(): void {
    this.getCatalogue();
  }

  getCatalogue() {
    this.catalogueService.getCatalogue().subscribe({
      next: (data) => {
        this.tabProduits = data;
      }
    });
    console.log(this.tabProduits.length);
  }

  updateCatalogue(event: Catalogue[]) {
    this.tabProduits = event;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onChange(event: any) {
    switch(event.target.value) {
      case 'color':
        this.tabProduits.sort((a, b) => a.color.localeCompare(b.color));
        break;
      case 'type':
        this.tabProduits.sort((a, b) => a.type.localeCompare(b.type));
        break;
      default:
        break;
    }
  } 

}
