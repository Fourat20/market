import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import{map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ManagementService {
  urlGlobal="https://shop.lunura.com"
  listOffre
  listProvider
  Offre
  idOffre
  constructor(private httpClient: HttpClient,
              private nativeHttp: HTTP,
              ) { }

                get_list_provider(){
                  this.nativeHttp.get(this.urlGlobal+"/api/provider",{},{}).then(
                      result => {
                        var u_data = JSON.parse(result.data);
                        this.listProvider=u_data
                      //  alert("provider: "+JSON.stringify(this.listProvider));
                          },
                         err => {
                          alert('err '+JSON.stringify(err));
                        })
                }


                
                get_list_produit(){
                  this.nativeHttp.get(this.urlGlobal+"/api/offer",{},{}).then(
                      result => {
                        var u_data = JSON.parse(result.data);
                        this.listOffre=u_data
                        //  alert("liste offer:  "+JSON.stringify(this.listOffre));
                          },
                         err => {
                          alert('err '+JSON.stringify(err));
                        })
                }

                get_produit(){
                  // alert("id offre service  "+this.idOffre);

                  this.nativeHttp.get(this.urlGlobal+"/api/offer/"+this.idOffre,{},{}).then(
                    result => {
                      var u_data = JSON.parse(result.data);
                      this.Offre=u_data
                      //  alert("offer:  "+JSON.stringify(this.Offre));
                        },
                       err => {
                        alert('err '+JSON.stringify(err));
                      })
                }

                findArticle(search){
                  return this.httpClient.get(`$this.urlGlobal+"/api/offer/"${search}`)

                  .pipe(
                    map(poke=>{
                      // pokemon['image'] = this.getPokeImage(pokemon['id']);
                      // pokemon['pokeIndex'] = pokemon ['id'];
                      return poke;
                    })
                  )
              
                }
}
