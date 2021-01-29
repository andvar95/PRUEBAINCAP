import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typ'
})
export class TypPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg == '' || arg=='0') return value 
    const resultCourses = []; //This const will storage the data
    for(const  post of value){ /* Loop in input value*/
      if(post.type == arg){  
        // I convert the input in lower case and match with indexOf, if the result is over 1, some characteres have matched
        resultCourses.push(post);  /* I add the results in  a list*/
      }
    }
    
    return resultCourses; 
  }
  
  }


