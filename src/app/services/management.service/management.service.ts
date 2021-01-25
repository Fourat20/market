import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
@Injectable({
  providedIn: 'root'
})
export class ManagementService {
  urlGlobal="http://vps-b56f4fee.vps.ovh.net"
  listOffre
  constructor(private httpClient: HttpClient,
              private nativeHttp: HTTP,) { }

                get_list_produit(){
                  this.nativeHttp.get(this.urlGlobal+"/api/provider",{},{}).then(
                      result => {
                        var u_data = JSON.parse(result.data);
                        this.listOffre=u_data
                        alert(this.listOffre);
                          },
                         err => {
                          alert('err '+JSON.stringify(err));
                        })
                }
}
