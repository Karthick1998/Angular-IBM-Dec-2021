import { Pipe, PipeTransform } from "@angular/core";

interface Comparer{
    (v1 : any, v2 : any) : number
}

@Pipe({
    name : 'sort',
    pure : true
})
export class SortPipe implements PipeTransform{
    /* transform(values: any[], attrName : string, desc : boolean = false) : any[] {
        console.log('sortPipe.transform triggered')
        if (!values || !values.length || !attrName) return values;
        const descOrder = desc ? -1 : 1; //
        values.sort((v1, v2) => {
            if (v1[attrName] === v2[attrName]) return 0
            return (v1[attrName] > v2[attrName] ? 1 : -1) * descOrder;
        })
        return values;
    } */

    private getDescendingComparer(comparer : Comparer) : Comparer {
        return (v1 : any, v2 : any) => comparer(v1, v2) * -1;
    };

    private getComparer(attrName : string, desc : boolean) : Comparer {
        const comparer : Comparer = (v1 : any, v2 : any) => {
            if (v1[attrName] === v2[attrName]) return 0
            return (v1[attrName] > v2[attrName] ? 1 : -1) ;
        }
        if (desc){
            return this.getDescendingComparer(comparer)
        }
        return comparer;
    }

    transform(bugs: any[], attrName : string, desc : boolean = false) : any[] {
        console.log('sortPipe.transform triggered')
        if (!bugs || !bugs.length || !attrName) return bugs;
        const comparer = this.getComparer(attrName, desc);
        return bugs.sort(comparer);
    }

}