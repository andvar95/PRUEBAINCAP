import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {
  /*Pipe line works filtering data by name 
  */
  
  transform(value: any, arg: any): any {
    if(arg == '' && arg.length<1) return value  /* If I have not  written over 2 characters doesn't begin the search */
    const resultCourses = []; //This const will storage the data
    for(const  post of value){ /* Loop in input value*/
      if(post.title.toLowerCase().indexOf(arg.toLowerCase())>-1){  
        // I convert the input in lower case and match with indexOf, if the result is over 1, some characteres have matched
        resultCourses.push(post);  /* I add the results in  a list*/
      }
    }
    return resultCourses; 
  }

}
