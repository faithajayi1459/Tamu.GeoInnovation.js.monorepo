import { Pipe, PipeTransform } from '@angular/core';
import { getObjectPropertyValue } from './group-by.pipe';

@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {
  /**
   * Orders a collection by a key and direction.
   *
   * @param collection Item collection to sort.
   * @param path Dot-notation location in each object in which comparison value is found.
   * @param direction Defaults to `asc`.
   */
  public transform(collection: Array<any>, path: string, direction?: 'asc' | 'desc'): Array<any> {
    // Return early if no collection
    if (collection && collection.length > 0) {
      const sorted = collection.sort((first, second) => {
        const firstValue = getObjectPropertyValue(first, path);
        const secondValue = getObjectPropertyValue(second, path);

        if (firstValue === undefined || secondValue === undefined) {
          return 0;
        }

        if (direction === 'asc' || direction === undefined) {
          return firstValue - secondValue;
        } else if (direction === 'desc') {
          return secondValue - firstValue;
        } else {
          throw new Error(`Invalid or no ordering direction specified`);
        }
      });

      return sorted;
    } else {
      return collection;
    }
  }
}
