import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Pipe({
  name: 'titleize'
})

@Injectable()

export class TitleizePipe implements PipeTransform {
  static skipWords = ['of', 'the', 'in'];

  transform(title: string, args?: string[] | boolean) {

    if (typeof title !== 'string') {
      return title;
    }

    const skipWords = Array.isArray(args) ? args : TitleizePipe.skipWords;
    const processSkipwords = args !== false;

    return title.replace(/\w[^-\s]*/g, (word, index: number) => {

      if ( processSkipwords && index && skipWords.includes(word.toLowerCase()) ) {
        return word.toLowerCase();
       }

      return word[0].toUpperCase() + word.substr(1).toLowerCase();
    });
  }
}
