import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stagesearch'
})
export class StagesearchPipe implements PipeTransform {
  transform(product: any, category: string): any[] {
    if (product) {
        return product.filter((listing: any) => listing.stage === category);
    }
}

}
