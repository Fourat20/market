import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import{map} from 'rxjs/operators'
import { AuthService } from '../auth.service/auth.service';
@Injectable({
  providedIn: 'root'
})
export class ManagementService {
  urlGlobal="https://shop.lunura.com"
  listOffre
  listProvider
  Offre
  idOffre
  notification
  category
  gameViewer
  game
  constructor(private httpClient: HttpClient,
              private nativeHttp: HTTP,
              private auth: AuthService
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
                        console.log("liste offer from service:  "+JSON.stringify(this.listOffre));
                        
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


                //Notification

                get_notification(){
                  this.nativeHttp.get(this.urlGlobal+"/api/notification",{},{}).then(
                    result => {
                      var u_data = JSON.parse(result.data);
                      this.notification=u_data
                        alert("offer:  "+JSON.stringify(this.notification));
                        },
                       err => {
                        alert('err '+JSON.stringify(err));
                      })
                }
 //category

 get_category(){
  this.nativeHttp.get(this.urlGlobal+"/api/category",{},{}).then(
    result => {
      var u_data = JSON.parse(result.data);
      this.category=u_data
        alert("category:  "+JSON.stringify(this.category));
        },
       err => {
        alert('err '+JSON.stringify(err));
      })
}

 //game

 get_game(){
  this.nativeHttp.get(this.urlGlobal+"/api/game",{},{}).then(
    result => {
      var u_data = JSON.parse(result.data);
      this.game=u_data
        console.log("game:  "+JSON.stringify(this.game));
        },
       err => {
        alert('err '+JSON.stringify(err));
      })
}

post_game_view(){
  console.log("this.game[2]._id:  "+JSON.stringify(this.game[2]._id));
  console.log("this.auth.UserData._id:  "+JSON.stringify(this.auth.UserData._id));

  this.nativeHttp.post(this.urlGlobal+"/api/game_views",{
    game_id:this.game[2]._id,
    user_id:this.auth.UserData._id,
    watch_video:1
  },{}).then(
    result => {
      var u_data = JSON.parse(result.data);
      this.gameViewer=u_data
        console.log("game viewer:  "+JSON.stringify(this.gameViewer));
        },
       err => {
        alert('err '+JSON.stringify(err));
      })
  
}
}
