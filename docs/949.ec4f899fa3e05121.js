"use strict";(self.webpackChunkttech_assessment=self.webpackChunkttech_assessment||[]).push([[949],{9949:(V,f,s)=>{s.r(f),s.d(f,{MoviesModule:()=>D});var h=s(9808),y=s(4100),l=s(3075),u=s(4004),C=s(1520),d=s(9300),F=s(9468),I=s(8372),o=s(5e3),a=s(520);const U=new class R{encodeKey(n){return encodeURIComponent(n)}encodeValue(n){return encodeURIComponent(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};var g=s(764);let T=(()=>{class i{constructor(){this.rootUrl="https://api.nytimes.com/svc/movies/v2"}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=o.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),w=(()=>{class i extends class P{constructor(n,e){this.config=n,this.http=e,this._rootUrl=""}get rootUrl(){return this._rootUrl||this.config.rootUrl}set rootUrl(n){this._rootUrl=n}newParams(){return new a.LE({encoder:U})}}{constructor(e,t){super(e,t)}getCriticsReviewerJsonResponse(e){let t=this.newParams(),r=new a.WM,v=new a.aW("GET",this.rootUrl+`/critics/${encodeURIComponent(String(e))}.json?api-key=${g.q}`,null,{headers:r,params:t,responseType:"json"});return this.http.request(v).pipe((0,d.h)(c=>c instanceof a.Zn),(0,u.U)(c=>c))}getCriticsReviewerJson(e){return this.getCriticsReviewerJsonResponse(e).pipe((0,u.U)(t=>t.body))}getReviewsTypeJsonResponse(e){let t=this.newParams(),r=new a.WM;null!=e.order&&(t=t.set("order",e.order.toString())),null!=e.offset&&(t=t.set("offset",e.offset.toString()));let v=new a.aW("GET",this.rootUrl+`/reviews/${encodeURIComponent(String(e.type))}.json?api-key=${g.q}`,null,{headers:r,params:t,responseType:"json"});return this.http.request(v).pipe((0,d.h)(c=>c instanceof a.Zn),(0,u.U)(c=>c))}getReviewsTypeJson(e){return this.getReviewsTypeJsonResponse(e).pipe((0,u.U)(t=>t.body))}getReviewsSearchJsonResponse(e){let t=this.newParams(),r=new a.WM;null!=e.reviewer&&(t=t.set("reviewer",e.reviewer.toString())),null!=e.query&&(t=t.set("query",e.query.toString())),null!=e.publicationDate&&(t=t.set("publication-date",e.publicationDate.toString())),null!=e.order&&(t=t.set("order",e.order.toString())),null!=e.openingDate&&(t=t.set("opening-date",e.openingDate.toString())),null!=e.offset&&(t=t.set("offset",e.offset.toString())),null!=e.criticsPick&&(t=t.set("critics-pick",e.criticsPick.toString()));let v=new a.aW("GET",this.rootUrl+`/reviews/search.json?api-key=${g.q}`,null,{headers:r,params:t,responseType:"json"});return this.http.request(v).pipe((0,d.h)(c=>c instanceof a.Zn),(0,u.U)(c=>c))}getReviewsSearchJson(e){return this.getReviewsSearchJsonResponse(e).pipe((0,u.U)(t=>t.body))}}return i.getCriticsReviewerJsonPath="/critics/{reviewer}.json",i.getReviewsTypeJsonPath="/reviews/{type}.json",i.getReviewsSearchJsonPath="/reviews/search.json",i.\u0275fac=function(e){return new(e||i)(o.LFG(T),o.LFG(a.eN))},i.\u0275prov=o.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),S=(()=>{class i{constructor(e){this.moviesService=e}getReviews(e){return this.moviesService.getReviewsSearchJson(e).pipe((0,u.U)(t=>t.results))}}return i.\u0275fac=function(e){return new(e||i)(o.LFG(w))},i.\u0275prov=o.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var J=s(4831),M=s(7322),Z=s(4107),b=s(508),m=s(8777),L=s(2068);const A=["scroller"];function G(i,n){if(1&i&&(o.TgZ(0,"mat-option",13),o._uU(1),o.qZA()),2&i){const e=n.$implicit;o.Q6J("value",e.value),o.xp6(1),o.hij(" ",e.viewValue," ")}}function O(i,n){if(1&i&&(o.ynx(0),o.TgZ(1,"div",14),o._UZ(2,"app-card-item",15),o.qZA(),o.BQk()),2&i){const e=n.$implicit;o.xp6(2),o.Q6J("data",e)}}function j(i,n){1&i&&(o.TgZ(0,"h1"),o._uU(1,"Loading"),o.qZA())}function B(i,n){1&i&&(o.TgZ(0,"h1"),o._uU(1,"No data"),o.qZA())}const Q=[{path:"",component:(()=>{class i{constructor(e,t){this.moviesLocalService=e,this.ngZone=t,this.pageTitle="Movies",this.paginatedListItems=[],this.itemsPerpage=5,this.currentIndex=0,this.searchBarForm=new l.cw({searchInputField:new l.NI("")}),this.loading=!0,this.sortByList=[{viewValue:"_",value:""},{viewValue:"Opening date",value:"by-opening-date"},{viewValue:"Publication date",value:"by-publication-date"}],this.sortSelectForm=new l.cw({selectSortField:new l.NI("")})}ngOnInit(){this.getData(),this.searchFormGroup(),this.selectSortFormGroup()}getData(e={reviewer:""}){this.moviesLocalService.getReviews(e).subscribe(t=>{var r;console.log({data:t}),this.listItems=null==t?void 0:t.map(p=>this.transformdata(p)),this.paginatedListItems=null===(r=this.listItems)||void 0===r?void 0:r.splice(0,this.itemsPerpage),this.loading=!1})}transformdata(e){var t,r;return{title:e.headline,abstract:e.summary_short,multimedia:(null===(t=e.multimedia)||void 0===t?void 0:t.src)?[{url:null===(r=e.multimedia)||void 0===r?void 0:r.src}]:null,byline:e.byline,opening_date:e.opening_date,publication_date:e.publication_date}}ngAfterViewInit(){this.scroller.elementScrolled().pipe((0,u.U)(()=>this.scroller.measureScrollOffset("bottom")),(0,C.G)(),(0,d.h)(([e,t])=>t<e&&t<140),(0,F.p)(200)).subscribe(()=>{this.ngZone.run(()=>{var e;this.paginatedListItems=[...this.paginatedListItems,...null===(e=this.listItems)||void 0===e?void 0:e.splice(0,this.itemsPerpage)]})})}searchFormGroup(){this.searchBarForm.controls.searchInputField.valueChanges.pipe((0,I.b)(800)).subscribe(e=>{var t;this.paginatedListItems=[],this.listItems=[],this.getData({reviewer:e,order:null===(t=this.sortSelectForm.get("selectSortField"))||void 0===t?void 0:t.value}),this.loading=!0})}selectSortFormGroup(){this.sortSelectForm.controls.selectSortField.valueChanges.subscribe(e=>{var t;this.paginatedListItems=[],this.listItems=[],this.getData({reviewer:null===(t=this.searchBarForm.get("searchInputField"))||void 0===t?void 0:t.value,order:e}),this.loading=!0})}}return i.\u0275fac=function(e){return new(e||i)(o.Y36(S),o.Y36(o.R0b))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-movies-page"]],viewQuery:function(e,t){if(1&e&&o.Gf(A,5),2&e){let r;o.iGM(r=o.CRH())&&(t.scroller=r.first)}},decls:17,vars:7,consts:[[3,"title"],[1,"search-box"],[3,"formGroup"],["formControlName","searchInputField","type","search","placeholder","Search"],[1,"container"],["appearance","fill",3,"formGroup"],["formControlName","selectSortField"],[3,"value",4,"ngFor","ngForOf"],["itemSize","100",1,"content"],["scroller",""],[4,"cdkVirtualFor","cdkVirtualForOf"],[1,"alerts"],[4,"ngIf"],[3,"value"],[1,"item"],[3,"data"]],template:function(e,t){1&e&&(o.TgZ(0,"app-page-header",0)(1,"div",1)(2,"form",2),o._UZ(3,"input",3),o.qZA()()(),o.TgZ(4,"div",4)(5,"mat-form-field",5)(6,"mat-label"),o._uU(7,"Sort by"),o.qZA(),o.TgZ(8,"mat-select",6),o.YNc(9,G,2,2,"mat-option",7),o.qZA()(),o.TgZ(10,"cdk-virtual-scroll-viewport",8,9)(12,"div"),o.YNc(13,O,3,1,"ng-container",10),o.qZA(),o.TgZ(14,"div",11),o.YNc(15,j,2,0,"h1",12),o.YNc(16,B,2,0,"h1",12),o.qZA()()()),2&e&&(o.Q6J("title",t.pageTitle),o.xp6(2),o.Q6J("formGroup",t.searchBarForm),o.xp6(3),o.Q6J("formGroup",t.sortSelectForm),o.xp6(4),o.Q6J("ngForOf",t.sortByList),o.xp6(4),o.Q6J("cdkVirtualForOf",t.paginatedListItems),o.xp6(2),o.Q6J("ngIf",t.loading),o.xp6(1),o.Q6J("ngIf",!(t.loading||null!=t.paginatedListItems&&t.paginatedListItems.length)))},directives:[J.q,l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,M.KE,M.hX,Z.gD,h.sg,b.ey,m.N7,m.xd,m.x0,L.o,h.O5],styles:[".content[_ngcontent-%COMP%]{height:calc(100vh - 64px);overflow:auto;-ms-overflow-style:none;scrollbar-width:none}.content[_ngcontent-%COMP%]::webkit-scrollbar{display:none}.item[_ngcontent-%COMP%]{margin-bottom:20px}.container[_ngcontent-%COMP%]{padding:20px 0;color:#191616}mat-form-field[_ngcontent-%COMP%]{margin-bottom:10px}"]}),i})()}];let x=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[[y.Bz.forChild(Q)],y.Bz]}),i})();var N=s(5601);let D=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({providers:[w,S],imports:[[h.ez,x,N.m,a.JF,l.UX]]}),i})()}}]);