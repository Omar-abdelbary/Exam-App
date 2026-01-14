import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';

export const loadingScreenInterceptor: HttpInterceptorFn = (req, next) => {


  // injection of loading screen service here



  return next(req).pipe(finalize( ()=>{

    // loading screen hide logic here

  }))
};
