import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
      name: 'getWidth',
      pure: true
    })

export class GetWidthPipe implements PipeTransform {
      transform(col: any, args?: any): any {
            switch(col) {
                  case "id":
                        return "3%";
                  case "name":
                        return "20%";
                  case "desc":
                        return "38%";
                  case "category":
                        return "20%";
                  case "author":
                        return "9%";
                  case "count": 
                        return "5%"
                  case "edit":
                        return "5%"
                  default:
                        return 'auto';
                }
          }
}