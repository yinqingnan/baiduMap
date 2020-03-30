/**/_jsload2&&_jsload2('pservice', 'var zi=5;ec.du=D.Yh("pano")[0];ec.Qk=ec.du+"?";ec.oF=D.Yh("baidumap");ec.EO=D.Yh("main_domain_nocdn");ec.Ud=new S;ec.pA=[]; z.extend(ec.prototype,{yP:function(){var a=this,b;for(b in this.vd)if(0!==this.vd[b].length)switch(b){case "getPanoramaById":z.Nb(this.vd[b],function(b){a.Go.apply(a,b)});break;case "getPanoramaByLocation":z.Nb(this.vd[b],function(b){a.dj.apply(a,b)});break;case "getVisiblePOIs":z.Nb(this.vd[b],function(b){a.lD.apply(a,b)});break;case "getRecommendPanosById":z.Nb(this.vd[b],function(b){a.Pw.apply(a,b)});break;case "getPanoramaVersions":z.Nb(this.vd[b],function(b){a.Ow.apply(a,b)});break;case "checkPanoSupportByCityCode":z.Nb(this.vd[b], function(b){a.tB.apply(a,b)});break;case "getPanoramaByPOIId":z.Nb(this.vd[b],function(b){a.Nw.apply(a,b)});break;case "getCopyrightProviders":z.Nb(this.vd[b],function(b){a.u2.apply(a,b)})}},Go:function(a,b,c){this.HG(ec.Qk+"qt=sdata&l=17&sid="+a+"&fn=",b,c)},dj:function(a,b,c){"function"==typeof b&&(c=b,b=50);a=ec.Ud.qg(a);this.HG(ec.Qk+"qt=qsdata&x="+a.x+"&y="+a.y+"&r="+b+"&action=1&fn=",c)},lD:function(a,b,c,e){a=ec.Ud.qg(a);this.Mg(ec.Qk+"qt=search&x="+a.x+"&y="+a.y+"&radius="+b+"&tag="+c+"&fn=", function(a){for(var a=a.content,b=[],c=s,k=a.length-1;0<=k;k--)c=a[k],b.push({iconType:c.Type,title:c.name,altitude:c.Height,panoInfo:{panoId:c.PID,panoIId:c.IID,heading:c.Dir,pitch:c.Pitch},position:ec.Ud.oj(new R(c.X,c.Y))});e(b)})},Pw:function(a,b){this.Mg(ec.Qk+"qt=guide&sid="+a+"&fn=",function(a){if(a.content){for(var a=a.content,e=[],f=s,g=0,i=a.length;g<i;g++)f=a[g],e.push({panoId:f.PID,heading:f.Dir,name:f.Info,recoType:f.Type,pitch:f.Pitch,catlog:f.Catalog,floor:f.Floor});b(e)}})},nK:function(a){this.Mg(ec.oF+ "?qt=panoCMS&file=pano_copyright&callback=",function(b){a(b)})},Ow:function(a){this.Mg(ec.oF+"?qt=pver&callback=",function(b){b?a&&a(b):a&&a(s)})},tB:function(a,b){function c(a){for(var b=ec.pA,c=0,i=b.length;c<i;c++)if(b[c]==a)return p;return t}0===ec.pA.length?this.Mg(ec.EO+"?qt=panoCityList&t="+(new Date).getTime()+"&callback=",function(e){e?(ec.pA=e,b(c(a))):b(t)}):b(c(a))},Nw:function(a,b){var c=this;this.Ow(function(e){e&&e.panoUdt&&c.Mg(ec.Qk+"qt=poi&udt="+e.panoUdt.version+"&uid="+a+"&fn=", function(a){if(a&&a.content&&a.content[0]&&a.content[0].poiinfo){var a=a.content[0].poiinfo,e={id:a.IID||a.PID,pid:a.PID,type:1==a.hasinter?"inter":"street",description:a.name,links:s,position:ec.Ud.oj(new R(a.X,a.Y)),tiles:s,pov:1==a.hasinter?s:{heading:a.Dir,pitch:a.Pitch}};"inter"===e.type?c.eR(a.IID,function(a){if(a){for(var c=a.Defaultfloor,f=s,n=0,o=a.Floors.length;n<o;n++)if(a.Floors[n].Floor===c){f=a.Floors[n];break}f&&(e.interID=f.StartID)}b(e)}):b(e)}else b(s)})})},HG:function(a,b,c){var e= this;this.Mg(a,function(a){a&&a.result&&0==a.result.error?b&&b(e.UR(a,c)):b&&b(s)})},Mg:function(a,b){var c=(1E5*Math.random()).toFixed(0);D._rd=D._rd||{};D._rd["_cbk"+c]=function(a){b&&b(a);delete D._rd["_cbk"+c]};pa(a+("BMap._rd._cbk"+c))},UR:function(a,b){var c={},e=a.content[0];c.description=e.Rname||e.Info||"";c.id=e.ID;c.gh=e.X/100;c.hh=e.Y/100;c.position=ec.Ud.oj(new R(c.gh,c.hh));var f=this.VR(e,c.id,c.gh,c.hh,e.NorthDir);c.links=f[0];c.roads=f[1];c.links.sort(function(a,b){return a.jh-b.jh}); c.mode=e.Mode;c.relevants=[];if(e.SwitchID)for(f=0;f<e.SwitchID.length;f++)c.relevants[f]={id:e.SwitchID[f].ID,mode:e.SwitchID[f].Time.toLowerCase()};c.tiles=new Ai({dirNorth:e.NorthDir,centerHeading:(180+e.NorthDir)%360,pitch:e.Pitch});if(e.Enters&&0<e.Enters.length){c.indoorPois=[];for(var f=0,g=e.Enters.length;f<g;f++)c.indoorPois.push({panoIId:e.Enters[f].IID,panoId:e.Enters[f].BreakID,title:e.Enters[f].Name,pointX:e.Enters[f].X/100,pointY:e.Enters[f].Y/100})}var g=[],i=e.VPoint;if(i)for(var k= i.length,f=0;f<k;f++){var m={};m.PID=i[f].PID;var n=ec.Ud.oj(new R(i[f].X/100,i[f].Y/100));m.X=6378137*-(n.lat-c.position.lat)/180*Math.PI;m.Z=6378137*(n.lng-c.position.lng)/180*Math.PI;g.push(m)}c.VPoint=g;e.Inters&&0<e.Inters.length&&(c.Ll=e.Inters[0].BreakID,c.nU=e.Inters[0].IID,c.heading=e.MoveDir,c.pitch=e.Pitch);b&&(c.Ll=b.Ll);c.copyright={};c.copyright.admission=e.Admission;c.copyright.dataProviderIndex=e.Provider;c.copyright.photoDate=e.Date;c.copyright.roadName=e.Rname;c.copyright.username= e.Username||"";return c},VR:function(a,b,c,e,f){var g=[],i={};if(a.Links)for(var k=0;k<a.Links.length;k++)g.push({id:a.Links[k].PID,dir:a.Links[k].DIR,x:a.Links[k].X/100,y:a.Links[k].Y/100,heading:a.Links[k].DIR,jh:this.xz(a.Links[k].DIR,f)});if(!a.Roads)return[g,i];for(k=0;k<a.Roads.length;k++)if(a.Roads[k].Panos)for(var m=0;m<a.Roads[k].Panos.length;m++){if(a.Roads[k].Panos[m].PID==b){var n=a.Roads[k].Name;""==n&&(n=a.Rname||"\\u672a\\u77e5");for(var o=s,q=s,v,w,y=m-1;0<=y;y--){a.Roads[k].Panos[y]&& o===s&&(o=a.Roads[k].Panos[y],v=(o.DIR+180)%360,i[v]=[]);var A=a.Roads[k].Panos[y];i[v]&&i[v].push({id:A.PID,x:A.X/100,y:A.Y/100,distanceToCurrent:this.qn(A.X/100,A.Y/100,c,e)})}o&&g.push({id:o.PID,dir:v,heading:v,description:n,x:o.X/100,y:o.Y/100,jh:this.xz(v,f)});for(y=m+1;y<a.Roads[k].Panos.length;y++)a.Roads[k].Panos[y]&&q===s&&(q=a.Roads[k].Panos[y],w=q.DIR,0==w&&(w=a.Roads[k].Panos[m].DIR),i[w]=[]),A=a.Roads[k].Panos[y],i[w]&&i[w].push({id:A.PID,x:A.X/100,y:A.Y/100,distanceToCurrent:this.qn(A.X/ 100,A.Y/100,c,e)});q!=s&&g.push({id:q.PID,dir:w,heading:w,description:n,x:q.X/100,y:q.Y/100,jh:this.xz(w,f)})}for(y=0;y<g.length;y++)a.Roads[k].Panos[m].PID==g[y].id&&(g[y].description=a.Roads[k].Name,""==g[y].description&&(g[y].description=a.Rname||"\\u672a\\u77e5"))}for(k=0;k<g.length;k++){var a=g[k].dir,b=t,B;for(B in i)if(B==a){b=p;break}if(b)break;i[a]=[{id:g[k].id,x:g[k].x,y:g[k].y,distanceToCurrent:this.qn(g[k].x,g[k].y,c,e)}]}return[g,i]},xz:function(a,b){var c=a+b;360<c&&(c%=360);return c= Math.round(100*c)/100},qn:function(a,b,c,e){return Math.round(Math.sqrt(Math.pow(a-c,2)+Math.pow(b-e,2)))},eR:function(a,b){this.Mg(ec.Qk+"qt=idata&l=17&iid="+a+"&fn=",function(a){a&&a.result&&0===a.result.error?b(a.content[0].interinfo):b(s)})}});Le=ec.prototype;U(Le,{getPanoramaById:Le.Go,getPanoramaByLocation:Le.dj,getPanoramaByPOIId:Le.Nw});function Ai(a){this.tileSize=new P(512,512);this.worldSize=new P(512*this.Jo(zi),512*this.Qw(zi));this.centerHeading=180;var a=a||{},b;for(b in a)this[b]=a[b]}var Bi=D.Yh("pano","scape/");z.extend(Ai.prototype,{getTilesUrl:function(a,b,c){return Bi[(b.x+b.y)%Bi.length]+"?qt=pdata&sid={sid}&pos={y}_{x}&z={zoom}".replace("{sid}",a).replace("{x}",b.x).replace("{y}",b.y).replace("{zoom}",c)},Qw:function(a){return Math.pow(2,a-2)},Jo:function(a){return 2*this.Qw(a)}}); ');
