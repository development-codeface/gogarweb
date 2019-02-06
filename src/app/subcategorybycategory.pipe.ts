import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subcategorybycategory'
})
export class SubcategorybycategoryPipe implements PipeTransform {
  transform(product: any, category: string): any[] {
    if (product) {
        return product.filter((listing: any) => listing.subcategory === category);
    }
}

}
