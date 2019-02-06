import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productbycategory'
})
export class ProductbycategoryPipe implements PipeTransform {

  transform(product: any, category: string): any[] {
    if (product) {
        return product.filter((listing: any) => listing.category === category);
    }
}

}
