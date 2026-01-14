import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {




  req = req.clone({
    setHeaders :{
      "Authorization": "Bearer your-token-here"
    }
  })



  return next(req);
};
