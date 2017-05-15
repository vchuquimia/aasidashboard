import { WebStorageStateStore, UserManagerSettings } from 'oidc-client';

// Enums Environments
// Para configurar: [Aplicação, Web Service, Relatórios]
enum Environments{
    LocalDev = 1,   // Usando localhost [maquina local]
    Dev = 2,        // Usando servidor de desenvolvimento remoto
    Homolog = 3,    // Usando servidor de Homologação
    Live = 4        // Usando servidor de Produção
}

// Defina o ambiente para cada cenário.
const AppEvironment: Environments = Environments.Dev;
const ApiEvironment: Environments = Environments.LocalDev;
const ReportEvironment: Environments = Environments.Dev;

export var Signalr_URL: string = 'http://localhost:51706/signalr';
export var Signalr_HubName: string = 'EntityNotificationsHub';

export class API_SETTINGS {
    public static ACCESS_TOKEN_KEY: string = "access_token";

    public static getUrl(): string {
        let url = "";
        switch(ApiEvironment){
            case Environments.LocalDev:{
                url = "http://localhost:30001";
                break;
            }
            case Environments.Dev:{
                url = "https://ws-aasi-net-dev.sdasystems.org/";
                break;
            }
            case Environments.Homolog:{
                url = "https://ws-aasi-net.sdasystems.org/";
                break;
            }
            case Environments.Live:{
                url = "https://ws-aasi-net.sdasystems.org/";
                break;
            }          
        }        
        return url;
    }

    public static getUrlReport(): string {
        let url = "https://rs-aasi-net-dev.sdasystems.org/reports/";
        return url;
    }

    public static getUserSettings(): UserManagerSettings {

       // Ambiente desenvolvimento (localhost)
       
       let authority: string = "https://sad-us-auth-dev-ws.sdasystems.org";
       let host: string = "http://localhost:4200";
       let client_id: string = "1484398b-2120-4c1f-880f-370b1ce30402";
       let scope: string = "openid profile email apidev";        
       

       let ums: UserManagerSettings = {
           authority: authority,
           redirect_uri: host + '/callback',
           client_id: client_id,
           scope: scope,
           response_type: 'id_token token',
           post_logout_redirect_uri: host + '/signedOut',
           userStore: new WebStorageStateStore({ store: localStorage })
       };

       return ums;
   }

}