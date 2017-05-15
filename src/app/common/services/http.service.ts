import { LocalStorage } from '../../core/helpers/local-storage';
import { APP_CONSTANTS } from '../../app.constants';
import {
  AuthHttp
} from './AuthHttp';
import {
  Injectable
} from '@angular/core';
import {
  Http,
  XHRBackend,
  RequestOptions,
  Request,
  RequestOptionsArgs,
  Response,
  Headers
} from '@angular/http';
import {
  Observable
} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {
  API_SETTINGS
} from '../../app.settings';


@Injectable()
export class HttpService //extends Http
{

  public apiEndPoint: string = '';
  //   constructor(backend: XHRBackend, options: RequestOptions) {
  constructor(public authHttp: AuthHttp, backend: XHRBackend, options: RequestOptions) {
    //super(backend, options);
  }

  get(url: string, options ? : RequestOptionsArgs): Observable < Response > {
    this.serviceStarts();

    // const params = new URLSearchParams();
    // let entityId = LocalStorage.Get(APP_CONSTANTS.SESSION_KEY_LEGAL_ENTITY_ID);
    // if (entityId !== null){
    //   params.set('legalEntityId', entityId);
    // }

    // if (options !== undefined) {
    //   if (options.search !== undefined) {
    //     ( < URLSearchParams > options.search).set('legalEntityId', LocalStorage.Get(APP_CONSTANTS.SESSION_KEY_LEGAL_ENTITY_ID));

    //   } else {
    //     options.search = params;
    //   }
    // } else {
    //   options = {
    //     search: params
    //   };
    // }
    return this.authHttp.get(API_SETTINGS.getUrl() + url, this.getOptions(options))
      //return super.get(this.apiEndPoint + url, options)
      .map(r => {
        this.serviceCompleted();
        return r;
      }).catch(this.catchAuthError(this));
  }

  getOptions(incomingOptions: RequestOptionsArgs): RequestOptionsArgs{
    const params = new URLSearchParams();
    let entityId = LocalStorage.Get(APP_CONSTANTS.SESSION_KEY_LEGAL_ENTITY_ID);
    if (entityId !== null){
      params.set('legalEntityId', entityId); 
    }

    if (incomingOptions !== undefined) {
      if (incomingOptions.search !== undefined) {
        ( < URLSearchParams > incomingOptions.search).set('legalEntityId', LocalStorage.Get(APP_CONSTANTS.SESSION_KEY_LEGAL_ENTITY_ID));

      } else {
        incomingOptions.search = params;
      }
    } else {
      incomingOptions = {
        search: params
      };
    }

    return incomingOptions;
  }

  post(url: string, body: any, options ? : RequestOptionsArgs): Observable < Response > {
    this.serviceStarts();
    return this.authHttp.post(API_SETTINGS.getUrl() + url, body, this.getOptions(options))
      //return super.post(url, body, options)
      .map(r => {
        this.serviceCompleted();
        return r;
      }).catch(this.catchAuthError(this));
  }

  put(url: string, body: any, options ? : RequestOptionsArgs): Observable < Response > {
    this.serviceStarts();
    return this.authHttp.put(API_SETTINGS.getUrl() + url, body, this.getOptions(options))
      //return super.put(url, body, options)
      .map(r => {
        this.serviceCompleted();
        return r;
      }).catch(this.catchAuthError(this));
  }

  delete(url: string, options ? : RequestOptionsArgs): Observable < Response > {
    this.serviceStarts();
    return this.authHttp.delete(API_SETTINGS.getUrl() + url, this.getOptions(options))
      .map(r => {
        this.serviceCompleted();
        return r;
      }).catch(this.catchAuthError(this));
  }

  request(url: string | Request, options ? : RequestOptionsArgs): Observable < Response > {
    this.serviceStarts();
    return this.authHttp.request(API_SETTINGS.getUrl() + url, options).map(r => {
      this.serviceCompleted();
      return r;
    }).catch(this.catchAuthError(this));
  }

  private serviceStarts() {
    console.log('->');
  }
  private serviceCompleted() {
    console.log('<-');
  }

  private catchAuthError(self: HttpService) {

    return (res: Response) => {
      console.log('Error !!', res);
      if (res.status === 401 || res.status === 403) {
        // if not authenticated
        console.log(res);
      }
      return Observable.throw(res);
    };
  }
}
