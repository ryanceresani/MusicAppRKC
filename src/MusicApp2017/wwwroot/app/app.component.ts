import { Component, Pipe, PipeTransform, Injectable } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
    styles: [`
  h1 {
     color: blue; 
  }`]
})

export class AppComponent  { 
    name = 'Angular 4'; 
    data: any[];
}

@Pipe({
    name: 'searchPipe',
    pure: false
})
@Injectable()
export class SearchPipe implements PipeTransform {
    transform(items: any[], args: any): any[] {
        var isSearch = (data: any): boolean => {
            var isAll = false;
            if (typeof data === 'object') {
                for (var z in data) {
                    if (isAll = isSearch(data[z])) {
                        break;
                    }
                }
            } else {
                if (typeof args === 'number') {
                    isAll = data === args;
                } else {
                    isAll = data.toString().match(new RegExp(args, 'i'));
                }
            }
            return isAll;
        };
        return items.filter(isSearch);
    }
}
