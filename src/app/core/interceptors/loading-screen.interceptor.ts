import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loadingScreenInterceptor: HttpInterceptorFn = (req, next) => {


  // injection of loading screen service here

  const _NgxSpinnerService = inject(NgxSpinnerService) ;


  _NgxSpinnerService.show() ;


  return next(req).pipe(finalize( ()=>{

    // loading screen hide logic here
    _NgxSpinnerService.hide() ;


  }))
};
