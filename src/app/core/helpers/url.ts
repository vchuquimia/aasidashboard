export class Url{
    public appIndex:string = '';
    public GetCurrentBaseUrl() {
        let baseUrl = this.GetCurrentSiteUrl() +this.appIndex;
        return baseUrl;
    }

    public GetCurrentSiteUrl() {
        var challenge = '';
        //var appFolder = TrimUrl('/'+appIndex);
        var stringPathName = window.location.pathname;
        var index = stringPathName.toLowerCase().indexOf(challenge);
        var siteUrl = stringPathName.substring(0, index);
        return siteUrl;
    }
}